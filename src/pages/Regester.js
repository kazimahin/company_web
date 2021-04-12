import React, { Component } from 'react';
import {  connect } from "react-redux";
import axios from 'axios';
import AddUserAction from '../redux/action/AdduserAuth.action';
 class Regester extends Component {


    constructor(props){
        super(props)
        this.props.changeHeader()

        this.state={
            name:"",
            phone:"",
            email:"",
            password:"",
            re_password:"",
            error:{value:null,err:{}},
            message:""
        }
       

    }


    inputHandler=(e)=>{
        this.setState({
           [e.target.name]:e.target.value
       })
   }

    submitHandler=(e)=>{
       e.preventDefault()
        axios.post(window.location.origin+"/api/com_auth/regester",{name:this.state.name,phone:this.state.phone,email: this.state.email,re_password:this.state.re_password, password: this.state.password},{withCredentials:true})
           .then(v=>{
               this.setState({
                   error:{value:null,err:{}},
                   message:"regester  successfully"
               })

            this.props.reduxAddauth()
               
            })
           .catch(e=>{
               this.setState({
                   error:e.response.data



               })

 
           })
          
   }





    render() {

  
        return (

            <div style={{marginTop:"100px"}}>
 
                <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-5">
                    {/* Form with header */}
                    <div className="card wow fadeIn animated" data-wow-delay="0.3s" style={{visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.3s'}}>
                        <div className="card-body">
                        {/* Header */}
                        <div className="form-header purple-gradient">
                            <h3 className="font-weight-500 my-2 py-1"><i className="fas fa-user" /> Log in:</h3>
                        </div>
                        {/* Body */}
                     
                        <div className="md-form">
                            <i className="fas fa-envelope prefix white-text" />
                            <input name="name" value={this.state.name} onChange={this.inputHandler} type="text" id="orangeForm-name" className="form-control" />
                            <label htmlFor="orangeForm-name">Your Name</label>
                        </div>
                        <div className="md-form">
                            <i className="fas fa-envelope prefix white-text" />
                            <input name="email" value={this.state.email} onChange={this.inputHandler} type="text" id="orangeForm-email" className="form-control" />
                            <label htmlFor="orangeForm-email">Your email</label>
                        </div>  
                        <div className="md-form">
                            <i className="fas fa-envelope prefix white-text" />
                            <input name="phone" value={this.state.phone} onChange={this.inputHandler} type="number" id="orangeForm-phone" className="form-control" />
                            <label htmlFor="orangeForm-phone">Your phone</label>
                        </div>
                        <div className="md-form">
                            <i className="fas fa-lock prefix white-text" />
                            <input name="password" value={this.state.password} onChange={this.inputHandler} type="password" id="orangeForm-pass" className="form-control" />
                            <label htmlFor="orangeForm-pass">Your password</label>
                        </div>
                        <div className="md-form">
                            <i className="fas fa-lock prefix white-text" />
                            <input name="re_password" value={this.state.re_password} onChange={this.inputHandler} type="password" id="orangeForm-repass" className="form-control" />
                            <label htmlFor="orangeForm-reass">reType password</label>
                        </div>
                        <div className="text-center">
                            <button onClick={this.submitHandler}   className="btn purple-gradient btn-lg waves-effect waves-light">Sign up</button>
                            <hr className="mt-4" />
                            <div className="inline-ul text-center d-flex justify-content-center">
                            <a className="p-2 m-2 fa-lg tw-ic"><i className="fab fa-twitter white-text" /></a>
                            <a className="p-2 m-2 fa-lg li-ic"><i className="fab fa-linkedin-in white-text"> </i></a>
                            <a className="p-2 m-2 fa-lg ins-ic"><i className="fab fa-instagram white-text"> </i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Form with header */}
                    </div>
                </div>
                </div>




                







            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeHeader:()=>dispatch({type:"nonroot",payload:{background:"#5991fb"}}),
        reduxAddauth:()=>dispatch(AddUserAction())

    }
}

const mapStateToProps = state =>{
    return {
      reduxState:state
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Regester);