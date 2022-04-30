import React, {useCallback} from "react";
import { Authenticator } from "@aws-amplify/ui-react"
import  { Navigate } from 'react-router-dom'

const Login = ({ setLogged }) => {
	return <Authenticator>
        <Navigate to="/" /> 
    </Authenticator> 
};

export default Login;
