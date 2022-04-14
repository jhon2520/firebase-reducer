import React from 'react'
import useForm from '../hooks/useForm'
import { useNavigate,Link } from 'react-router-dom'
import formLoginValidation from '../helpers/formLoginValidaction';
import {useDispatch, useSelector} from 'react-redux'
import {registerWithNameEmailPassword} from "../actions/auth.action"


const LoginContainer = () => {

  // const navigate = useNavigate();
    const dispatch = useDispatch();

    //const state = useSelector(state=>state)

    const [formValues,handleChange,handleSubmit] = useForm({

        name:"Jhon",
        email:"jhonmunozromero1@gmail.com",
        password:"Ma14ab",
        password2:"Ma14ab"

    })
    const {name,email,password,password2} = formValues;


    const submitform = (e) =>{
        handleSubmit(e)
        
        if(formLoginValidation(formValues)){

           // navigate("/main");
            dispatch(registerWithNameEmailPassword(name,email,password))
            localStorage.setItem("log","loggin")
            
        }
    }


    return (
        <div className='mt-5 p-3 rounded-3'>
            <h2>Register</h2>
            <form className='mt-5' onSubmit={ submitform}>
                <input 
                    onChange={handleChange}
                    className='form-control' 
                    type="text"
                    placeholder='name'
                    autoComplete='off'
                    name='name'
                    value={name}
                />
                <input
                    onChange={handleChange}
                    className='form-control' 
                    type="text"
                    placeholder='email'
                    autoComplete='off'
                    name='email'
                    value={email}
                    />
                <input 
                    onChange={handleChange}
                    className='form-control' 
                    type="password" 
                    placeholder='passwoord'
                    autoComplete='off'
                    name="password"
                    value={password}
                    />
                <input 
                    onChange={handleChange}
                    className='form-control' 
                    type="password"
                    placeholder='confirm' 
                    autoComplete='off'
                    name="password2"
                    value={password2}
                />

                <button
                    className='btn btn-primary mt-5 col-12'
                    type='submit'
                >
                    Register
                </button>
            </form>

            <hr/>

            <Link to="/login">¿ya tienes cuentra? Ingresa</Link>

        </div>
    )
}

export default LoginContainer