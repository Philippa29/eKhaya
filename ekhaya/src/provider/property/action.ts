import { createAction } from "redux-actions";
import { ViewProperty } from "./interface";



export enum ActionTypes {
    GET_ALL_PROPERTIES = "GET_ALL_PROPERTIES",
    GET_ALL_PROPERTIES_FAILED = "GET_ALL_PROPERTIES_FAILED",
    GET_ALL_PROPERTIES_LOADING = "GET_ALL_PROPERTIES_LOADING",
    CREATE_PROPERTY = "CREATE_PROPERTY",
    UPDATE_PROPERTY = "UPDATE_PROPERTY", 
    DELETE_PROPERTY = "DELETE_PROPERTY", 
}

export const getAllPropertiesAction = createAction<ViewProperty[], ViewProperty[]>(ActionTypes.GET_ALL_PROPERTIES, p=>p);
export const getAllPropertiesFailedAction = createAction(ActionTypes.GET_ALL_PROPERTIES_FAILED);
export const getAllPropertiesLoadingAction = createAction(ActionTypes.GET_ALL_PROPERTIES_LOADING);
export const createPropertyAction = createAction(ActionTypes.CREATE_PROPERTY); 
export const updatePropertyAction = createAction(ActionTypes.UPDATE_PROPERTY); 
export const deletePropertyAction = createAction(ActionTypes.DELETE_PROPERTY); 