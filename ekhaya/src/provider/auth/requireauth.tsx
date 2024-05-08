'use client'
import React from "react";
import {useRouter} from "next/navigation"

 
const WithAuth = (WrappedComponent: React.FC<any>) => {
    // Replace this with your actual authentication logic
    const haveToken = localStorage.getItem("authToken") !== null;
    
    // Define the component to render based on the authentication status
    const AuthComponent: React.FC<any> = (props) => {
         const router = useRouter();
        if (haveToken) {
            // If authenticated, render the wrapped component with props
            return <WrappedComponent {...props} />;
        } else {
           
           router.push("/login"); 
        }
    };
 
    return AuthComponent;
};
 
export default WithAuth;

