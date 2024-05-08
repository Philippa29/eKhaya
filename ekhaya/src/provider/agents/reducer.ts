import { handleActions } from "redux-actions";
import { AgentContext , initialState } from "./context";
import {ActionTypes} from "./action"
import { act } from "react-dom/test-utils";



export const agentreducer = handleActions<AgentContext, any> (
   {
    [ActionTypes.GET_ALL_AGENTS]: (state , action) => {
        if(action.payload)
            {
                return {
                    ...state, 
                    agents: action.payload
                }
            }
            return state; 
    }
   }, 
   initialState
)
