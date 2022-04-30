import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import  { Navigate } from 'react-router-dom'

const Login = (setLogged) => {
	return <Authenticator>
        {
            setLogged(true)
        } 
        <Navigate to="/" /> 

    </Authenticator> 
};

export default Login;
