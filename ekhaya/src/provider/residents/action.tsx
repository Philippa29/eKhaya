import { createAction } from "redux-actions";


export enum ActionTypes {
    GET_ALL_RESIDENTS = "GET_ALL_RESIDENTS",
    GET_ALL_RESIDENTS_FAILED = "GET_ALL_RESIDENTS_FAILED",
    GET_ALL_RESIDENTS_LOADING = "GET_ALL_RESIDENTS_LOADING",
    CREATE_RESIDENT = "CREATE_RESIDENT",
    UPDATE_RESIDENT = "UPDATE_RESIDENT",
    DELETE_RESIDENT = "DELETE_RESIDENT",
}

export const getAllResidentsAction = createAction<any[], any[]>(ActionTypes.GET_ALL_RESIDENTS, p=>p);
