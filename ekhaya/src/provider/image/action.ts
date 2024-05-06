import {createAction} from "redux-actions"

export enum ActionTypes{
    CREATE_IMAGE = 'CREATE_IMAGE', 
    GET_IMAGES = 'GET_IMAGES', 
}

export const createimageaction = createAction(ActionTypes.CREATE_IMAGE); 
export const getimageaction = createAction(ActionTypes.GET_IMAGES); 