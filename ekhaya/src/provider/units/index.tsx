'use client'
import React , {useContext , useReducer } from 'react';
import { unitsReducer } from './reducer';
import { message } from 'antd';
import { createUnitsAction, getAllUnitsAction } from './action';
import {UnitsStateContext, UnitsActionsContext } from './context'
import { CreateUnit, initialState, Unit, UpdateUnits} from './interface';
import axios from 'axios';

interface UnitsProviderProps {
    children: React.ReactNode; 
}

const UnitsProvider : React.FC<UnitsProviderProps> = ({children}) => {
    const [state , dispatch] = useReducer(unitsReducer, initialState); 

    const createUnits = async (unit : CreateUnit) => {
        try{
           
            const response = await axios.post(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Units/CreateUnits`, unit);
            if(!response.data.success)
                {
                    throw new Error('Unsuccessful'); 
                }
            dispatch(createUnitsAction(response.data.result)); 
            message.success('successfully added unit');  
        }
        catch{
            message.error("Network Error!")
        }
    }

    const getallUnits= async () => {
        try{

            var local = localStorage.getItem("propertyId"); 
          
            const response = await axios.get(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Units/GetAllUnits`);
            if(!response.data.success)
                {
                    throw new Error('Unsuccessful'); 
                }
            dispatch(getAllUnitsAction(response.data.result)); 
            message.success('successfully unit');  
        }
        catch{
            message.error("Network Error!")
        }
    }

    const getallUnitsAvailable= async () => {
        try{

            var local = localStorage.getItem("propertyId"); 
           
            const response = await axios.get(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Units/GetAllUnits`);
            if(!response.data.success)
                {
                    throw new Error('Unsuccessful'); 
                }
            dispatch(getAllUnitsAction(response.data.result)); 
            message.success('successfully unit');  
        }
        catch{
            message.error("Network Error!")
        }
    }

    const getallUnitsAgent= async () => {
        try{

            var local = localStorage.getItem("propertyId"); 
          
            const response = await axios.get(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Units/GetAllAvailableUnitsForAgent`);
            if(!response.data.success)
                {
                    throw new Error('Unsuccessful'); 
                }
            dispatch(getAllUnitsAction(response.data.result)); 
            message.success('successfully unit');  
        }
        catch{
            message.error("Network Error!")
        }
    }

    const updateUnits = async (unit : UpdateUnits) => {
        try{
             
            const response = await axios.put(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Units/UpdateUnit`, unit);
            if(!response.data.success)
                {
                    throw new Error('Unsuccessful'); 
                }
            dispatch(createUnitsAction(response.data.result)); 
            message.success('successfully updated unit');  
        }
        catch{
            message.error("Network Error!")
        }
    }

    const deleteUnit = async (id: string) => {
        try{
           
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Units/DeleteUnit`, {data: {id}});
            if(!response.data.success)
                {
                    throw new Error('Unsuccessful'); 
                }
            dispatch(createUnitsAction(response.data.result)); 
            message.success('successfully deleted unit');  
        }
        catch{
            message.error("Network Error!")
        }
    }

    return (
        <UnitsStateContext.Provider value = {state}>
            <UnitsActionsContext.Provider value = {{getallUnitsAgent, getallUnitsAvailable,createUnits , getallUnits,deleteUnit , updateUnits }}>
                {children}
            </UnitsActionsContext.Provider>
        </UnitsStateContext.Provider>
    )
}

const useUnitsState = () => {
    const context = useContext(UnitsStateContext);
    if (context === undefined) {
      throw new Error('useUnitsState must be used within a UnitsProvider');
    }
    return context;
  }

const useUnitsAction = () => {
    const context = useContext(UnitsActionsContext);
    if (context === undefined) {
      throw new Error('useUnitsAction must be used within a UnitsProvider');
    }
    return context;
  }

export {UnitsProvider, useUnitsState, useUnitsAction};

