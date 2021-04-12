import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios";


class Dashbord extends Component {

    constructor(props) {
        super(props)
        this.props.changeHeader()
        
    }

    state={
        details:[]
    }
   

    
    componentDidMount(){
        axios.post(window.location.origin+"/api/com/instdata")
            .then((v)=>{
                this.setState({
                    details:v.data
                })

            })
            .catch((e)=>{
               console.log(e)
            })
    }

    render() {

        console.log(this.state)
        return (
            <div className="container" style={{marginTop:"100px"}}>
                



                <div className="row" >
                    <div className="col-md-4">
                        <div style={{"height":"80px","width":"80px","background":"#5991fb","margin":"5px 0px 15px 45px","border":"1px","borderRadius":"50%"}}>

                        </div>
                        <div className="card-body pt-0 mt-0">
                        {/* Name */}
                        <h3 className="mb-3 font-weight-bold"><strong>{this.props.reduxState.startReducer.data.name}</strong></h3>
                        <h6 className="font-weight-bold cyan-text mb-4">{this.props.reduxState.startReducer.data.email}</h6>
                        <p className="mt-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip consequat.</p>
                         </div>
                    </div>
                    <div className="col-md-8">
                    <div className=" col-md-4 text-center   " style={{marginTop: 155,float:'left'}}>
                            <div className="icon-area">
                            <a className="btn-floating btn-lg grey darken-1 p-5 mb-3 d-inline-flex justify-content-center align-items-center waves-effect waves-light"><i className="fas fa-paint-brush d-flex justify-content-center" /></a>
                            <h6><strong className="font-weight-bold mb-3 pb-3">DESIGN</strong></h6>
                            <p className="pt-3 blue-grey-text mt-3"> </p>
                            </div>
                        </div>
                        <div className=" col-md-4 text-center   " style={{marginTop: 155,float:"left"}}>
                            <div className="icon-area">
                            <a className="btn-floating btn-lg grey darken-1 p-5 mb-3 d-inline-flex justify-content-center align-items-center waves-effect waves-light"><i className="fas fa-paint-brush d-flex justify-content-center" /></a>
                            <h6><strong className="font-weight-bold mb-3 pb-3">DESIGN</strong></h6>
                            <p className="pt-3 blue-grey-text mt-3"> </p>
                            </div>
                        </div>
                        <div className=" col-md-4 text-center   " style={{marginTop: 155,float:"left"}}>
                            <div className="icon-area">
                            <a className="btn-floating btn-lg grey darken-1 p-5 mb-3 d-inline-flex justify-content-center align-items-center waves-effect waves-light"><i className="fas fa-paint-brush d-flex justify-content-center" /></a>
                            <h6><strong className="font-weight-bold mb-3 pb-3">DESIGN</strong></h6>
                            <p className="pt-3 blue-grey-text mt-3"> </p>
                            </div>
                        </div>
                       
                    </div>

                </div>


     



                <section>
                <h2 className="font-weight-bold mt-lg-5 mb-5 pb-4"><strong>Your Applications</strong></h2>
                <div className="row pb-4">
                    {/* Subheading */}

 
                     {this.state.details.map((v,key)=>{

                        return(

                            <div key={key} className="col-md-4 mb-4">
                                <div className="card card-cascade wider card-transparent">
                                {/* Card image */}
                                <div className="view view-cascade overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" style={{maxWidth:"100%",height:"100%"}} className="card-img-top" />
                                    <a href="#!">
                                    <div className="mask rgba-white-slight waves-effect waves-light" />
                                    </a>
                                </div>
                                {/* Card image */}
                                {/* Card content */}
                                <div className="card-body card-body-cascade text-center">
                                    {/* Title */}
                                    <h4 className="card-title"><strong>{v.name}</strong></h4>
                                    <h5 className="blue-text"><strong>{v.domain}</strong></h5>
                                    <p className="card-text"> {v.about } </p>
                                    {/* Linkedin */}
                                    <a className="p-2 m-2 fa-lg li-ic"><i className="fab fa-linkedin-in"> </i></a>
                                    {/* Twitter */}
                                    <a className="p-2 m-2 fa-lg tw-ic"><i className="fab fa-twitter"> </i></a>
                                    {/* Dribbble */}
                                    <a className="p-2 m-2 fa-lg fb-ic"><i className="fab fa-facebook-f"> </i></a>
                                </div>
                                {/* Card content */}
                                </div>
                                {/* Card */}
                            {/* Section: Live preview */}
                            </div>


                        )




                    })}

                    








 
 


                </div>
                </section>






















            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        reduxState:state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        changeHeader:()=>dispatch({type:"nonroot",payload:{background:"#5991fb"}}),
    }
}
  
  export default connect(mapStateToProps ,mapDispatchToProps)(Dashbord);
  