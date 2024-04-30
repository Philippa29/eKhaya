import { createContext } from 'react';
import { AuthActions, AuthState } from './interface';

export interface IAuthContext {
  auth: AuthState;
}
export const initialState: IAuthContext = {
   auth: {
    isAuthenticated: false,
    authToken: '',
    role : '',
    },
  };


export const AuthStateContext = createContext<IAuthContext>(initialState);

export const AuthActionContext = createContext<AuthActions>({
  login: async () => {},
  logout: () => {},
});






