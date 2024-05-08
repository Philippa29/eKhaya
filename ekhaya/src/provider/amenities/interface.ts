export interface Amenities {
    id: string; 
    name: string ; 
    type: number; 
}

export interface IAmenitiesContext {
    amenity: Amenities | null; 
    amenities: Amenities[]; 
}

export const initialState: IAmenitiesContext = {
    amenity: null, 
    amenities: [],
};



export interface AmenitiesActions {
    createAmenities: (Amenity : Amenities) => void; 
    getallAmenities: () => void; 
}

