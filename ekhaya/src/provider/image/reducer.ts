import { IImageContext } from "./context";
import { handleActions } from "redux-actions";
import { ActionTypes } from "./action";
import { initialState } from "./context";

const ImageReducer = handleActions<IImageContext, any>(
    {
        [ActionTypes.CREATE_IMAGE]: (state, action) => {
            return {
                ...state,
                file: action.payload
            }
            
        },
        [ActionTypes.GET_IMAGES]: (state, action) => {
            return {
                ...state,
                file: action.payload
            }
           
        }
    },
    initialState
);

export default ImageReducer;