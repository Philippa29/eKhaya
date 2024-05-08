import { createAction } from "redux-actions";

//actions for agents
export enum ActionTypes {
    GET_ALL_AGENTS = "GET_ALL_AGENTS"

}


export const getallagentsaction = createAction(ActionTypes.GET_ALL_AGENTS); 