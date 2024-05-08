import { IAmenitiesContext, initialState } from "./interface";
import { handleActions } from "redux-actions";
import { ActionTypes } from "./action";


export const amenitiesReducer = handleActions<IAmenitiesContext, any>({
    [ActionTypes.CREATE_AMENITIES] : (state, action) => {
        if(action.payload)
            {
                return{
                    ...state, 
                    amenities: [...state.amenities , action.payload], 
                }
            }

            return state; 
    }, 
    [ActionTypes.GET_ALL_AMENITIES] : (state, action) => {
        if(action.payload)
            {
                return {
                    ...state, 
                    amenities: action.payload
                }
            }
            return state; 
    }

}, initialState)