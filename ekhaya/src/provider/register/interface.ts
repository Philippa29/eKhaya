export  interface RegisterState {
  
  applicantId: string;
  name: string;
  surname: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
  roleNames: string[];
}

export interface RegisterTenantState {
  applicantId: string;
  name: string;
  surname: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
  roleNames: string[];
}




export interface RegisterActions {
  registeruser: (register : RegisterState) => void;
  // registerResident : (register : RegisterState) => void; 
}
