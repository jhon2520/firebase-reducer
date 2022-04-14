import TYPES from "../types/authTypes"

export const startLoading = () =>{
    return{
        type:TYPES.UISTARTLOADING,
        payload:true
    }
}

export const finishLoading = () =>{
    return{
        type:TYPES.UIFINISLOADINGLOADING,
        payload:false
    }
}