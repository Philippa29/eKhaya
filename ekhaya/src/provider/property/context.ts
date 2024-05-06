import {createContext } from 'react';
import { ViewProperty , PropertyAction, Property, UpdateProperty} from './interface';



export interface IPropertyContext {
    viewproperty: ViewProperty[];
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