import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../css/index.css';



function Home() {
    const [cate, setCateg] = useState([]);
    useEffect(()=>{
     axios.get(`http://localhost/job_hooks/API/showcat.php`)
     .then((res)=>{
     console.log(res)
     const data=res.data;
     setCateg(data);
      
     });
})
    
    return ( 
            <>

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
                {/* {cate.map((data)=> */}

                    <>
                <div className="row d-flex justify-contnet-center">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-tour"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Teaching - Coaching</h5>
                                <span>(353)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-cms"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Translating </h5>
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
                               <h5>Accounting - Marketing</h5>
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
                   
                    </div>
                   </> 
                   {/* )} */}
                </div>
                {/* More Btn */}
                {/* Section Button */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="browse-btn2 text-center mt-50">
                           
                             <Link to="/Joblist" eventKey="link-1" className="border-btn2">Browse All Sectors</Link> 
                            
                            {/* <a href="job_listing.html" className="border-btn2">Browse All Sectors</a> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
        {/* Our Services End */}
        {/* Online CV Area Start */}
         <div className="online-cv cv-bg section-overly pt-90 pb-120"  data-background="assets/img/gallery/cv_bg.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="cv-caption text-center">
                            <p className="pera1">FEATURED TOURS Packages</p>
                            <p className="pera2"> Make a Difference with Your Online Resume!</p>
                            {/* <BrowserRouter> */}
                                
                            <Link to="/Apply" eventKey="link-2" className="border-btn2 border-btn4"  onClick={''}>Upload your cv</Link>
                            {/* </BrowserRouter> */}
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
                        </div>
                    </div>
                </div>
                {/* Apply Process Caption */}
                <div className="row">
                            <h3>Apply process</h3>
                            <h2> How it works</h2>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-process text-center mb-30">
                            <div className="process-ion">
                                <span className="flaticon-search"></span>
                            </div>
                            <div className="process-cap">
                               <h5>1. Search a job</h5>
                               <p>Doing a job search can turn out well with the right skills. Listen and learn.</p>
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
                               <p>Determine what you want to do· Identify your qualifications· Establish how many jobs fit ·</p>
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
                               <p>Focus on building a relationship instead of simply asking about a job.</p>
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
                                            <img src="https://avatars.githubusercontent.com/u/100213753?v=4" className="userimg" alt="" />
                                            <span>Dua-Alsafasfeh</span>
                                            <p>Communication Engineering</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-top-cap">
                                        <p>“I was able to get a job through you, you deserve more than a word of thanks. I was able to find many opportunities that fit my abilities and skills.”</p>
                                    </div>
                                </div>
                            </div>
                            {/* Single Testimonial */}
                            <div className="single-testimonial text-center mb-5 ">
                                {/* Testimonial Content */}
                                <div className="testimonial-caption ">
                                    {/* founder */}
                                    <div className="testimonial-founder  ">
                                        <div className="founder-img mb-30">
                                            <img src="https://avatars.githubusercontent.com/u/100212231?v=4" className="userimg" alt="" />
                                            <span>Anas Allawafeh</span>
                                            <p>Communication Engineering</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-top-cap">
                                        <p>“I was able to get a job through you, you deserve more than a word of thanks. I was able to find many opportunities that fit my abilities and skills.”</p>
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
                                            <img src="https://avatars.githubusercontent.com/u/62554357?v=4" className="userimg" alt="" />
                                            <span>Obada_alshafeey</span>
                                            <p>Web Devloper</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-top-cap">
                                        <p>“I was able to get a job through you, you deserve more than a word of thanks. I was able to find many opportunities that fit my abilities and skills.”</p>
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
            <div className="container mb-5">
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
   



        <div className='App mt-5 '>
              <div className="container mt-5 mb-5">
            <h1 className='center'>Career Advice and Tips</h1>
  <div className="row mt-5 ">
    <div className="col border py-2">
    01 | <a href="https://www.youtube.com/watch?v=mDr1j6LnSqo&t=10s"  target="_blank">Video Interview Tips for Success </a> Jul 2021  </div>
    <div className="col border py-2">
    02 | 5 Must-Read Books for Accountants Jun 2021
    </div>
  </div>
  <div className="row ">
    <div className="col border py-2">
    03 | <a href="https://www.youtube.com/watch?v=EcKg8Eb1faA"  target="_blank">Tips for Fresh Graduates to Find a Mechanical Engineering Job in the UAE </a> May 2021
    </div>
    <div className="col border py-2">
    04 | Tips to Help Freshers Kickstart Their Career Confidently May 2021
    </div>
  </div>
  <div className="row mb-5 ">
    <div className="col border py-2">
    05 | Top Tips to Get a Nursing Job in the Middle East Feb 2021
    </div>
    <div className="col border py-2">
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