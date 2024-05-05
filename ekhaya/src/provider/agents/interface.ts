

export interface AgentState {
    name: string; 
    surname: string; 
    emailaddress: string; 
    phonenumber: string; 
    password: string; 
    rolenames: string; 
}

export interface AgentAction{
    getAllAgents : () => void; 
}