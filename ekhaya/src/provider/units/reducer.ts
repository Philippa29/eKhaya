import { IUnitsContext , initialState } from "./interface";
import { handleActions } from "redux-actions";
import { ActionTypes } from "./action";


export const unitsReducer = handleActions<IUnitsContext, any>({
    [ActionTypes.CREATE_UNITS] : (state, action) => {
        if(action.payload)
            {
                return{
                    ...state, 
                    units: [...state.units , action.payload], 
                }
            }

            return state; 
    }, 
    [ActionTypes.GET_ALL_UNITS] : (state, action) => {
        if(action.payload)
            {
                return {
                    ...state, 
                    units: action.payload
                }
            }
            return state; 
    }, 
    [ActionTypes.UPDATE_UNITS] : (state, action) => {
        if(action.payload)
            {
                return {
                    ...state, 
                    units: state.units.map((unit) => {
                        if(unit.id === action.payload.id)
                            {
                                return action.payload
                            }
                            return unit; 
                    })
                }
            }
            return state; 
    }, 
    [ActionTypes.DELETE_UNIT] : (state, action) => {
        if(action.payload)
            {
                return {
                    ...state, 
                    units: state.units.filter((unit) => unit.id !== action.payload)
                }
            }
            return state; 
    }
}, initialState)
