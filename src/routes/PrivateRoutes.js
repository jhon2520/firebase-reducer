import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {

    const estado = localStorage.getItem("log")

    return (estado === "loggin")? children : <Navigate to={"/login"}/>

}

export default PrivateRoutes