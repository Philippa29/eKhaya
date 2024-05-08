import { createContext } from "react";
import { GetAllUnitsAction } from "./interface";

export interface IViewUnitsContext {
    getallunits? : GetAllUnitsState[]
}


export interface GetAllUnitsState{
    propertyId : string ; 
    unitTye: number; 
    amenities: string[]; 
    base64Images: string[]; 
}

export const initialState : IViewUnitsContext ={
    getallunits : [],
}


export const GetAllUnitsStateContext = createContext<IViewUnitsContext>(initialState); 
export const GetAllUnitsActionContext = createContext<GetAllUnitsAction>({
    getAllUnitsPerProperty: async (id : string ) => {},
}); 