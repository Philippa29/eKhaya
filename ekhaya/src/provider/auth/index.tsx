'use client'
import React , {useReducer, useContext} from 'react';
import {authReducer} from './reducer';
import { AuthStateContext, initialState , AuthActionContext } from "./context";
import {Credentials} from './interface';
import { message} from 'antd';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
   const [state, dispatch] = useReducer(authReducer, initialState);
    const {push}= useRouter();

   const login = async (credentials: Credentials) => {

    console.log('credentials', credentials); 
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_REG_URL}api/TokenAuth/Authenticate`, credentials);
        // Save the token to localStorage
        console.log('response', response);
         if(response.data.result.accessToken) {
             localStorage.setItem('authToken', response.data.result.accessToken);
         }
       

        //decode the token to find the role and then redirect based on that 
        const token = localStorage.getItem('authToken');
        console.log(token); 
        if(token) {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const decodedToken = JSON.parse(window.atob(base64));
            const roleKey = `http://schemas.microsoft.com/ws/2008/06/identity/claims/role`;
           
            let role : string = decodedToken[roleKey];
            role = role.toLowerCase();
            localStorage.setItem('role', role);
            
            //the roles are : Applicants , Agents , PropertyManagers , Residents
            push(`/${role}`);

        }
        message.success('Login successful');
    
    } catch (error:any) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.status === 400) {
                message.error('Bad request. Please check your input.');
            } else if (error.response.status === 401) {
                message.error('Unauthorized. Please check your credentials.');
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
        console.error('Error logging in', error);
        throw error; // Rethrow the error to propagate it further if needed
    }

}

const logout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('authToken');
    if(localStorage.getItem('authToken') === null) {
    message.success('Logout successful'); 
    }
    else
    {
      message.error('An error occurred while logging out');
    }
   
  };

    return (
        <AuthStateContext.Provider value={state}>
            <AuthActionContext.Provider value={{login, logout}}>
                {children}
            </AuthActionContext.Provider>
        </AuthStateContext.Provider>
    )

};


const useAuthState = () => {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error('useAuthState must be used within a AuthProvider');
    }
    return context;
}

const useAuthAction = () => {
    const context = useContext(AuthActionContext);
    if (context === undefined) {
        throw new Error('useAuthAction must be used within a AuthProvider');
    }
    return context;
}


export { AuthProvider, useAuthState, useAuthAction };