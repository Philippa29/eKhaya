import {createAction} from "redux-actions"

export enum ActionTypes{
    CREATE_DOCUMENTATION = 'CREATE_DOCUMENTATION', 
    GET_DOCUMENTATION = 'GET_DOCUMENTATION',
    CREATE_LEASE = 'CREATE_LEASE',
    GET_LEASE = 'GET_LEASE', 
}

export const createdocumentationaction = createAction(ActionTypes.CREATE_DOCUMENTATION); 
export const getdocumentationaction = createAction(ActionTypes.GET_DOCUMENTATION); 
export const createleaseaction = createAction(ActionTypes.CREATE_LEASE);
export const getleaseaction = createAction(ActionTypes.GET_LEASE);