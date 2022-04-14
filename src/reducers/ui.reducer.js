
// const initState = {
//     isloading:false
// }

import TYPES from "../types/authTypes";


const uiReducer = (state = {},action)=>{

    switch (action.type) {
        case TYPES.UISTARTLOADING:
            return{
                isloading:action.payload
            }
        case TYPES.UIFINISLOADINGLOADING:
            return{
                isloading:action.payload
            }
    
        default:
            return state;
    }

}

export default uiReducer;