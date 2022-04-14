import validator from "validator"
import Swal from 'sweetalert2'

const formLoginValidation = ({name,email,password,password2})=>{
        
    if(!validator.isAlpha(name) || name.length < 1 ){
        Swal.fire({

            icon:"error",
            width:400,
            title:"Nombre Incorrecto",
            text:"El nombre no puede tener números ni estar vacío",
            background:"#46244C",
            color:"#fff",
           // footer:'<a href="#">Más información acerca del error</a>',
            backdrop:"rgba(0,0,0,0.6)"

        })
        return false;
    }
    if(!validator.isEmail(email)){
        Swal.fire({

            icon:"error",
            width:400,
            title:"Correo Incorrecto",
            text:"El correo no tiene el formato correcto",
            background:"#46244C",
            color:"#fff",
            backdrop:"rgba(0,0,0,0.6)"

        })
        return false;
    }
    if(!validator.isStrongPassword(password, { minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0})){
        Swal.fire({

            icon:"error",
            width:400,
            title:"Contraseña Incorrecta",
            text:"El password debe tener una longitud de 6, 1 numeros 1 mayúscula y 1 minuscula",
            background:"#46244C",
            color:"#fff",
            backdrop:"rgba(0,0,0,0.6)"

        })
        
        return false;
    }

    if(password !== password2){
        Swal.fire({

            icon:"error",
            width:400,
            title:"Contraseñas no coinciden",
            text:"las contraseñas no coiciden",
            background:"#46244C",
            color:"#fff",
            backdrop:"rgba(0,0,0,0.6)"

        })
        
        return false;
    }
    

    return true;
}

export default formLoginValidation;