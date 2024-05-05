'use client'

import React , {useContext , useReducer } from 'react'; 
import { agentreducer } from './reducer';
import { message } from 'antd';
import {getallagentsaction} from './action'; 
import axios from 'axios'; 
import { AgentActionContext, AgentStateContext, initialState } from './context';

interface AgentProviderProps{
    children: React.ReactNode
}


const AgentProvider : React.FC<AgentProviderProps> = ({children}) => {


    const [state, dispatch] = useReducer(agentreducer, initialState); 

    const getAllAgents = async () => {
        try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_REG_URL}api/services/app/Agent/GetAllAgents`); 
            dispatch(getallagentsaction(response.data.result)); 
            message.success("All the Agents"); 
        }
        catch{

        }
    }


    return (
       <AgentStateContext.Provider value = {state}>
        <AgentActionContext.Provider value = {{getAllAgents}}>
            {children}
        </AgentActionContext.Provider>
       </AgentStateContext.Provider>
    )
}

const useAgentState = () => {
    const context = useContext(AgentStateContext); 
    if(!context){
        throw new Error('useAgentState must be used within a BookProvider'); 
    }

    return context; 
}

const useAgentAction = () => {
    const context = useContext(AgentActionContext); 
    if(!context){
        throw new Error('useAgentAction must be used within a BookProvider'); 
    }

    return context; 
}

export {useAgentAction , useAgentState , AgentProvider}