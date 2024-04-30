
import { ActionTypes } from './action';
import { handleActions } from 'redux-actions';
import { IRegisterContext , initialState } from './context';

export const registerReducer = handleActions<IRegisterContext, any>(
    {
        [ActionTypes.REGISTER]: (state, action) => {
            return {
                ...state,
                register: action.payload, 
            };
        },
    },
    initialState
);
