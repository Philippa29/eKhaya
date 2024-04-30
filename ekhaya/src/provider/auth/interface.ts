export interface Credentials {
    userNameOrEmailAddress: string;
    password: string;
  }

 export  interface AuthState {
    isAuthenticated: boolean;
    authToken: string | null;
    role : string;
  }
  
 export  interface Action {
    type: string;
    payload?: string; // Payload is optional, as it's only used for the LOGIN action
  }



  export interface AuthActions {
    login: (credentials: Credentials) => Promise<void>;
    logout: () => void;
    
  }
  
  