import { createAction } from "redux-actions";
import { Amenities } from "./interface";

export enum ActionTypes {
    GET_ALL_AMENITIES = "GET_ALL_AMENITIES",
    CREATE_AMENITIES = "CREATE_AMENITIES", 
}


export const createAmenitiesAction = createAction<Amenities, Amenities>(ActionTypes.CREATE_AMENITIES, p=>p ); 
export const getAllAmenitiesAction = createAction<Amenities[] , Amenities[]> (ActionTypes.GET_ALL_AMENITIES, p=>p); 