export interface ViewPropertyState {
    properties: ViewProperty[];
    loading: boolean;
    error: string;
}

export interface ViewProperty {
    propertyId: string; 
    propertyName: string;
    description: string;
    amenities: string[];
    base64image : string;
}

export interface Property {
    id: string; 
    addressLine1 : string ; 
    addressLine2 : string ; 
    addressLine3 : string ; 
    Suburb : string ; 
    Town : string; 
    POBox : string ; 
    Latitude : number ; 
    Longitude : number; 
    Size: number; 
    AgentsIds : string[]; 
    AmenityIds : string[]; 
    PropertyName : string; 
    Description : string; 
}

export interface UpdateProperty {
    Size : number ; 
    PropertyManagerId : string; 
    PropertyName : string ; 
    Decription : string ; 
}

export interface PropertyAction {
    createProperty : (property : Property) => void; 
    getAllProperties: () => void;
    updateProperty : (property : UpdateProperty) => void; 
    deleteProperty : (id : string ) => void; 
}