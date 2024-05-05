import {createContext } from 'react';
import { ViewPropertyState , PropertyAction, Property, UpdateProperty} from './interface';



export interface IPropertyContext {
    viewproperty: ViewPropertyState[];
    viewproperty_loading: boolean;
    property : Property | null; 
    properties : Property[]; 
} 

export const initialState : IPropertyContext = {
    viewproperty: [],
    viewproperty_loading: false,
    property: null, 
    properties: [], 
}


export const PropertyStateContext = createContext<IPropertyContext>(initialState);
export const propertyActionContext = createContext<PropertyAction>({
    getAllProperties: () => {},
    createProperty :  (property : Property) => {},
    deleteProperty : (id : string ) => {},
    updateProperty : (property : UpdateProperty ) => {},
});