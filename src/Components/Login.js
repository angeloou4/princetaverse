import React from "react";
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import  { Navigate } from 'react-router-dom'

const Login = () => {
	return <div style={{paddingTop: '200px'}}>
        <Authenticator>
            <Navigate to="/" /> 
        </Authenticator> 
    </div>
};

export default Login;
