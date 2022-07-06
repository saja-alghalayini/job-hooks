import React from 'react';


function Joblist() {
    return(
<>
<<<<<<< HEAD
=======

{/* Preloader Start  */}
    {/* <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <img src="assets/img/logo/logo.png" alt="" />
                </div>
            </div>
        </div>
    </div> */}
    {/* Preloader Start  */}
    <>
  <header>
    {/* Header Start */}
    <div className="header-area header-transparrent">
      <div className="headder-top header-sticky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-2">
              {/* Logo */}
              <div className="logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="menu-wrapper">
                {/* Main-menu */}
                <div className="main-menu">
                  <nav className="d-none d-lg-block">
                    <ul id="navigation">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="job_listing.html">Find a Jobs </a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="#">Page</a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="single-blog.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="elements.html">Elements</a>
                          </li>
                          <li>
                            <a href="job_details.html">job Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* Header-btn */}
                <div className="header-btn d-none f-right d-lg-block">
                  <a href="#" className="btn head-btn1">
                    Register
                  </a>
                  <a href="#" className="btn head-btn2">
                    Login
                  </a>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Header End */}
  </header>
>>>>>>> 2518575132ecdb437f7af61a9dfafcc84ed9092e
  <main>
    {/* Hero Area Start*/}
    <div className="slider-area ">
      <div
        className="single-slider section-overly slider-height2 d-flex align-items-center"
        data-background="assets/img/hero/about.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap text-center">
                <h2>Get your job</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Hero Area End */}
    {/* Job List Area Start */}
    <div className="job-listing-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          {/* Left content */}
          <div className="col-xl-3 col-lg-3 col-md-4">
            <div className="row">
              <div className="col-12">
                <div className="small-section-tittle2 mb-45">
                  <div className="ion">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="20px"
                      height="12px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(27, 207, 107)"
                        d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                      />
                    </svg>
                  </div>
                  <h4>Filter Jobs</h4>
                </div>
              </div>
            </div>
            {/* Job Category Listing start */}
            <div className="job-category-listing mb-50">
              {/* single one */}
              <div className="single-listing">
                <div className="small-section-tittle2">
                  <h4>Job Category</h4>
                </div>
                {/* Select job items start */}
                <div className="select-job-items2">
                  <select name="select">
                    <option value="">All Category</option>
                    <option value="">Category 1</option>
                    <option value="">Category 2</option>
                    <option value="">Category 3</option>
                    <option value="">Category 4</option>
                  </select>
                </div>
                {/*  Select job items End*/}
                {/* select-Categories start */}
                <div className="select-Categories pt-80 pb-50">
                  <div className="small-section-tittle2">
                    <h4>Job Type</h4>
                  </div>
                  <label className="container">
                    Full Time
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    Part Time
                    <input type="checkbox" defaultChecked="checked active" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    Remote
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    Freelance
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                {/* select-Categories End */}
              </div>
              {/* single two */}
              <div className="single-listing">
                <div className="small-section-tittle2">
                  <h4>Job Location</h4>
                </div>
                {/* Select job items start */}
                <div className="select-job-items2">
                  <select name="select">
                    <option value="">Anywhere</option>
                    <option value="">Category 1</option>
                    <option value="">Category 2</option>
                    <option value="">Category 3</option>
                    <option value="">Category 4</option>
                  </select>
                </div>
                {/*  Select job items End*/}
                {/* select-Categories start */}
                <div className="select-Categories pt-80 pb-50">
                  <div className="small-section-tittle2">
                    <h4>Experience</h4>
                  </div>
                  <label className="container">
                    1-2 Years
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    2-3 Years
                    <input type="checkbox" defaultChecked="checked active" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    3-6 Years
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    6-more..
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                {/* select-Categories End */}
              </div>
              {/* single three */}
              <div className="single-listing">
                {/* select-Categories start */}
                <div className="select-Categories pb-50">
                  <div className="small-section-tittle2">
                    <h4>Posted Within</h4>
                  </div>
                  <label className="container">
                    Any
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    Today
                    <input type="checkbox" defaultChecked="checked active" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    Last 2 days
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    Last 3 days
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    Last 5 days
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    Last 10 days
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                {/* select-Categories End */}
              </div>
              <div className="single-listing">
                {/* Range Slider Start */}
                <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                  <div className="small-section-tittle2">
                    <h4>Filter Jobs</h4>
                  </div>
                  <div className="widgets_inner">
                    <div className="range_item">
                      {/* <div id="slider-range"></div> */}
                      <input
                        type="text"
                        className="js-range-slider"
                        defaultValue=""
                      />
                      <div className="d-flex align-items-center">
                        <div className="price_text">
                          <p>Price :</p>
                        </div>
                        <div className="price_value d-flex justify-content-center">
                          <input
                            type="text"
                            className="js-input-from"
                            id="amount"
                            readOnly=""
                          />
                          <span>to</span>
                          <input
                            type="text"
                            className="js-input-to"
                            id="amount"
                            readOnly=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
                {/* Range Slider End */}
              </div>
            </div>
            {/* Job Category Listing End */}
          </div>
          {/* Right content */}
          <div className="col-xl-9 col-lg-9 col-md-8">
            {/* Featured_job_start */}
            <section className="featured-job-area">
              <div className="container">
                {/* Count of Job list Start */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="count-job mb-35">
                      <span>39, 782 Jobs found</span>
                      {/* Select job items start */}
                      <div className="select-job-items">
                        <span>Sort by</span>
                        <select name="select">
                          <option value="">None</option>
                          <option value="">job list</option>
                          <option value="">job list</option>
                          <option value="">job list</option>
                        </select>
                      </div>
                      {/*  Select job items End*/}
                    </div>
                  </div>
                </div>
                {/* Count of Job list End */}
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src="assets/img/icon/job-list1.png" alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src="assets/img/icon/job-list2.png" alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src="assets/img/icon/job-list3.png" alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src="assets/img/icon/job-list4.png" alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src="assets/img/icon/job-list1.png" alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src="assets/img/icon/job-list3.png" alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src="assets/img/icon/job-list4.png" alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
              </div>
            </section>
            {/* Featured_job_end */}
          </div>
        </div>
      </div>
    </div>
    {/* Job List Area End */}
    {/*Pagination Start  */}
    <div className="pagination-area pb-115 text-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="single-wrap d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      01
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <span className="ti-angle-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Pagination End  */}
  </main>
<<<<<<< HEAD
=======
  <footer>
    {/* Footer Start*/}
    <div className="footer-area footer-bg footer-padding">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="single-footer-caption mb-30">
                <div className="footer-tittle">
                  <h4>About Us</h4>
                  <div className="footer-pera">
                    <p>
                      Heaven frucvitful doesn't cover lesser dvsays appear
                      creeping seasons so behold.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Contact Info</h4>
                <ul>
                  <li>
                    <p>Address :Your address goes here, your demo address.</p>
                  </li>
                  <li>
                    <a href="#">Phone : +8880 44338899</a>
                  </li>
                  <li>
                    <a href="#">Email : info@colorlib.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Important Link</h4>
                <ul>
                  <li>
                    <a href="#"> View Project</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Testimonial</a>
                  </li>
                  <li>
                    <a href="#">Proparties</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Newsletter</h4>
                <div className="footer-pera footer-pera2">
                  <p>
                    Heaven fruitful doesn't over lesser in days. Appear
                    creeping.
                  </p>
                </div>
                {/* Form */}
                <div className="footer-form">
                  <div id="mc_embed_signup">
                    <form
                      target="_blank"
                      action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                      method="get"
                      className="subscribe_form relative mail_part"
                    >
                      <input
                        type="email"
                        name="email"
                        id="newsletter-form-email"
                        placeholder="Email Address"
                        className="placeholder hide-on-focus"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = ' Email Address '"
                      />
                      <div className="form-icon">
                        <button
                          type="submit"
                          name="submit"
                          id="newsletter-submit"
                          className="email_icon newsletter-submit button-contactForm"
                        >
                          <img src="assets/img/icon/form.png" alt="" />
                        </button>
                      </div>
                      <div className="mt-10 info" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="row footer-wejed justify-content-between">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            {/* logo */}
            <div className="footer-logo mb-20">
              <a href="index.html">
                <img src="assets/img/logo/logo2_footer.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
            <div className="footer-tittle-bottom">
              <span>5000+</span>
              <p>Talented Hunter</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
            <div className="footer-tittle-bottom">
              <span>451</span>
              <p>Talented Hunter</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
            {/* Footer Bottom Tittle */}
            <div className="footer-tittle-bottom">
              <span>568</span>
              <p>Talented Hunter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* footer-bottom area */}
    <div className="footer-bottom-area footer-bg">
      <div className="container">
        <div className="footer-border">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-xl-10 col-lg-10 ">
              <div className="footer-copy-right">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2">
              <div className="footer-social f-right">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fas fa-globe" />
                </a>
                <a href="#">
                  <i className="fab fa-behance" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End*/}
  </footer>
</>


>>>>>>> 2518575132ecdb437f7af61a9dfafcc84ed9092e


</>
    );
    
}

export default Joblist;