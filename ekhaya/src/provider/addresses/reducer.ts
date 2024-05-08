import { handleActions } from "redux-actions";
import { ActionTypes } from "./action";
import { IAddressContext, initialState } from "./context";

export const addressReducer = handleActions<IAddressContext, any>(
    {
        [ActionTypes.GET_ALL_ADDRESSES]: (state, action) => {
           
            if (action.payload) {
                return {
                    ...state,
                    addresses: action.payload,
                    addresses_loading: false
                };
            }
            return state;
        },
        [ActionTypes.GET_ALL_ADDRESSES_FAILED]: (state, action) => {
            return {
                ...state,
                addresses_loading: false
            };
        },
        [ActionTypes.GET_ALL_ADDRESSES_LOADING]: (state, action) => {
            return {
                ...state,
                addresses_loading: true
            };
        }
    },
    initialState
);