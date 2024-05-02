import {createContext } from 'react';
import { ViewPropertyState , PropertyAction} from './interface';



export interface IPropertyContext {
    viewproperty: ViewPropertyState[];
    viewproperty_loading: boolean;
    
    ///property : PropertyState;
} 

export const initialState : IPropertyContext = {
    viewproperty: [],
    viewproperty_loading: false,
    
    // property: {
    //     properties: [],
    //     loading: false,
    //     error: ""
    // }
}


export const PropertyStateContext = createContext<IPropertyContext>(initialState);
export const propertyActionContext = createContext<PropertyAction>({
    getAllProperties: () => {}
});