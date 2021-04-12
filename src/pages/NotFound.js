import React, { Component } from 'react';
import {  connect } from "react-redux"; 



class NotFound extends Component {


    constructor(props){
        super(props)
        this.props.changeHeader()

  
    }
 

 




    render() {
        return (

            <div style={{marginTop:"100px"}}>
                page not found

            </div>
        );
    }





}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeHeader:()=>dispatch({type:"nonroot",payload:{background:"#5991fb"}}),
 
    }
}

 
export default connect(null,mapDispatchToProps)(NotFound);