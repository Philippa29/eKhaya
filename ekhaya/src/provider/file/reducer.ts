import { IFileContext } from "./context";
import { handleActions } from "redux-actions";
import { ActionTypes } from "./action";
import { initialState } from "./context";

const fileReducer = handleActions<IFileContext, any>(
    {
        [ActionTypes.CREATE_DOCUMENTATION]: (state, action) => {
            return {
                ...state,
                file: action.payload
            }
            
        },
        [ActionTypes.GET_DOCUMENTATION]: (state, action) => {
            return {
                ...state,
                file: action.payload
            }
           
        }
    },
    initialState
);

export default fileReducer;