import {createContext} from 'react';
import { AddressState, AddressAction , Address} from './interface';

export interface IAddressContext {
    addresses: Address[];
     
}

export const initialState : IAddressContext = {
    addresses: [],
    
}

export const AddressStateContext = createContext<IAddressContext>(initialState);
export const addressActionContext = createContext<AddressAction>({
    getAllAddresses: () => {}
});