'use client'
import React from 'react';
import axios from 'axios';
import { AddressStateContext, addressActionContext, initialState } from './context';
import { addressReducer } from './reducer';
import { ActionTypes, getAllAddressesAction, getAllAddressesFailedAction, getAllAddressesLoadingAction } from './action';
import { IAddressContext } from './context';


interface AddressProviderProps {
    children: React.ReactNode;
}

const AddressProvider: React.FC<AddressProviderProps> = ({ children }) => {
    const [state, dispatch] = React.useReducer(addressReducer, initialState);

    const getAllAddresses = async () => {
        try {
            dispatch(getAllAddressesLoadingAction());
            const response = await axios.get(`https://localhost:44311/api/services/app/Address/GetAllAddresses`);
            dispatch(getAllAddressesAction(response.data.result));
        } catch (error) {
            dispatch(getAllAddressesFailedAction());
        }
    }

    return (
        <AddressStateContext.Provider value={state}>
            <addressActionContext.Provider value={{ getAllAddresses }}>
                {children}
            </addressActionContext.Provider>
        </AddressStateContext.Provider>
    )
}

const useAddressState = () => {
    const context = React.useContext(AddressStateContext);
    if (context === undefined) {
        throw new Error('useAddressState must be used within a AddressProvider');
    }
    return context;
}

const useAddressAction = () => {
    const context = React.useContext(addressActionContext);
    if (context === undefined) {
        throw new Error('useAddressAction must be used within a AddressProvider');
    }
    return context;
}

export { AddressProvider, useAddressState, useAddressAction };