 
const initaialstate = {
     
        valid:false,
        data:null,
        cheak:false
     
}


const startReducer = (state=initaialstate,action) =>{
    switch (action.type){
        case "AddUserAuth":
             return action.payload
         
        default:
            return state
    }
}


 export default startReducer