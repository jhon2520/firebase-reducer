import {useState} from 'react'


const useForm = (initiState = {}) => {


    const [formValues, setFormValues] = useState(initiState);


    const handleChange = (e)=>{

        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    
    const resetValues = ()=>{
        setFormValues(initiState)
    }

    return[
        formValues,
        handleChange,
        handleSubmit,
        resetValues
    ]

}

export default useForm