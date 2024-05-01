import { createAction } from 'redux-actions';
import { AuthState } from './interface';

export enum ActionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    
  }

export const login = createAction<AuthState, AuthState>(ActionTypes.LOGIN, p=>p);
export const logout = createAction<AuthState>(ActionTypes.LOGOUT);