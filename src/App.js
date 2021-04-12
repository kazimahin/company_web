import React, { Component } from 'react';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"

import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import MakeMyApp from "./pages/MakeMyApp"
import Login from './pages/login';
import Dashbord from "./pages/Dashbord"
import Regester from './pages/Regester';
import NotFound from './pages/NotFound';

import {connect} from "react-redux"
import AddUserAction from "./redux/action/AdduserAuth.action" 

class App extends Component {
 

constructor(props){
  super(props)
 
}
 
componentDidMount(){
   this.props.reduxAddauth() 
}
   render() {
      return (
      <BrowserRouter>
         <div className="software-lp">
        
      {  this.props.reduxState.startReducer.cheak?
          <>
 

            <Header ></Header>
            <Switch>


                    <Route path="/" exact component={Home} ></Route>

                  {/* =========================if user not regestered ===================== */}

                  {!this.props.reduxState.startReducer.valid&&
                    <Route path="/login"  exact component={Login} ></Route>
                  }
                  {!this.props.reduxState.startReducer.valid&&
                    <Route path="/regester"  exact component={Regester} ></Route>
                  }
                  {!this.props.reduxState.startReducer.valid&&
                    <Route path="/dashbord"  exact  ><Redirect  to="/login" />    </Route>
                  }
                  {!this.props.reduxState.startReducer.valid&&
                    <Route path="/makemyapp"  exact  ><Redirect  to="/login" />    </Route>
                  }

                  {/* =========================if user regestered ===================== */}
                  {this.props.reduxState.startReducer.valid&&
                    <Route path="/makemyapp"  exact component={MakeMyApp} ></Route>
                  }
                  {this.props.reduxState.startReducer.valid&&
                    <Route path="/dashbord"  exact component={Dashbord} ></Route>
                  }
                  {this.props.reduxState.startReducer.valid&&
                    <Route path="/regester"  exact  ><Redirect  to="/dashbord" />    </Route>
                  }
                  {this.props.reduxState.startReducer.valid&&
                    <Route path="/login"  exact  ><Redirect  to="/dashbord" />    </Route>
                  }
                  
        
        
                    <Route component={NotFound} />

            </Switch>


              
            <Footer></Footer>


          </>
            :  
          <h1>Loading</h1> }

        </div>
      </BrowserRouter>


    );
  }
}
const mapStateToProps = state =>{
  return {
    reduxState:state
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    reduxAddauth:()=>dispatch(AddUserAction())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);