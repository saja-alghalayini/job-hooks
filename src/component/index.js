import React from 'react';
// import {Routes, BrowserRouter,  Route, Link } from 'react-router-dom';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import Headers from './Headers';
import '../css/index.css';
import Joblist from './Job_listing';
// import Tip1 from './Tip1';


function Home() {
    return ( 
            <>
            <div>
           {/* <Routes>
           <Route path='/Tip'  element={< Tip1 />}></Route> 
           </Routes> */}
            {/* <Headers/> */}

            </div>
    <main>

        {/* slider Area Start*/}
        <div className="slider-area ">
            {/* Mobile Menu */}
            <div className="slider-active ">
                <div className="single-slider slider-height d-flex align-items-center" >
                {/* background="../public/assets/img/hero/h_hero.png" */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-9 col-md-10">
                                <div className="hero__caption">
                                    <h1>Find the most exciting startup jobs</h1>
                                </div>
                            </div>
                        </div>
                        {/* Search Box */}
                        <div className="row">
                            <div className="col-xl-8">

                                {/* form */}
                                <form action="#" className="search-box">
                                    <div className="input-form">
                                        <input type="text" placeholder="Job Tittle or keyword" />
                                    </div>
                                    <div className="search-form">
                                        <a href="#">Find job</a>
                                    </div>	
                                </form>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* slider Area End*/}
        {/* Our Services Start */}
        <div className="our-services section-pad-t30 w-100">
            <div className="container">
                {/* Section Tittle */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            {/* <span>FEATURED TOURS Packages</span> */}
                            <h2> Top Services </h2>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-contnet-center">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-tour"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Design - Creative</h5>
                                <span>(653)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-cms"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Design - Development</h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-report"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Sales & Marketing</h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-app"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Mobile Application</h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-helmet"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Construction</h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-high-tech"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Information Technology</h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-real-estate"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Real Estate</h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-content"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Content Writer</h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* More Btn */}
                {/* Section Button */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="browse-btn2 text-center mt-50">
                            {/* <BrowserRouter>
                            <Nav.Item> */}
                            {/* <Nav.Link href="/Joblist" eventKey="link-1" className="border-btn2">Browse All Sectors</Nav.Link> */}
                            {/* </Nav.Item> */}
                            {/* <a href="job_listing.html" className="border-btn2">Browse All Sectors</a> */}
                            {/* </BrowserRouter> */}
                            {/* <Routes> */}
                            {/* <Route  path='/Joblist' element={< Joblist />}></Route> */}
                            {/* </Routes> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Our Services End */}
        {/* Online CV Area Start */}
         <div className="online-cv cv-bg section-overly pt-90 pb-120"  data-background="assets/img/gallery/cv_bg.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="cv-caption text-center">
                            <p className="pera1">FEATURED TOURS Packages</p>
                            <p className="pera2"> Make a Difference with Your Online Resume!</p>
                            <a href="#" className="border-btn2 border-btn4">Upload your cv</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Online CV Area End*/}
        {/* Featured_job_start */}
        <section className="featured-job-area feature-padding">
            <div className="container">
                {/* Section Tittle */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>Recent Job</span>
                            <h2>Featured Jobs</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        {/* single-job-content */}
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="job_details.html"><img src="assets/img/icon/job-list1.png" alt="" /></a>
                                </div>
                                <div className="job-tittle">
                                    <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                                <a href="job_details.html">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                        {/* single-job-content */}
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="job_details.html"><img src="assets/img/icon/job-list2.png" alt="" /></a>
                                </div>
                                <div className="job-tittle">
                                    <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                                <a href="job_details.html">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                         {/* single-job-content */}
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="job_details.html"><img src="assets/img/icon/job-list3.png" alt="" /></a>
                                </div>
                                <div className="job-tittle">
                                    <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                                <a href="job_details.html">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                         {/* single-job-content */}
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="job_details.html"><img src="assets/img/icon/job-list4.png" alt="" /></a>
                                </div>
                                <div className="job-tittle">
                                    <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                                <a href="job_details.html">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Featured_job_end */}
        {/* How  Apply Process Start*/}
        <div className="apply-process-area apply-bg pt-150 pb-150" data-background="assets/img/gallery/how-applybg.png">
            <div className="container">
                {/* Section Tittle */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle white-text text-center">
                            <span>Apply process</span>
                            <h2> How it works</h2>
                        </div>
                    </div>
                </div>
                {/* Apply Process Caption */}
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-process text-center mb-30">
                            <div className="process-ion">
                                <span className="flaticon-search"></span>
                            </div>
                            <div className="process-cap">
                               <h5>1. Search a job</h5>
                               <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-process text-center mb-30">
                            <div className="process-ion">
                                <span className="flaticon-curriculum-vitae"></span>
                            </div>
                            <div className="process-cap">
                               <h5>2. Apply for job</h5>
                               <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-process text-center mb-30">
                            <div className="process-ion">
                                <span className="flaticon-tour"></span>
                            </div>
                            <div className="process-cap">
                               <h5>3. Get your job</h5>
                               <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        {/* How  Apply Process End*/}
        {/* Testimonial Start */}
        <div className="testimonial-area testimonial-padding">
            <div className="container">
                {/* Testimonial contents */}
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-10">
                        <div className="h1-testimonial-active dot-style">
                            {/* Single Testimonial */}
                            <div className="single-testimonial text-center">
                                {/* Testimonial Content */}
                                <div className="testimonial-caption ">
                                    {/* founder */}
                                    <div className="testimonial-founder  ">
                                        <div className="founder-img mb-30">
                                            <img src="assets/img/testmonial/testimonial-founder.png" alt="" />
                                            <span>Margaret Lawson</span>
                                            <p>Creative Director</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-top-cap">
                                        <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                                    </div>
                                </div>
                            </div>
                            {/* Single Testimonial */}
                            <div className="single-testimonial text-center">
                                {/* Testimonial Content */}
                                <div className="testimonial-caption ">
                                    {/* founder */}
                                    <div className="testimonial-founder  ">
                                        <div className="founder-img mb-30">
                                            <img src="assets/img/testmonial/testimonial-founder.png" alt="" />
                                            <span>Margaret Lawson</span>
                                            <p>Creative Director</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-top-cap">
                                        <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                                    </div>
                                </div>
                            </div>
                            {/* Single Testimonial */}
                            <div className="single-testimonial text-center">
                                {/* Testimonial Content */}
                                <div className="testimonial-caption ">
                                    {/* founder */}
                                    <div className="testimonial-founder  ">
                                        <div className="founder-img mb-30">
                                            <img src="assets/img/testmonial/testimonial-founder.png" alt="" />
                                            <span>Margaret Lawson</span>
                                            <p>Creative Director</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-top-cap">
                                        <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Testimonial End */}
         {/* Support Company Start*/}
         <div className="support-company-area support-padding fix mb-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="right-caption">
                            {/* Section Tittle */}
                            <div className="section-tittle section-tittle2">
                                <span>Let Us Be Your Competitive Advantage</span>
                                <h2>20k Talented people are getting Jobs</h2>
                            </div>
                            <div className="support-caption">
                                <p className="pera-top">
                                With expertise in business transformation, cyber security, Information Technology, and enterprise applications, we   deliver the powerful combination of in-demand skilled talent with outcome-based solutions that is critical for business success. </p>
                                <p>By leveraging our capabilities in talent and skill development we tailor solutions to meet changing workforce needs today and for tomorrow.</p>
                                {/* <a href="about.html" className="btn post-btn">Post a job</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="support-location-img">
                            <img src="assets/img/service/support-img.jpg" alt="" />
                            {/* <div className="support-img-cap text-center">
                                <p>Since</p>
                                <span>1994</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Support Company End*/}
        {/* Blog Area Start */}
        {/* <div className="home-blog-area blog-h-padding">
            <div className="container">
                
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>Our latest blog</span>
                            <h2>Our recent news</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src="assets/img/blog/home-blog1.jpg" alt="" />
                                    <div className="blog-date text-center">
                                        <span>24</span>
                                        <p>Now</p>
                                    </div>
                                </div>
                                <div className="blog-cap">
                                    <p>|   Properties</p>
                                    <h3><a href="single-blog.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                                    <a href="#" className="more-btn">Read more »</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src="assets/img/blog/home-blog2.jpg" alt="" />
                                    <div className="blog-date text-center">
                                        <span>24</span>
                                        <p>Now</p>
                                    </div>
                                </div>
                                <div className="blog-cap">
                                    <p>|   Properties</p>
                                    <h3><a href="single-blog.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                                    <a href="#" className="more-btn">Read more »</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* Blog Area End */}



        <div className='App mt-5 '>
        
              <div class="container mt-5 mb-5">
            <h1>Career Advice and Tips</h1>
  <div class="row mt-5 ">
    <div class="col border">
    01 | <a href="https://www.youtube.com/watch?v=mDr1j6LnSqo&t=10s"  target="_blank">Video Interview Tips for Success </a> Jul 2021  </div>
    <div class="col border">
    02 | 5 Must-Read Books for Accountants Jun 2021
    </div>
    <div class="col border">
    03 | <a href="https://www.youtube.com/watch?v=EcKg8Eb1faA"  target="_blank">Tips for Fresh Graduates to Find a Mechanical Engineering Job in the UAE </a> May 2021
    </div>
  </div>
  <div class="row mb-5">
    <div class="col border">
    04 | Tips to Help Freshers Kickstart Their Career Confidently May 2021
    </div>
    <div class="col border">
    05 | Top Tips to Get a Nursing Job in the Middle East Feb 2021
    </div>
    <div class="col border">
    06 | The 5 Most Important Logistics Jobs in Dubai Feb 2021

    </div>
  </div>
</div>
        
        </div>

    </main>
 

            
            
             </>
        );
    }
export default Home;