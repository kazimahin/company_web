import React, { Component } from 'react';
import { Link}  from "react-router-dom"
import { connect   } from "react-redux";

class Header extends Component {
 


  render() {

    return (
         <header>
                     

          {/*Navbar*/}
          <nav style={this.props.reduxState.headerReducer} className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
            <div className="container">
            <Link className="nav-link" to="/" className="navbar-brand" href="#"><strong>MDB</strong></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
                <ul className="navbar-nav mr-auto">
                  {/**/}

                  {this.props.reduxState.startReducer.valid? 
                    <li className="nav-item  "><Link className="nav-link"   to="/makemyapp">MakeMyApp  </Link> </li> 
                      :
                    null
                  }


                  {this.props.reduxState.startReducer.valid?
                    <li className="nav-item"> <Link className="nav-link" to="/dashbord">Dashbord</Link> </li>
                      :
                      <>
                      <li className="nav-item"> <Link className="nav-link" to="/login">Login</Link> </li>
                      <li className="nav-item"> <Link className="nav-link" to="/regester">Regester</Link> </li>
                      </>
                    }

                </ul>
                <ul className="navbar-nav ml-auto nav-flex-icons">
                  <li className="nav-item">
                    <a className="nav-link waves-effect waves-light"><i className="fab fa-twitter" /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link waves-effect waves-light"><i className="fab fa-google-plus-g" /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link waves-effect waves-light"><i className="fab fa-facebook-f" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
        </header>
  

    );
  }
}

const mapStateToProps=(state)=>{
  return {
    reduxState:state
  }

}
 
export default connect(mapStateToProps,null)(Header);