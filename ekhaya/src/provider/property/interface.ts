export interface ViewPropertyState {
    properties: ViewProperty[];
    loading: boolean;
    error: string;
}

export interface ViewProperty {
    id: string; 
    propertyname: string;
    description: string;
    amenities: string[];
    base64image : string;
}

export interface PropertyAction {
    getAllProperties: () => void;
   
}