import { createContext } from "react";
import {Application, ApplicationAction } from './interface';





export interface IApplicationContext {
    application?: Application;
    applications?: Application[];

}

export const initialState : IApplicationContext = {
    application: undefined,
    applications: [],

}

export const ApplicationStateContext = createContext<IApplicationContext>(initialState);
export const ApplicationActionContext = createContext<ApplicationAction>({
    getAllApplications: () => {},
    getApplication: (id: string) => {},
    createApplication: (application: Application) => {},
    updateApplication: (application: Application) => {},
    deleteApplication: (id: string) => {},
    getApplicationCount: () => {}
});