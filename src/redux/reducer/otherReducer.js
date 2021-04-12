const initialstate = {}


const otherReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "a":
            return state ={ } 
        default :
            return state
    }
}

export default otherReducer