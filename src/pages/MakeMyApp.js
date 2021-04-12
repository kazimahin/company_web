import React, { Component } from 'react';
import {  connect } from "react-redux";
import "./MakeMyApp.css"
import axios from "axios"


class MakeMyApp extends Component {

    constructor(props){
        super(props)
        this.props.changeHeader()


        this.state={
            form:{
                domain:undefined,
                name:undefined,
                stub:undefined,
                code_type:0,
                code:undefined,
                principal:undefined,
                contact1:undefined,
                contact2:undefined,
                address:undefined,
                zip:undefined,
                district:undefined,
                about:undefined,
                email:undefined,
                password:undefined,
                re_password:undefined,
                checkbox:undefined,
                image:undefined,
                template:undefined

            },
            error:{

            }

        }


    }
 



 




    inputHandler=(e)=>{
        this.setState({
            form:{
                ...this.state.form,
                 [e.target.name]:e.target.value
            },
            error:{
                ...this.state.error,
                [e.target.name]:""

            }
        })
   }
   CheckinputHandler=(e)=>{
        this.setState({

            form:{
                ...this.state.form,
                 [e.target.name]:e.target.checked
        
            } 
        })
    }

    submitHandler=(e)=>{
       e.preventDefault()

       console.log(this.state.form);
        axios.post(window.location.origin+"/api/com/makemyapp",this.state.form)
           .then(v=>{
               

               console.log(v)
           })
           .catch(e=>{
                
                this.setState({
                error:e.response.data.err.error



            })

           })
          
   }



 

