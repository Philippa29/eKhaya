import { IPropertyContext, initialState } from "./context";
import { handleActions } from "redux-actions";
import { ActionTypes } from "./action";

export const viewpropertyReducer = handleActions<IPropertyContext, any>(
  {
    [ActionTypes.GET_ALL_PROPERTIES]: (state, action) => {
      if (action.payload) {
        console.log("action in all properties" , action.payload); 

        return {
          
          ...state,
         
          viewproperty: action.payload,
         
        };
      }
      return state;
    },
    [ActionTypes.GET_ALL_PROPERTIES_FAILED]: (state, action) => {
      return state;
    },
    [ActionTypes.GET_ALL_PROPERTIES_LOADING]: (state, action) => {
      return state;
    },
    [ActionTypes.CREATE_PROPERTY]: (state, action) => {
      if (action.payload) {
        
        return {
          ...state,
          property: action.payload,
          properties: [...state.properties, action.payload],
        };
      }
      return state;
    },
    [ActionTypes.UPDATE_PROPERTY]: (state, action) => {
      if (action.payload) {
        return {
          ...state,
          properties: state.properties.map((property) => {
            if (property.id === action.payload.id) {
              return action.payload;
            }
            return property;
          }),
        };
      }
      return state;
    },
  },
  initialState
);
