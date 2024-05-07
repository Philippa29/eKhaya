import { IApplicationContext , initialState } from "./context";
import { handleActions } from "redux-actions";
import { ActionTypes } from "./action";

export const applicationReducer = handleActions<IApplicationContext, any>(
    {
        [ActionTypes.GET_ALL_APPLICATION]: (state, action) => {
            console.log('action.payload', action.payload);
            if (action.payload) {
                return {
                    ...state,
                    applications: action.payload,
                    getapplications: action.payload,
                    
                };
            }
            return state;
        },
        [ActionTypes.CREATE_APPLICATION]: (state, action) => {
            console.log('action.payload', action.payload);
            if (action.payload) {
                return {
                    ...state,
                    application: action.payload,
                    applications_loading: false
                };
            }
            return state;
        },
        [ActionTypes.UPDATE_APPLICATION]: (state, action) => {
            if(action.payload){
                const updatedApplication = state.applications?.map(application => 
                    application.id === action.payload.id ? action.payload : application
                );
                return {
                    ...state,
                    applications: updatedApplication
                };
            }
            return state;
        },
        [ActionTypes.DELETE_APPLICATION]: (state, action) => {
            console.log('action.payload', action.payload);
            if (action.payload) {
                return {
                    ...state,
                    applications: action.payload,
                    applications_loading: false
                };
            }
            return state;
        },
        [ActionTypes.GET_APPLICATION_BY_APPLICANT]: (state, action) => {
            console.log('action.payload', action.payload);
            if (action.payload) {
                return {
                    ...state,
                    applications: action.payload,
                    applications_loading: false
                };
            }
            return state;
        },
        [ActionTypes.COUNT_APPLICATION]: (state, action) => {
            console.log('action.payload', action.payload);
            if (action.payload) {
                return {
                    ...state,
                    applications: action.payload,
                    applications_loading: false
                };
            }
            return state;
        }
    },
    initialState
);