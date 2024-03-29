import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                 {/*Footer*/}
        <footer className="page-footer text-center text-md-left blue-grey lighten-5 pt-0">
          <div style={{backgroundColor: '#5991fb'}}>
            <div className="container">
              {/*Grid row*/}
              <div className="row py-4 d-flex align-items-center">
                {/*Grid column*/}
                <div className="col-12 col-md-5 text-left mb-md-0">
                  <h6 className="mb-0 white-text text-center text-md-left"><strong>Get connected with us on social
                      networks!</strong></h6>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-12 col-md-7 text-center text-md-right">
                  {/*Facebook*/}
                  <a className="p-2 m-2 fa-lg fb-ic ml-0"><i className="fab fa-facebook-f white-text mr-lg-4"> </i></a>
                  {/*Twitter*/}
                  <a className="p-2 m-2 fa-lg tw-ic"><i className="fab fa-twitter white-text mr-lg-4"> </i></a>
                  {/*Google +*/}
                  <a className="p-2 m-2 fa-lg gplus-ic"><i className="fab fa-google-plus-g white-text mr-lg-4"> </i></a>
                  {/*Linkedin*/}
                  <a className="p-2 m-2 fa-lg li-ic"><i className="fab fa-linkedin-in white-text mr-lg-4"> </i></a>
                  {/*Instagram*/}
                  <a className="p-2 m-2 fa-lg ins-ic"><i className="fab fa-instagram white-text mr-lg-4"> </i></a>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </div>
          </div>
          {/*Footer Links*/}
          <div className="container mt-5 mb-4 text-center text-md-left">
            <div className="row mt-3">
              {/*First column*/}
              <div className="col-md-3 col-lg-4 col-xl-3 mb-4 dark-grey-text">
                <h6 className="text-uppercase font-weight-bold"><strong>Company name</strong></h6>
                <hr className="blue mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
                <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur
                  adipisicing elit.</p>
              </div>
              {/*/.First column*/}
              {/*Second column*/}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 dark-grey-text">
                <h6 className="text-uppercase font-weight-bold"><strong>Products</strong></h6>
                <hr className="blue mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
                <p><a href="#!" className="dark-grey-text">MDBootstrap</a></p>
                <p><a href="#!" className="dark-grey-text">MDWordPress</a></p>
                <p><a href="#!" className="dark-grey-text">BrandFlow</a></p>
                <p><a href="#!" className="dark-grey-text">Bootstrap Angular</a></p>
              </div>
              {/*/.Second column*/}
              {/*Third column*/}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 dark-grey-text">
                <h6 className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                <hr className="blue mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
                <p><a href="#!" className="dark-grey-text">Your Account</a></p>
                <p><a href="#!" className="dark-grey-text">Become an Affiliate</a></p>
                <p><a href="#!" className="dark-grey-text">Shipping Rates</a></p>
                <p><a href="#!" className="dark-grey-text">Help</a></p>
              </div>
              {/*/.Third column*/}
              {/*Fourth column*/}
              <div className="col-md-4 col-lg-3 col-xl-3 dark-grey-text">
                <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                <hr className="blue mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
                <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3" /> info@example.com</p>
                <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
              </div>
              {/*/.Fourth column*/}
            </div>
          </div>
          {/*/.Footer Links*/}
          {/* Copyright*/}
          <div className="footer-copyright py-3 text-center">
            <div className="container-fluid">
              © 2019 Copyright: <a href="https://mdbootstrap.com/education/bootstrap/" target="_blank"> MDBootstrap.com </a>
            </div>
          </div>
          {/*/.Copyright */}
        </footer>
        {/*/.Footer*/}
            </div>
        );
    }
}

export default Footer;