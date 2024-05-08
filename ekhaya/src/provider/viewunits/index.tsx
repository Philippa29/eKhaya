'use client'
import React , {useContext , useReducer} from 'react'; 
import axios from 'axios'; 
import { ViewUnitsReducer } from './reducer';
import {getAllUnitsPerPropertyAction  } from './action';
import { initialState, GetAllUnitsActionContext, GetAllUnitsStateContext } from './context';
import { message } from 'antd';


interface ViewUnitsProps{
    children : React.ReactNode; 
}

const ViewUnitsProvider : React.FC<ViewUnitsProps> = ({children}) => {
    const [state, dispatch] = useReducer(ViewUnitsReducer , initialState); 


    const getAllUnitsPerProperty = async (id : string ) => {
        try{
            localStorage.clear();
            const response = await axios.get(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/UnitsAmenities/GetUnitDetailsForProperty?propertyId=${id}`);
           
            if(response.data.success)
            {

                message.success("Units Successful!"); 
                dispatch(getAllUnitsPerPropertyAction(response.data.result)); 
            }
            
        }
        catch{
            message.error("Network Error!")
        }
    }


    return (
        <GetAllUnitsStateContext.Provider value = {state}>
            <GetAllUnitsActionContext.Provider value = { {getAllUnitsPerProperty} }>
            {children}
            </GetAllUnitsActionContext.Provider>
        </GetAllUnitsStateContext.Provider>
    )
}


const useViewUnitsState = () => {
    const context = useContext(GetAllUnitsStateContext); 
    if(context === undefined){
        throw new Error('useViewUnitsState must be used within a ViewUnitsProvider');
    }
    return context; 
}

const useViewUnitsAction = () => {
    const context = useContext(GetAllUnitsActionContext); 
    if(context === undefined){
        throw new Error('useViewUnitsAction must be used within a ViewUnitsProvider');
    }
    return context; 
}


export {ViewUnitsProvider , useViewUnitsState , useViewUnitsAction};