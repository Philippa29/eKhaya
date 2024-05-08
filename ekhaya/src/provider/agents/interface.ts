

export interface AgentState {
    id: string ; 
    name: string; 
    surname: string; 
    emailAddress: string; 
    phoneNumber: string; 
    password: string; 
    rolenames: string; 
}

export interface AgentAction{
    getAllAgents : () => void; 
}