
const initialstate = {

}


const headerReducer=(state=initialstate,action)=>{

    switch(action.type){
        case "root":
            return state= {}
        case "nonroot":
            return action.payload
        default :
            return state
    }
}


export default headerReducer