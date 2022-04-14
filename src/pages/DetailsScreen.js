import React from 'react'
import { useNavigate } from 'react-router-dom'

const DetailsScreen = () => {

    const navigate = useNavigate();

    const handleClicK=()=>{

        navigate("/main")
    }

    return (
        <div>
            <h1>Ventana Detalles</h1>
            <button 
                className='btn btn-warning'
                onClick={handleClicK}
                >
            
            Ir a ventana principal
            </button>

        </div>
    )
}

export default DetailsScreen