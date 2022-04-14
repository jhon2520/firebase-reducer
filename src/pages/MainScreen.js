import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { StartLogout } from '../actions/auth.action';

const MainScreen = () => {

    const navigate = useNavigate();
    const state = useSelector(state=>state);
    const dispatch = useDispatch();

    const handleClicK=()=>{
        navigate("/details")
    }
    const handleLogout=()=>{
        localStorage.setItem("log","loggout")
        dispatch(StartLogout());
       // navigate("/login")
    }

    return (
        <div>
            <h1>Ventana principal</h1>
            <button 
                className='btn btn-success'
                onClick={handleClicK}
                >
            
            Ir a detalles
            </button>

            <h2>¿Salir de la aplicación?</h2>
            <button
                className='btn btn-danger'
                onClick={handleLogout}
            >
                Salir
            </button>

        </div>
    )
}

export default MainScreen