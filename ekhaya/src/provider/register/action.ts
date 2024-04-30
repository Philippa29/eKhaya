import {createAction} from 'redux-actions';
import { RegisterState } from './interface';

export enum ActionTypes {
    REGISTER = 'REGISTER',
}; 

export const register = createAction<RegisterState>(ActionTypes.REGISTER);
