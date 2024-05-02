'use client'
import React, { useContext , useReducer} from 'react';
import { initialState } from './context';
import { viewpropertyReducer } from './reducer';
import { ActionTypes , getAllPropertiesAction, getAllPropertiesFailedAction,getAllPropertiesLoadingAction} from './action';
import { PropertyStateContext, propertyActionContext } from './context';
import axios from 'axios';
import { get } from 'http';
interface ViewPropertyProps {
    children: React.ReactNode;
}

const ViewPropertyProvider: React.FC<ViewPropertyProps> = ({ children }) => {


    const [state, dispatch] = useReducer(viewpropertyReducer, initialState);


    const getAllProperties =  async () => {

        try {
            dispatch(getAllPropertiesLoadingAction());
            const response = await axios.get(`https://localhost:44311/api/services/app/PropertyAmenities/GetAllAvailableProperties`);
            console.log('response in provider ', response); 
            dispatch(getAllPropertiesAction(response.data.result));
        }
        catch (error) {
            dispatch(getAllPropertiesFailedAction());
        }


    } 


    return (
        <PropertyStateContext.Provider value={state}>
            <propertyActionContext.Provider value={{ getAllProperties }}>
                {children}
            </propertyActionContext.Provider>
        </PropertyStateContext.Provider>
    )
}


const useViewPropertyState = () => {
    const context = useContext(PropertyStateContext);
    if (context === undefined) {
        throw new Error('useViewPropertyState must be used within a ViewPropertyProvider');
    }
    return context;
}

const useViewPropertyAction = () => {
    const context = useContext(propertyActionContext);
    if (context === undefined) {
        throw new Error('usePropertyAction must be used within a ViewPropertyProvider');
    }
    return context;
}

export { ViewPropertyProvider, useViewPropertyState, useViewPropertyAction };