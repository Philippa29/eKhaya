import React , { useReducer , useContext } from 'react';
import { registerReducer } from './reducer';
import { initialState } from './context';
import { RegisterActionContext, RegisterStateContext } from './context';
import { useRouter } from 'next/navigation';
import { RegisterState } from './interface';
import { message } from 'antd';
import axios from 'axios';

interface RegisterProviderProps {
    children: React.ReactNode;
}

const RegisterProvider : React.FC<RegisterProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(registerReducer, initialState);
     
    
    const registeruser = async (register: RegisterState) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}api/services/app/Applicant/CreateApplicant`, register);
            message.success('Register successful');
        } catch (error:any) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                if (error.response.status === 400) {
                    message.error('Bad request. Please check your input.');
                } else if (error.response.status === 401) {
                    message.error('Unauthorized. Please login before registering.');
                } else if (error.response.status === 404) {
                    message.error('Not found. The requested resource does not exist.');
                } else {
                    message.error('An error occurred. Please try again later.');
                }
            } else if (error.request) {
                // The request was made but no response was received
                message.error('No response received from the server. Please try again later.');
            } else {
                // Something happened in setting up the request that triggered an error
                message.error('An error occurred. Please try again later.');
            }
            console.error('Error creating Applicant', error);
            throw error; // Rethrow the error to propagate it further if needed
        }
    };
    
    
    
    
    return (
        <RegisterStateContext.Provider value={state}>
            <RegisterActionContext.Provider value={{registeruser}}>
                {children}
            </RegisterActionContext.Provider>
        </RegisterStateContext.Provider>
    )

   
};

const useRegisterState = () => {
    const context = useContext(RegisterStateContext);
    if (context === undefined) {
        throw new Error('useRegisterState must be used within a RegisterProvider');
    }
    return context;
}

const useRegisterAction = () => {
    const context = useContext(RegisterActionContext);
    if (context === undefined) {
        throw new Error('useRegisterAction must be used within a RegisterProvider');
    }
    return context;
}

export { RegisterProvider, useRegisterState, useRegisterAction };