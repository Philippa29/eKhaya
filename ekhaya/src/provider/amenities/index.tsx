'use client'
import React , {useContext , useReducer } from 'react'; 
import { amenitiesReducer } from './reducer';
import { message } from 'antd';
import { createAmenitiesAction, getAllAmenitiesAction } from './action';
import {AmentitiesStateContext, AmenitiesActionsContext } from './context'
import { initialState, Amenities } from './interface';
import axios from 'axios'; 



interface AmenitiesProviderProps {
    children: React.ReactNode; 
}


const AmenitiesProvider : React.FC<AmenitiesProviderProps> = ({children}) => {
    const [state , dispatch] = useReducer(amenitiesReducer, initialState); 


    const createAmenities = async (amenity : Amenities) => {
        try{
            
            const response = await axios.post(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Amenities/CreateAmenities`, amenity);
            if(!response.data.success)
                {
                    throw new Error('Unsuccessful'); 
                }
            dispatch(createAmenitiesAction(response.data.result)); 
            message.success('successfully added category');  
        }
        catch{
            message.error("Network Error!")
        }
    }


    
    const getallAmenities= async () => {
        try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Amenities/GetAllAmenities`);
            if(!response.data.success)
                {
                    throw new Error('Unsuccessful'); 
                }
            dispatch(getAllAmenitiesAction(response.data.result)); 
            message.success('successfully category');  
        }
        catch{
            message.error("Network Error!")
        }
    }


    return (
        <AmentitiesStateContext.Provider value = {state}>
            <AmenitiesActionsContext.Provider value = {{createAmenities , getallAmenities}}>
                {children}
            </AmenitiesActionsContext.Provider>
        </AmentitiesStateContext.Provider>
    )
}


const useAmenitiesState = () =>{
    const context = useContext(AmentitiesStateContext);
    if (!context) {
        throw new Error('useAmenitiesState must be used within a Provider');
    }
    return context;
}

const useAmenitiesAction = () =>{
    const context = useContext(AmenitiesActionsContext);
    if (!context) {
        throw new Error('useAmenitiesAction must be used within a Provider');
    }
    return context;


}


export { useAmenitiesAction , useAmenitiesState , AmenitiesProvider}