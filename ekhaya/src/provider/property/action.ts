import { createAction } from "redux-actions";
import { ViewProperty } from "./interface";



export enum ActionTypes {
    GET_ALL_PROPERTIES = "GET_ALL_PROPERTIES",
    GET_ALL_PROPERTIES_FAILED = "GET_ALL_PROPERTIES_FAILED",
    GET_ALL_PROPERTIES_LOADING = "GET_ALL_PROPERTIES_LOADING",
}

export const getAllPropertiesAction = createAction<ViewProperty[], ViewProperty[]>(ActionTypes.GET_ALL_PROPERTIES, p=>p);
export const getAllPropertiesFailedAction = createAction(ActionTypes.GET_ALL_PROPERTIES_FAILED);
export const getAllPropertiesLoadingAction = createAction(ActionTypes.GET_ALL_PROPERTIES_LOADING);