'use client'
import React from 'react';
import { applicationReducer } from './reducer';
import { initialState } from './context';
import { message } from 'antd';
import { getAllApplicationAction ,createApplicationAction , deleteApplicationAction , getApplicationByApplicantAction , countApplicationAction } from './action';
import { ApplicationStateContext, ApplicationActionContext } from './context';
import axios from 'axios';
import { useReducer } from 'react';
import { useContext } from 'react';
import { Application } from './interface';


interface ApplicationProps {
    children: React.ReactNode;
}

const ApplicationProvider: React.FC<ApplicationProps> = ({ children }) => {
    const [state, dispatch] = useReducer(applicationReducer, initialState);

    const getAllApplications = async () => {
        try {
            
            const response = await axios.get(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Application/GetAllApplications`,
                
            );
            dispatch(getAllApplicationAction(response.data.result));
        }
        catch (error) {
            message.error('An error occurred. Please try again later.');
        }
    }
    const createApplication = async (application: Omit<Application, 'id'>) => {
        try {
            console.log(localStorage.getItem('authToken')); 
            console.log("application in provider before call: " , application); 
            
            //Make the HTTP POST request to create the application
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Applications/CreateApplication`,
                application,
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

             console.log(response.data.result); 
            dispatch(createApplicationAction (response.data.result)); 
            message.success('Application created successfully');
            // Handle the response as needed
            return response.data.result; 
        } catch (error) {
            message.error('An error occurred. Please try again later.');
            // Handle errors here
        }
    };
    

    const updateApplication = async (application: Application ) => {
        try {
            console.log("application", application); 
            
           const response = await axios.put(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Applications/UpdateApplication`, application);
           console.log("reponse in provider ", response); 
           message.success('Application updated successfully');
           
            
        } catch (error) {
            message.error('An error occurred. Please try again later.');
        }
    }

    const deleteApplication = async (id: string) => {
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Application/DeleteApplication`, { data: { id } });
            message.success('Application deleted successfully');
            dispatch(deleteApplicationAction(id));
        } catch (error) {
            message.error('An error occurred. Please try again later.');
        }
    }

    const getApplication = async (id: string) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Application/GetApplicationById`, { params: { id } });
            dispatch(getApplicationByApplicantAction(response.data.result));
        } catch (error) {
            message.error('An error occurred. Please try again later.');
        }
    }

    const getApplicationCount = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Application/GetApplicationCount`);
            dispatch(countApplicationAction(response.data.result));
        } catch (error) {
            message.error('An error occurred. Please try again later.');
        }
    }

    return (
        <ApplicationStateContext.Provider value={state}>
            <ApplicationActionContext.Provider value={{ getAllApplications, createApplication, updateApplication, deleteApplication, getApplicationCount, getApplication }}>
                {children}
            </ApplicationActionContext.Provider>
        </ApplicationStateContext.Provider>
    )


}



const useApplicationState = () => {
    const context = useContext(ApplicationStateContext);
    if (context === undefined) {
        throw new Error('useApplicationState must be used within a ApplicationProvider');
    }
    return context;
}



const useApplicationAction = () => {
    const context = useContext(ApplicationActionContext);
    if (context === undefined) {
        throw new Error('useApplicationAction must be used within a ApplicationProvider');
    }
    return context;
}



export { ApplicationProvider, useApplicationState, useApplicationAction };
