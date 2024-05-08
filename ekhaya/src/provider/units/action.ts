import {createAction} from 'redux-actions'
import { Unit, UpdateUnits , CreateUnit } from './interface'


export enum ActionTypes {
    CREATE_UNITS = "CREATE_UNITS", 
    DELETE_UNIT = "DELETE_UNIT", 
    GET_ALL_UNITS = "GET_ALL_UNITS", 
    UPDATE_UNITS = "UPDATE_UNITS",
    GET_ALL_UNITS_LOADING = "GET_ALL_UNITS_LOADING",
    GET_ALL_UNITS_SUCCESS = "GET_ALL_UNITS_SUCCESS",
}


export const createUnitsAction = createAction<CreateUnit, CreateUnit>(ActionTypes.CREATE_UNITS, p=>p);
export const deleteUnitAction = createAction<string, string>(ActionTypes.DELETE_UNIT, p=>p);
export const getAllUnitsAction = createAction<Unit[], Unit[]>(ActionTypes.GET_ALL_UNITS, p=>p);
export const updateUnitsAction = createAction<UpdateUnits, UpdateUnits>(ActionTypes.UPDATE_UNITS, p=>p);
export const getAllUnitsLoadingAction = createAction(ActionTypes.GET_ALL_UNITS_LOADING);
export const getAllUnitsSuccessAction = createAction(ActionTypes.GET_ALL_UNITS_SUCCESS);