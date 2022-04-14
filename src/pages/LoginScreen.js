import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginWithEmailPassword, startWithGoogle } from '../actions/auth.action';
import useForm from '../hooks/useForm';




const LoginScreen = () => {

    const [formValues,handleChange,handleSubmit] = useForm({
        email:"jhonmunozromero1@gmail.com",
        password:"Ma14ab",
    })

    const {email,password} = formValues;

    const dispatch = useDispatch();


    const handleLoginWithGoogle = (e) =>{
        e.preventDefault();
        dispatch(startWithGoogle())
        localStorage.setItem("log","loggin")
    }

    const handleLoginWithEmailAndPassword = ()=>{
        dispatch(loginWithEmailPassword(email,password))
        localStorage.setItem("log","loggin")
        
    }


    return (
        <div className='mt-5  p-3 rounded-3'>
            <h2 className='mb-5'>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='email'
                    name='email'
                    autoComplete='off' 
                    className='form-control'
                    value={email}   
                    onChange={handleChange}
                    />
                    <input 
                    type="password" 
                    placeholder='password'
                    name='password'
                    autoComplete='off' 
                    className='form-control'  
                    value={password} 
                    onChange={handleChange}
                    />
                <button
                    className='btn btn-success form-control mt-5'
                    onClick={handleLoginWithEmailAndPassword}
                >
                    Login
                </button>

                <h3 className='mt-5'>Ingresar con redes sociales</h3>
                <button 
                    className='btn btn-primary form-control'
                    onClick={handleLoginWithGoogle}
                
                >
                    Google
                </button>
                <button className='btn btn-dark form-control'>
                    github
                </button>

                <Link to="/login/register">Crear una nueva cuenta</Link>
            </form>
        </div>
    )
}

export default LoginScreen