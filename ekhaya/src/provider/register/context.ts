import {createContext} from 'react';
import { RegisterActions, RegisterState } from './interface';
import { createAction } from 'redux-actions';


export interface IRegisterContext {
    register: RegisterState;

} 

export const initialState: IRegisterContext = {
    register: {
        
        applicantId: '',
        name: '',
        surname: '',
        emailAddress: '',
        phoneNumber: '',
        password: '',
        roleNames: [],
    }
};

export const RegisterStateContext = createContext<IRegisterContext>(initialState);
export const RegisterActionContext = createContext<RegisterActions>({
    registeruser : (register : RegisterState) => {},
    
});