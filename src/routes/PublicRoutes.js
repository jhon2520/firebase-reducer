import React from 'react'
import { Navigate } from 'react-router-dom';


const PublicRoutes = ({children}) => {
    

    const estado = localStorage.getItem("log");

    return (estado === "loggout") ? children :<Navigate to="/main"/> 
}

export default PublicRoutes