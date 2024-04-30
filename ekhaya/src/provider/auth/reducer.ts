import { AuthState, Action } from './interface';
import { ActionTypes } from './action';
import { handleActions } from 'redux-actions';
import { IAuthContext } from './context';
import { createContext } from 'react';

const authReducer = handleActions<IAuthContext, any>(
    {
        [ActionTypes.LOGIN]: (state, action) => {
            return {
                ...state,
                auth: {
                    ...state.auth,
                    authToken: action.payload.token, // Assuming token is coming from the action payload
                },
            };
        },
        [ActionTypes.LOGOUT]: (state, action) => {
            return {
                ...state,
                auth: {
                    ...state.auth,
                    authToken: '', // Reset token on logout
                },
            };
        },
    },
    {
        auth: {
            isAuthenticated: false,
            authToken: '',
            role : '',  // Ensure authToken is defined in the initial state
            
        },
    }
);

export { authReducer };


