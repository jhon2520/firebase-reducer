import React,{useEffect,useState} from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import DetailsScreen from '../pages/DetailsScreen'
import LoginScreen from '../pages/LoginScreen'
import MainScreen from '../pages/MainScreen'
import RegisterScreen from '../pages/RegisterScreen'
import PublicRoutes from './PublicRoutes'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { login } from '../actions/auth.action'
import PrivateRoutes from './PrivateRoutes'


const AppRouter = () => {

    //validar si el usuario está logeado para que no se pierda la autentificacion
    // cuando se actualiza la ventana
    const dispatch = useDispatch();

    const [validando,setValidando] = useState(true);
    const [isLogged,setIsLogged] = useState(false);

    
    useEffect(() => {
        
        const auth = getAuth();
        onAuthStateChanged(auth,(user)=>{
            
            if(user?.uid){
                dispatch(login(user.uid,user.displayName))
                setIsLogged(true);
            }else{
                setIsLogged(false);
            }
            
        })
        
        setValidando(false);
        
    }, [dispatch,setValidando,setIsLogged]);
    
    if(validando){

        return(
            <h1>loading............</h1>
            );
        }


    return (
        <BrowserRouter>
            <Routes>

                {/* para publica */}
                
                <Route  path="/login/*" element={

                    <PublicRoutes isLogged={isLogged}>
                        <Routes>
                            <Route path='/' element={<LoginScreen/>}/>
                            <Route path='register' element={<RegisterScreen/>}/>
                            <Route path='*' element={<Navigate replace to="/login"/>}/>
                        </Routes>
                    </PublicRoutes>

                }/>

                {/* para privadas */}

                <Route path="/*" element={

                    <PrivateRoutes isLogged={isLogged}>
                        <Routes>
                            <Route path='/' element={<MainScreen/>}/>
                            <Route path='main' element={<MainScreen/>}/>
                            <Route path='details' element={<DetailsScreen/>}/>
                            <Route path='*' element={<Navigate replace to="/main"/>} />
                        </Routes>
                    </PrivateRoutes>
                }/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter