import { handleActions } from "redux-actions";
import { initialState , IViewUnitsContext } from "./context";
import { ActionTypes } from "./action";

const ViewUnitsReducer = handleActions<IViewUnitsContext , any>({

    [ActionTypes.GET_ALL_UNITS_PER_PROPERTY] : (state , action) => {
        if(action.payload){
            return {
                ...state, 
                getallunits: action.payload, 
            }
        }

        return state; 
    }
}, initialState); 

export {ViewUnitsReducer}; 