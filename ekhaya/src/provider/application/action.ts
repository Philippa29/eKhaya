import { createAction } from "redux-actions";
import { Application } from "./interface";
import { IApplicationContext } from "./context";


export enum ActionTypes {
    GET_ALL_APPLICATION = "GET_ALL_APPLICATION",
    CREATE_APPLICATION = "CREATE_APPLICATION",
    UPDATE_APPLICATION = "UPDATE_APPLICATION",
    DELETE_APPLICATION = "DELETE_APPLICATION",
    GET_APPLICATION_BY_APPLICANT = "GET_APPLICATION_BY_APPLICANT",
    COUNT_APPLICATION = "COUNT_APPLICATION",
}


export const getAllApplicationAction = createAction<IApplicationContext>(ActionTypes.GET_ALL_APPLICATION);
export const createApplicationAction = createAction<IApplicationContext, IApplicationContext>(ActionTypes.CREATE_APPLICATION, p=>p);
export const updateApplicationAction = createAction<string>(ActionTypes.UPDATE_APPLICATION);
export const deleteApplicationAction = createAction<string>(ActionTypes.DELETE_APPLICATION);
export const getApplicationByApplicantAction = createAction(ActionTypes.GET_APPLICATION_BY_APPLICANT);
export const countApplicationAction = createAction<number>(ActionTypes.COUNT_APPLICATION);
