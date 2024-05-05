import {createAction} from "redux-actions"

export enum ActionTypes{
    CREATE_DOCUMENTATION = 'CREATE_DOCUMENTATION', 
    GET_DOCUMENTATION = 'GET_DOCUMENTATION', 
}

export const createdocumentationaction = createAction(ActionTypes.CREATE_DOCUMENTATION); 
export const getdocumentationaction = createAction(ActionTypes.GET_DOCUMENTATION); 