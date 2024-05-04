

export interface Application  {
    id: string;
    name:string; 
    surname: string; 
    applicationstatus: number;
    property: string; 
    applicant : string;
    unittype : number;
    maritalstatus : number;
    communitytype : number;
    companyname : string;
    companyaddress : string;
    companycontactnumber : string;
    occupation : string;
    salary : number;
    monthsworked : number;
    createddate : Date;
    insolvent : boolean;
    evicted : boolean;
    applicationtype : number;
}

export interface ApplicationAction {
    getAllApplications: () => void;
    getApplication: (id: string) => void;
    createApplication: (application: Application) => void;
    updateApplication: (application: Application) => void;
    deleteApplication: (id: string) => void;
    getApplicationCount: () => void;
}