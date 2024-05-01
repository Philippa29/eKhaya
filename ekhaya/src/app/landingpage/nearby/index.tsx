// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const MapPage = () => {
//   // Sample properties data
//   const properties = [
//     { lat: 37.7749, lng: -122.4194, name: 'Property 1' },
//     { lat: 34.0522, lng: -118.2437, name: 'Property 2' },
//     // Add more properties as needed
//   ];

//   // Google Maps API key
//   const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <LoadScript googleMapsApiKey={apiKey}>
//         <GoogleMap
//           mapContainerStyle={{ height: '100%', width: '100%' }}
//           zoom={10}
//           center={{ lat: 37.7749, lng: -122.4194 }}
//         >
//           {/* Render markers for properties */}
//           {properties.map((property, index) => (
//             <Marker
//               key={index}
//               position={{ lat: property.lat, lng: property.lng }}
//               title={property.name}
//             />
//           ))}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default MapPage;
