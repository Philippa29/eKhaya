import { IPropertyContext , initialState } from "./context";
import { handleActions } from "redux-actions";
import { ActionTypes } from "./action";

export const viewpropertyReducer = handleActions<IPropertyContext, any>(
   {
         [ActionTypes.GET_ALL_PROPERTIES]: (state, action) => {
            console.log('action.payload', action.payload);
            if (action.payload) {
                return {
                    ...state,
                    viewproperty: action.payload,
                    viewproperty_loading: false
                };
            }
            return state;
         },
         [ActionTypes.GET_ALL_PROPERTIES_FAILED]: (state, action) => {
              return {
                ...state,
                viewproperty_loading: false
              };
         },
         [ActionTypes.GET_ALL_PROPERTIES_LOADING]: (state, action) => {
              return {
                ...state,
                viewproperty_loading: true
              };
         }
    },
    initialState
);