    render() {
 



   


       console.log(this.state);
        return (

            
            <div style={{marginTop:"64px"}}> 
                 
                 <div className="container">
                    {/*Section: Features v.1*/}
                    <section id="features" className="mb-5">
                    {/*Section heading*/}
                    <h1 className="mb-3 my-5 pt-5 dark-grey-text wow fadeIn text-center" data-wow-delay="0.2s"><strong className="font-weight-bold">Lorem ipsum</strong> dolor sit amet</h1>
                    {/*Section description*/}
                    <p className="text-center grey-text w-responsive mx-auto mb-5 wow fadeIn" data-wow-delay="0.2s">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas, eos officia maiores ipsam ipsum
                        dolores reiciendis
                        ad voluptas, animi obcaecati adipisci sapiente mollitia.</p>
                    {/*First row*/}
                    <div className="row features wow fadeIn" data-wow-delay="0.2s">




                        <div className=" " style={{height: 50, width: '100%',maxWidth:"600px", margin: '10px auto 10px auto', border: 1, boxShadow: '0 8px 19px rgba(91,154,251,.61)', borderRadius: 55}}> 
                        <input name="domain" value={this.state.form.domain} onChange={this.inputHandler} type="text" className="form-control  search-input " placeholder="Enter your domain name..." style={{height: '100%', width: '60%', position: 'relative', border: 'none', float: 'left', fontSize: 'larger', paddingLeft: 25, borderRadius: '25px 0px 0px 25px'}} /> 
                        <div style={{height: '100%', width: '40%', position: 'relative', float: 'left', background: '#68d0ff', border: 1, borderRadius: '100% 0px 0px 0px'}}><p style={{position: 'relative', marginTop: 12, color: '#616161', fontSize: 'larger', fontWeight: 500, textShadow: 'whitesmoke', textAlign: 'center'}}>.instbd.com</p><div style={{position: 'relative', height: 20, width: 139, background: '#68d0ff', float: 'right', border: 1, margin: '-12px 0px 0px 0px', borderRadius: '0px 0px 15px 15px'}}><div style={{position: 'relative', margin: '0 auto'}}><div style={{height: 10, width: 10, background: '#ff3547', border: 1, margin: '5px 6px 1px 19px', float: 'left', borderRadius: '50%'}} /><p style={{fontFamily: 'monospace', float: 'left', color: '#545454'}}>unavailable</p></div></div></div>
                        </div>

     



                          
                            
                    </div>
                    {/*/First row*/}

                    </section>
                    {/* section break */}
                    <hr style={{"border":"0","height":"1px","backgroundImage":"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"}}></hr>
                    {/* section break */}
                    
                                    
                    <form>
                        


                        <div className="row">
                            {/* Grid column */}
                            <div className="col-md-4 mb-4">
                                <div className="md-form ">
                                <input name="name" value={this.state.form.name} onChange={this.inputHandler} type="text" id="form11" className="form-control" />
                                <label htmlFor="form11" className=" ">Institute Name</label>
                                <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%', color: 'rgb(210 106 0)'}} >{this.state.error.name && this.state.error.name}</div>
                                </div>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-4 mb-4">
                                <div className="md-form form">
                                <input  name="stub" value={this.state.form.stub} onChange={this.inputHandler} type="number" id="form21" className="form-control form-control" />
                                <label htmlFor="form21" className="">Stublished Year</label>
                                <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%', color: 'rgb(210 106 0)'}} >{this.state.error.stub && this.state.error.stub}</div>
                                </div>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-4 mb-4">
                                <div className="md-form">
                                <input  name="code" value={this.state.form.code} onChange={this.inputHandler} style={{width:"60%",float:"left"}}  type="number" id="form31" className="form-control" />

                                <select  name="code_type" value={this.state.form.code_type} onChange={this.inputHandler} className="form-select custom_select" style={{"width":"30%","color":"#757575","float":"left","height":"41px","border":"none","background":"transparent","borderBottom":"1px solid #ced4da"}} aria-label=".form-select-lg example">
                                    <option disabled  value={0} >TYPE</option>
                                    <option value={1}>ININ</option>
                                    <option value={2}>GOV</option>
                                    <option value={3}>NCTB</option>
                                </select>
                                <label htmlFor="form31" className="">Institute Code</label>
                                <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%',float:"left", color: 'rgb(210 106 0)'}} >{ this.state.error.code ? (this.state.error.code_type)? this.state.error.code +" & "+this.state.error.code_type :this.state.error.code : this.state.error.code_type}</div>

 

                                </div>
                            </div>
                            {/* Grid column */}
                        </div>

                       


                        
                        <div className="row">
                        {/* Grid column */}
                        <div className="col-md-4 mb-4">
                            <div className="md-form ">
                            <input  name="principal" value={this.state.form.principal} onChange={this.inputHandler} type="text" id="form12" className="form-control" />
                            <label htmlFor="form12" className=" ">Principal Name</label>
                            <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%', color: 'rgb(210 106 0)'}} >{this.state.error.principal && this.state.error.principal}</div>
                            </div>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-4 mb-4">
                            <div className="md-form form">
                            <input name="contact1" value={this.state.form.contact1} onChange={this.inputHandler} type="number" id="form22" className="form-control form-control" />
                            <label htmlFor="form22" className="">Contact Number (Primary)</label>
                            <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%', color: 'rgb(210 106 0)'}} >{this.state.error.contact1 && this.state.error.contact1}</div>
                            </div>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-4 mb-4">
                            <div className="md-form">
                            <input  name="contact2" value={this.state.form.contact2} onChange={this.inputHandler}  type="number" id="form32" className="form-control" />
                            <label htmlFor="form32" className="">Contact NUmber</label>
                            <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%', color: 'rgb(210 106 0)'}} >{this.state.error.contact2 && this.state.error.contact2}</div>
                            </div>
                        </div>
                        {/* Grid column */}
                        </div>






                        <div className="row">
                        {/* Grid column */}
                        <div className="col-md-6 mb-4">
                            <div className="md-form ">
                            <input  name="address" value={this.state.form.address} onChange={this.inputHandler} type="text" id="form13" className="form-control" />
                            <label htmlFor="form13" className=" ">Address</label>
                            <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%', color: 'rgb(210 106 0)'}} >{this.state.error.address && this.state.error.address}</div>
                            </div>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-3 mb-4">
                            <div className="md-form form">
                            <input  name="zip" value={this.state.form.zip} onChange={this.inputHandler} type="number" id="form23" className="form-control form-control" />
                            <label htmlFor="form23" className="">Zip Code</label>
                            <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%', color: 'rgb(210 106 0)'}} >{this.state.error.zip && this.state.error.zip}</div>
                            </div>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-3 mb-4">
                            <div className="md-form">
                            <input  name="district" value={this.state.form.district} onChange={this.inputHandler}  type="text" id="form33" className="form-control" />
                            <label htmlFor="form33" className="">District</label>
                            <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%', color: 'rgb(210 106 0)'}} >{this.state.error.district && this.state.error.district}</div>
                            </div>
                        </div>
                        {/* Grid column */}
                        </div>



                        <div className="row">
                        {/* First column */}
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                            <textarea  name="about" value={this.state.form.about} onChange={this.inputHandler} type="text" id="form78" className="md-textarea form-control" rows={3} />
                            <label htmlFor="form78"  >About School</label>
                            <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%', color: 'rgb(210 106 0)'}} >{this.state.error.about && this.state.error.about}</div>
                            </div>
                        </div>
                        </div>


                         
                        <div className="row">


                         <div className="col-md-4 mb-4">
                            <div className="md-form ">
                            <input  name="email" value={this.state.form.email} onChange={this.inputHandler} type="text" id="form14" className="form-control" />
                            <label htmlFor="form14" className=" ">Email</label>
                            <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%', color: 'rgb(210 106 0)'}} >{this.state.error.email && this.state.error.email}</div>
                            </div>
                        </div>
       
                        <div className="col-md-4 mb-4">
                            <div className="md-form ">
                            <input  name="password" value={this.state.form.password} onChange={this.inputHandler} type="password" id="form24" className="form-control " />
                            <label htmlFor="form24" className="">Password</label>
                            <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%', color: 'rgb(210 106 0)'}} >{this.state.error.password && this.state.error.password}</div>
                            </div>
                        </div>
                
                        <div className="col-md-4 mb-4">
                            <div className="md-form">
                            <input  name="re_password" value={this.state.form.re_password} onChange={this.inputHandler}  type="password" id="form34" className="form-control" />
                            <label htmlFor="form34" className="">Retype Password</label>
                            <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%', color: 'rgb(210 106 0)'}} >{this.state.error.re_password && this.state.error.re_password}</div>
                            </div>
                        </div>
                        
                         </div>

                        <div className="row">
                             <div className="col-md-4 mb-4">
                                <div className="md-form ">
                                <input  name="template" value={this.state.form.template} onChange={this.inputHandler} type="text" id="form140" className="form-control" />
                                <label htmlFor="form140" className=" ">Template</label>
                                <div style={{width: '100%', marginTop: '.25rem', fontSize: '80%', color: 'rgb(210 106 0)'}} >{this.state.error.template && this.state.error.template}</div>
                                </div>
                            </div>
                   
                         </div>

                        
                        <div className="row">

                            <div className="switch col-md-6">
                                <fieldset style={{paddingTop:"30px",paddingLeft:"0px"}} className="form-check">
                                <input name="checkbox"  onClick={this.CheckinputHandler} className="form-check-input" type="checkbox" id="checkbox1"   />
                                <label className="form-check-label" htmlFor="checkbox1">Classic checkbox</label>
                                </fieldset>

                            </div>




                            <div className="col-md-6 mb-4">
                                 <div className="md-form">
                                <div className="file-field">
                                    <div className="btn btn-primary btn-sm float-left waves-effect waves-light">
                                    <span>Choose file</span>
                                    <input type="file" />
                                    </div>
                                    <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Upload your file" />
                                    </div>
                                </div>
                                </div>
                             </div>

                        </div>

                        <div className="row">

                            <div className="switch col-md-6">
                                
                                <button onClick={this.submitHandler} type="button" className="btn btn-outline-info waves-effect">Submit</button>
                            </div>

 

                        </div>




                    </form>





                 </div>
             </div>
        );
    }
}
// const mapStateToProps=(state)=>{
//     return {
//         reduxState:state
//     }
// }

const mapDispatchToProps=(dispatch)=>{
    return{
        changeHeader:()=>dispatch({type:"nonroot",payload:{background:"#5991fb"}})
    }
}


export default connect(null,mapDispatchToProps)(MakeMyApp);