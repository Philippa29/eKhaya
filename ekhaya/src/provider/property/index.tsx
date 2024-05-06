'use client'
import React, { useContext , useReducer} from 'react';
import { initialState } from './context';
import { viewpropertyReducer } from './reducer';
import {  createPropertyAction, deletePropertyAction, getAllPropertiesAction, getAllPropertiesFailedAction,getAllPropertiesLoadingAction, updatePropertyAction} from './action';
import { PropertyStateContext, propertyActionContext } from './context';
import axios from 'axios';
import { get } from 'http';
import { Property, UpdateProperty } from './interface';
import { message } from 'antd';
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

    const createProperty  =  async (property : Property) => {

        try {
            
            
            const response = await axios.post(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Property/CreateProperty`, property, 
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            }
            );
            console.log('response in provider ', response); 
            
            dispatch(createPropertyAction(response.data.result));
            
            message.success("property successfully made!")
        }
        catch (error) {
            message.error("property unsuccessfully!"); 
        }


    } 


    const updateProperty =  async (updateProperty : UpdateProperty) => {

        try {
            dispatch(getAllPropertiesLoadingAction());
            console.log(process.env.NEXT_PUBLIC_REG_URL); 
            const response = await axios.put(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Property/UpdateProperty`, updateProperty,  
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            }
            );
            console.log('response in provider ', response); 
            dispatch(updatePropertyAction(response.data.result));
        }
        catch (error) {
            dispatch(getAllPropertiesFailedAction());
        }


    } 

    const deleteProperty =  async (id : string ) => {

        try {
            
            console.log(process.env.NEXT_PUBLIC_REG_URL); 
            const response = await axios.put(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Property/DeleteProperty?id=${id}`);
            console.log('response in provider ', response); 
            dispatch(deletePropertyAction(response.data.result));
        }
        catch (error) {
            dispatch(getAllPropertiesFailedAction());
        }


    } 


    return (
        <PropertyStateContext.Provider value={state}>
            <propertyActionContext.Provider value={{ getAllProperties, createProperty , deleteProperty , updateProperty }}>
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