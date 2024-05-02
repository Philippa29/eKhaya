import { createAction } from "redux-actions";
import { Address } from "./interface";

export enum ActionTypes {
    GET_ALL_ADDRESSES = "GET_ALL_ADDRESSES",
    GET_ALL_ADDRESSES_FAILED = "GET_ALL_ADDRESSES_FAILED",
    GET_ALL_ADDRESSES_LOADING = "GET_ALL_ADDRESSES_LOADING",
}

export const getAllAddressesAction = createAction<Address[], Address[]>(ActionTypes.GET_ALL_ADDRESSES, p=>p);
export const getAllAddressesFailedAction = createAction(ActionTypes.GET_ALL_ADDRESSES_FAILED);
export const getAllAddressesLoadingAction = createAction(ActionTypes.GET_ALL_ADDRESSES_LOADING);