import React, { Component } from 'react';
import { connect } from "react-redux";

class Home extends Component {
    constructor(props){
      super(props)
      this.props.changeHeader()
    }


    render() {
        return (
            <div>

 



        {/*Intro Section*/}
         <section className="view intro-2 rgba-gradient">
            <div className="mask">
              <div className="container h-100 d-flex justify-content-center align-items-center">
                <div className="row flex-center pt-5 mt-3">
                  <div className="col-md-12 col-lg-6 text-center text-md-left margins">
                    <div className="white-text">
                      <h1 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Make purchases with our
                        app </h1>
                      <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                      <h6 className="wow fadeInLeft" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rem repellendus quasi fuga nesciunt
                        dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                        iste.
                      </h6>
                      <br />
                      <a className="btn btn-white btn-rounded blue-text font-weight-bold ml-lg-0 wow fadeInLeft" data-wow-delay="0.3s">Download</a>
                      <a className="btn btn-outline-white btn-rounded font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Learn
                        more
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6  wow fadeInRight" data-wow-delay="0.3s">
                    <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"   className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </section>



                          {/*First container*/}
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
                <div className="col-lg-4 text-center">
                  <div className="icon-area">
                    <div className="circle-icon">
                      <i className="fas fa-cogs blue-text" />
                    </div>
                    <br />
                    <h5 className="dark-grey-text font-weight-bold mt-2">Customization</h5>
                    <div className="mt-1">
                      <p className="mx-3 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                        ipsum dolor sit
                        amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <div className="icon-area">
                    <div className="circle-icon">
                      <i className="fas fa-book blue-text" />
                    </div>
                    <br />
                    <h5 className="dark-grey-text font-weight-bold mt-2">Easy tutorials</h5>
                    <div className="mt-1">
                      <p className="mx-3 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                        ipsum dolor sit
                        amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center mb-4">
                  <div className="icon-area">
                    <div className="circle-icon">
                      <i className="fas fa-users blue-text" />
                    </div>
                    <br />
                    <h5 className="dark-grey-text font-weight-bold mt-2">Free support</h5>
                    <div className="mt-1">
                      <p className="mx-3 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                        ipsum dolor sit
                        amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*/First row*/}
            </section>
            {/*/Section: Features v.1*/}
          </div>
          {/*First container*/}
          {/*Second container*/}
          <div className="container-fluid" style={{backgroundColor: '#f9f9f9'}}>
            <div className="container py-4">
              {/*Section: Download*/}
              <section>
                {/* First row */}
                <div className="row my-4 pt-5 wow fadeIn" data-wow-delay="0.4s">
                  {/* First column */}
                  <div className="col-lg-7 col-md-12 mb-4 text-center">
                    <img src="https://mdbootstrap.com/img/Photos/Others/screen.jpg"   className="img-fluid z-depth-2 rounded" />
                  </div>
                  {/* /First column */}
                  {/* Second column */}
                  <div className="col-lg-5 col-md-12 mb-4 text-left">
                    {/*Section heading*/}
                    <h2 className="mb-3 my-5 dark-grey-text wow fadeIn" data-wow-delay="0.2s"><strong className="font-weight-bold">Download</strong> the application</h2>
                    <p className="grey-text mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                      ipsum dolor sit amet,
                      consectetur adipisicing elit.</p>
                    <a className="btn btn-white btn-rounded blue-text font-weight-bold ml-0 wow fadeIn" data-wow-delay="0.2s"><i className="fab fa-android pr-2" aria-hidden="true" /> Play store</a>
                    <a className="btn btn-white btn-rounded blue-text font-weight-bold wow fadeIn" data-wow-delay="0.2s"><i className="fab fa-apple pr-2" aria-hidden="true" /> App store</a>
                  </div>
                  {/* /.Second column */}
                </div>
                {/* /.First row */}
              </section>
              {/*/Section: Download*/}
            </div>
          </div>
          {/*Second container*/}
          {/*Third container*/}
          <div className="streak streak-md streak-photo" style={{backgroundImage: 'url("https://mdbootstrap.com/img/Photos/Others/architecture.jpg")'}}>
            <div className="flex-center white-text blue-gradient-mask">
              <div className="container py-3">
                {/*Section: Features v.4*/}
                <section className="wow fadeIn" data-wow-delay="0.2s">
                  {/*Section heading*/}
                  <h1 className="py-5 my-5 white-text text-center wow fadeIn" data-wow-delay="0.2s"><strong className="font-weight-bold">Lorem ipsum</strong> dolor sit amet</h1>
                  {/*Grid row*/}
                  <div className="row features-small mb-5">
                    {/*Grid column*/}
                    <div className="col-md-12 col-lg-4">
                      {/*Grid row*/}
                      <div className="row mb-5">
                        <div className="col-3">
                          <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-tablet-alt blue-text" aria-hidden="true" /></a>
                        </div>
                        <div className="col-9">
                          <h5 className="font-weight-bold white-text">Fully responsive</h5>
                          <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maiores.</p>
                        </div>
                      </div>
                      {/*Grid row*/}
                      {/*Grid row*/}
                      <div className="row mb-5">
                        <div className="col-3">
                          <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-level-up-alt blue-text" aria-hidden="true" /></a>
                        </div>
                        <div className="col-9">
                          <h5 className="font-weight-bold white-text">Frequent updates</h5>
                          <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maiores.</p>
                        </div>
                      </div>
                      {/*Grid row*/}
                      {/*Grid row*/}
                      <div className="row mb-5">
                        <div className="col-3">
                          <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-phone blue-text" aria-hidden="true" /></a>
                        </div>
                        <div className="col-9">
                          <h5 className="font-weight-bold white-text">Technical support</h5>
                          <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maiores nam.</p>
                        </div>
                      </div>
                      {/*Grid row*/}
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-md-12 col-lg-4 px-5 mb-2 text-center text-md-left flex-center">
                      <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new1.png"   className="z-depth-0 img-fluid" />
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-md-12 col-lg-4">
                      {/*Grid row*/}
                      <div className="row mb-5">
                        <div className="col-3">
                          <a type="button" className="btn-floating white btn-lg my-0"><i className="far fa-object-group blue-text" aria-hidden="true" /></a>
                        </div>
                        <div className="col-9">
                          <h5 className="font-weight-bold white-text">Editable layout</h5>
                          <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maiores nam.</p>
                        </div>
                      </div>
                      {/*Grid row*/}
                      {/*Grid row*/}
                      <div className="row mb-5">
                        <div className="col-3">
                          <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-rocket blue-text" aria-hidden="true" /></a>
                        </div>
                        <div className="col-9">
                          <h5 className="font-weight-bold white-text">Fast and powerful</h5>
                          <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maiores nam.</p>
                        </div>
                      </div>
                      {/*Grid row*/}
                      {/*Grid row*/}
                      <div className="row mb-5">
                        <div className="col-3">
                          <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-cloud-upload-alt blue-text" aria-hidden="true" /></a>
                        </div>
                        <div className="col-9">
                          <h5 className="font-weight-bold white-text">Cloud storage</h5>
                          <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maiores nam.</p>
                        </div>
                      </div>
                      {/*Grid row*/}
                    </div>
                    {/*Grid column*/}
                  </div>
                  {/*Grid row*/}
                </section>
                {/*/Section: Features v.4*/}
              </div>
            </div>
          </div>
          {/*/Third container*/}
          {/*/Fourth container*/}
          <div className="container">
            {/*Section: Pricing v.3*/}
            <section className="mt-4 mb-5">
              {/*Section heading*/}
              <h1 className="mb-3 my-5 pt-5 text-center dark-grey-text wow fadeIn" data-wow-delay="0.2s"><strong className="font-weight-bold">Lorem ipsum</strong> dolor sit amet</h1>
              {/*Section description*/}
              <p className="text-center w-responsive mx-auto my-5 grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Fugit, error amet numquam iure provident voluptate
                esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>
              {/*First row*/}
              <div className="row">
                {/*First column*/}
                <div className="col-lg-4 col-md-12 mb-4">
                  {/*Card*/}
                  <div className="card">
                    {/*Content*/}
                    <div className="text-center">
                      <div className="card-body">
                        <h5>Basic plan</h5>
                        <div className="d-flex justify-content-center">
                          <div className="card-circle d-flex justify-content-center align-items-center">
                            <i className="fas fa-home blue-text" />
                          </div>
                        </div>
                        {/*Price*/}
                        <h2 className="font-weight-bold dark-grey-text mt-3"><strong>59$</strong></h2>
                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa pariatur id nobis
                          accusamus
                          deleniti cumque hic laborum.</p>
                        <a className="btn btn-blue font-weight-bold btn-rounded">Buy now</a>
                      </div>
                    </div>
                  </div>
                  {/*/.Card*/}
                </div>
                {/*/First column*/}
                {/*Second column*/}
                <div className="col-lg-4 col-md-12 mb-4">
                  {/*Card*/}
                  <div className="card blue-gradient">
                    {/*Content*/}
                    <div className="text-center white-text">
                      <div className="card-body">
                        <h5>Premium plan</h5>
                        <div className="d-flex justify-content-center">
                          <div className="card-circle d-flex justify-content-center align-items-center">
                            <i className="fas fa-users white-text" />
                          </div>
                        </div>
                        {/*Price*/}
                        <h2 className="font-weight-bold white-text mt-3"><strong>79$</strong></h2>
                        <p>Esse corporis saepe laudantium velit adipisci cumque iste ratione facere non distinctio
                          cupiditate sequi atque.</p>
                        <a className="btn btn-white font-weight-bold btn-rounded">Buy now</a>
                      </div>
                    </div>
                  </div>
                  {/*/.Card*/}
                </div>
                {/*/Second column*/}
                {/*Third column*/}
                <div className="col-lg-4 col-md-12 mb-4">
                  {/*Card*/}
                  <div className="card">
                    {/*Content*/}
                    <div className="text-center">
                      <div className="card-body">
                        <h5>Advanced plan</h5>
                        <div className="d-flex justify-content-center">
                          <div className="card-circle d-flex justify-content-center align-items-center">
                            <i className="fas fa-chart-bar blue-text" />
                          </div>
                        </div>
                        {/*Price*/}
                        <h2 className="font-weight-bold dark-grey-text mt-3"><strong>99$</strong></h2>
                        <p className="grey-text">At ab ea a molestiae corrupti numquam quo beatae minima ratione magni accusantium
                          repellat
                          eveniet quia vitae.</p>
                        <a className="btn btn-blue font-weight-bold btn-rounded">Buy now</a>
                      </div>
                    </div>
                  </div>
                  {/*/.Card*/}
                </div>
                {/*/Third column*/}
              </div>
              {/*/First row*/}
            </section>
            {/*/Section: Pricing v.3*/}
            <hr />
            {/*Section: Testimonials v.4*/}
            <section className="text-center pb-4">
              {/*Section heading*/}
              <h1 className="mb-5 my-5 pt-5 text-center dark-grey-text wow fadeIn" data-wow-delay="0.2s"><strong className="font-weight-bold">Our clients</strong> about us</h1>
              <div className="row">
                {/*Carousel Wrapper*/}
                <div id="multi-item-example" className="carousel testimonial-carousel slide carousel-multi-item mb-5" data-ride="carousel">
                  {/*Controls*/}
                  <div className="controls-top">
                    <a className="btn-floating btn-blue btn-sm" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left" /></a>
                    <a className="btn-floating btn-blue btn-sm" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right" /></a>
                  </div>
                  {/*Controls*/}
                  {/*Slides*/}
                  <div className="carousel-inner" role="listbox">
                    {/*First slide*/}
                    <div className="carousel-item active">
                      {/*Grid column*/}
                      <div className="col-md-4">
                        <div className="testimonial">
                          {/*Avatar*/}
                          <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" className="rounded-circle img-fluid" />
                          </div>
                          {/*Content*/}
                          <h4 className="font-weight-bold mt-4">Anna Deynah</h4>
                          <h6 className="blue-text font-weight-bold my-3">Web Designer</h6>
                          <p className="font-weight-normal"><i className="fas fa-quote-left pr-2" />Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                          {/*Review*/}
                          <div className="grey-text">
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star-half-alt"> </i>
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="testimonial">
                          {/*Avatar*/}
                          <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" className="rounded-circle img-fluid" />
                          </div>
                          {/*Content*/}
                          <h4 className="font-weight-bold mt-4">John Doe</h4>
                          <h6 className="blue-text font-weight-bold my-3">Web Developer</h6>
                          <p className="font-weight-normal"><i className="fas fa-quote-left pr-2" />Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis laboriosam.</p>
                          {/*Review*/}
                          <div className="grey-text">
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="testimonial">
                          {/*Avatar*/}
                          <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" className="rounded-circle img-fluid" />
                          </div>
                          {/*Content*/}
                          <h4 className="font-weight-bold mt-4">Abbey Clark</h4>
                          <h6 className="blue-text font-weight-bold my-3">Photographer</h6>
                          <p className="font-weight-normal"><i className="fas fa-quote-left pr-2" />Quis autem vel eum iure
                            reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
                          {/*Review*/}
                          <div className="grey-text">
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="far fa-star"> </i>
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                    </div>
                    {/*First slide*/}
                    {/*Second slide*/}
                    <div className="carousel-item">
                      {/*Grid column*/}
                      <div className="col-md-4">
                        <div className="testimonial">
                          {/*Avatar*/}
                          <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg" className="rounded-circle img-fluid" />
                          </div>
                          {/*Content*/}
                          <h4 className="font-weight-bold mt-4">Blake Dabney</h4>
                          <h6 className="blue-text font-weight-bold my-3">Web Designer</h6>
                          <p className="font-weight-normal"><i className="fas fa-quote-left pr-2" />Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis laboriosam.</p>
                          {/*Review*/}
                          <div className="grey-text">
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star-half-alt"> </i>
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="testimonial">
                          {/*Avatar*/}
                          <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg" className="rounded-circle img-fluid" />
                          </div>
                          {/*Content*/}
                          <h4 className="font-weight-bold mt-4">Andrea Clay</h4>
                          <h6 className="blue-text font-weight-bold my-3">Front-end developer</h6>
                          <p className="font-weight-normal"><i className="fas fa-quote-left pr-2" />Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Quod eos id officiis hic tenetur quae.</p>
                          {/*Review*/}
                          <div className="grey-text">
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="testimonial">
                          {/*Avatar*/}
                          <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg" className="rounded-circle img-fluid" />
                          </div>
                          {/*Content*/}
                          <h4 className="font-weight-bold mt-4">Cami Gosse</h4>
                          <h6 className="blue-text font-weight-bold my-3">Phtographer</h6>
                          <p className="font-weight-normal"><i className="fas fa-quote-left pr-2" />At vero eos et accusamus et
                            iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                          {/*Review*/}
                          <div className="grey-text">
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="far fa-star"> </i>
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                    </div>
                    {/*Second slide*/}
                    {/*Third slide*/}
                    <div className="carousel-item">
                      {/*Grid column*/}
                      <div className="col-md-4">
                        <div className="testimonial">
                          {/*Avatar*/}
                          <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" className="rounded-circle img-fluid" />
                          </div>
                          {/*Content*/}
                          <h4 className="font-weight-bold mt-4">Bobby Haley</h4>
                          <h6 className="blue-text font-weight-bold my-3">Web Developer</h6>
                          <p className="font-weight-normal"><i className="fas fa-quote-left pr-2" />Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Quod eos id officiis hic tenetur quae.</p>
                          {/*Review*/}
                          <div className="grey-text">
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="testimonial">
                          {/*Avatar*/}
                          <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle img-fluid" />
                          </div>
                          {/*Content*/}
                          <h4 className="font-weight-bold mt-4">Elisa Janson</h4>
                          <h6 className="blue-text font-weight-bold my-3">Marketer</h6>
                          <p className="font-weight-normal"><i className="fas fa-quote-left pr-2" />At vero eos et accusamus et
                            iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                          {/*Review*/}
                          <div className="grey-text">
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star-half-alt"> </i>
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="testimonial">
                          {/*Avatar*/}
                          <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" className="rounded-circle img-fluid" />
                          </div>
                          {/*Content*/}
                          <h4 className="font-weight-bold mt-4">Rob Jacobs</h4>
                          <h6 className="blue-text font-weight-bold my-3">Front-end developer</h6>
                          <p className="font-weight-normal"><i className="fas fa-quote-left pr-2" />Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis laboriosam.</p>
                          {/*Review*/}
                          <div className="grey-text">
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="far fa-star"> </i>
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                    </div>
                    {/*Third slide*/}
                  </div>
                  {/*Slides*/}
                </div>
                {/*Carousel Wrapper*/}
              </div>
            </section>
            {/*Section: Testimonials v.4*/}
          </div>
          {/*/Fourth container*/}
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    changeHeader:()=>dispatch({type:"root"})
  }
}

export default connect(null ,mapDispatchToProps)(Home);