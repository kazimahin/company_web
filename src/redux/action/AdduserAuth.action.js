import axios from "axios"
axios.defaults.withCredentials = true






const AddUserAction=()=>{
    return   dispatch =>{



        axios.post(window.location.origin+"/api/com/auth/verify",{},{withCredentials:true} )
        .then(value=>{
            console.log(value)
            dispatch({
                type:"AddUserAuth",
                payload:{
                    valid:value.data.valid,
                    data:value.data.data,
                    cheak:true
                }
            })
        
        })
        .catch(err=>{
            dispatch({
                type:"AddUserAuth",
                payload:{
                    auth:false,
                    data:"null",
                    cheak:true
                }
            })
        
        })


     }


}


export default AddUserAction        