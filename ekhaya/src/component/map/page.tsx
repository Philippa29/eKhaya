import React, { useEffect } from "react";
import { useAddressAction, useAddressState } from "@/provider/addresses";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: '100vw', 
  height: '100vh', 
};

const center = {
  lat: -25.8642,
  lng: 28.0884,
};

interface Location {
    lat: number;
    lng: number;
    title: string;
    
  }

const GoogleMapComponent: React.FC = () => {
  const { addresses } = useAddressState();
  const { getAllAddresses } = useAddressAction();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [userLocation, setUserLocation] = React.useState<null | {
    lat: number;
    lng: number;
  }>(null);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    // Fetch addresses
    getAllAddresses();
  }, []); // Include getAllAddresses in the dependency array

  const [selectedMarker, setSelectedMarker] = React.useState<Location | null>(
    null
  );

  console.log('addresses in front', addresses);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={userLocation || center}
      zoom={12}
    >
      {addresses &&
        addresses.map((address, index) => (
          <Marker
            key={index}
            position={{ lat:address.latitude, lng: address.longitude}}
            onClick={() => {
              setSelectedMarker({
                lat: address.latitude,
                lng: address.longitude,
                title: address.propertyName,
              });
            }}
          />
        ))}
      {selectedMarker && (
        <InfoWindow
          position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div>
            <h3>{selectedMarker.title}</h3>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GoogleMapComponent;