import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { googleAuthProvider } from "../firebase/firebaseConfig"
import TYPES from "../types/authTypes"
import Swal from "sweetalert2"
import { finishLoading, startLoading } from "./ui.actions"


// LOGINS

export const login = (uid,displayName)=>{

    return{
        type:TYPES.LOGIN,
        payload:{
            uid,
            displayName
        }
    }
}

export const startWithGoogle = () =>{

    return(dispatch)=>{

        dispatch(startLoading())
        const auth = getAuth();
        signInWithPopup(auth,googleAuthProvider)
        .then((data)=>{
            const {user} = data;
            const {uid,displayName} = user
            //console.log(uid,displayName);
            dispatch(login(uid,displayName))
        })

        
        dispatch(finishLoading())
    }

}

export const registerWithNameEmailPassword = (name,email,password)=>{

    return(dispatch)=>{


        dispatch(startLoading())

        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
        .then(async (data)=>{
            const {user} = data;
            const {uid} = user

            await updateProfile(user,{displayName:name})
            dispatch(login(uid,user.displayName))

            Swal.fire({
                icon:"success",
                position:"bottom-right",
                title:"usuario creado correctamente",
                showConfirmButton:false,
                timer:1500
            })

        }).catch((er)=>{
            Swal.fire({
                icon:"error",
                title:"Error",
                text:er,
                
            })
        })
        dispatch(finishLoading())
    }
}


export const loginWithEmailPassword = (email,password)=>{

    return(dispatch)=>{

        const auth = getAuth();

        signInWithEmailAndPassword(auth,email,password)
        .then((data)=>{
            const {user} = data;
            dispatch(login(user.uid,user.displayName))
        })
        .catch((er)=>{
            Swal.fire({
                icon:"error",
                title:"Error",
                text:er,
                
            })
        })

    }

}

// LOGOUT

export const logout = ()=>{
    return{
        type:TYPES.LOGOUT
    }
}

export const StartLogout = () =>{

    return async(dispatch)=>{

        dispatch(startLoading())

        const auth = getAuth();
        await signOut(auth);
        dispatch(logout())
        dispatch(finishLoading())

    }

} 
