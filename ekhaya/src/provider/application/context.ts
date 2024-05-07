import { createContext } from "react";
import {Application, ApplicationAction, GetApplications } from './interface';





export interface IApplicationContext {
    application: Application | null ;
    applications?: Application[];
    getapplications : GetApplications[]; 

}

export const initialState : IApplicationContext = {
    application: null, 
    applications: [],
    getapplications: [], 
}

export const ApplicationStateContext = createContext<IApplicationContext>(initialState);
export const ApplicationActionContext = createContext<ApplicationAction>({
    getAllApplications: () => {},
    getApplication: (id: string) => {},
    createApplication: (application: Application) => {} ,
    updateApplication: (application: Application) => {},
    deleteApplication: (id: string) => {},
    getApplicationCount: () => {},
    getApplicationForApplicant: () => {}, 
});