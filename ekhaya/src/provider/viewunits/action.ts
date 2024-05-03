import {createAction } from "redux-actions";
import { GetAllUnitsState } from "./context";
import {IViewUnitsContext} from "./context"


export enum ActionTypes {
    GET_ALL_UNITS_PER_PROPERTY = "GET_ALL_UNITS_PER_PROPERTY",
    GET_ALL_UNITS_PER_PROPERTY_FAILED = "GET_ALL_UNITS_PER_PROPERTY_FAILED",
    GET_ALL_UNITS_PER_PROPERTY_LOADING = "GET_ALL_UNITS_PER_PROPERTY_LOADING",
}


export const getAllUnitsPerPropertyAction = createAction<string >(ActionTypes.GET_ALL_UNITS_PER_PROPERTY ); 
 