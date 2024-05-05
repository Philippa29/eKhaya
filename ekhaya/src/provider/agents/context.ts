import { createContext } from "react";
import { AgentState } from "./interface";
import { AgentAction } from "./interface";

export interface AgentContext {
    agents: AgentState[]
}

export const initialState : AgentContext ={
    agents: [], 
}


export const AgentStateContext = createContext<AgentContext>(initialState); 
export const AgentActionContext = createContext<AgentAction>({
    getAllAgents: async () => [] as AgentState[],
})