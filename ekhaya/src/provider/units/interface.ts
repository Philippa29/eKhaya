export interface CreateUnit {
    size: number ; 
    type: number ; 
    agentid : string ; 
    unitnumber : string ; 
    level : number; 
    availability : boolean; 
    propertyid : string; 
    amenityids : string[]; 
    rangeupper : number; 
    rangelower : number; 
    quantity : number; 
}

export interface Unit {
    id: string;
    size: number ; 
    type: number ; 
    agentid : string ; 
    unitnumber : string ; 
    level : number; 
    availability : boolean; 
    propertyid : string; 
    amenityids : string[]; 
}

export interface UpdateUnits {
    id: string;
    size: number ; 
    type: number ; 
    agentid : string ; 
    unitnumber : string ; 
    level : number; 
    availability : boolean; 
}

export interface AgentUnits {
    id: string;
    size: number ; 
    type: number ;  
    unitnumber : string ; 
    level : number; 
    availability : boolean; 
    propertyid : string; 

}

export interface IUnitsContext {
    unit: Unit | null; 
    units: Unit[];
    loading: boolean;
    error: string | null; 
    agentunits: AgentUnits[];
}

export const initialState: IUnitsContext = {
    unit: null, 
    units: [],
    loading: false,
    error: null,
    agentunits: [],
};

export interface GetAllUnits {
    
}

export interface UnitsActions {
    createUnits: (Unit : CreateUnit) => void; 
    deleteUnit: (id: string) => void; 
    getallUnits: () => void; 
    getallUnitsAvailable: () => void; 
    updateUnits: (Unit : UpdateUnits) => void;
    getallUnitsAgent: () => void; 
}