import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function About() {
  const [uname, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [msg, SetMsg] = useState('');

  const rating = () => {
    // axios.get(`http://localhost/job_hooks/API/updateUserInfo.php?id=1&uname=${uname}&email=${email}&msg=${msg}`)
    // .then((data) =>{
    // setComment(data.data)
    // console.log(data.data);
    // });
    // },[])

  }

  // const  rating = ()=>{
  // axios.get(`http://localhost/job_hooks/API/updateUserInfo.php?id=1&uname=${uname}&email=${email}&msg=${msg}`)    


  return (
    <>
      <div class="single-slider section-overly slider-height2 d-flex align-items-center" data-background="assets/img/hero/about.jpg"><div class="container"><div class="row"><div class="col-xl-12"><div class="hero-cap text-center"><h2 style={{ padding: "35px", color:'#fff'}}>About us</h2>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      {/* End banner Area */}
      {/* Start about-info Area */}
      <section className="about-info-area section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 info-left">
              <img className="mt-5 img-fluid" src="https://media.istockphoto.com/photos/top-view-of-a-white-desktop-concept-job-search-picture-id1279104620?k=20&m=1279104620&s=612x612&w=0&h=Lit4OzCRPW6Z5Pq1L4b9ZjUJvx6McLJySTLnUjJsECE=" alt="" />
            </div>
            <div className="mt-5 col-lg-6 info-right">
              <h6>About Us</h6>
              <h1>Who We Are?</h1>
              <p>
                Here, I focus on a range of items and features that we use in life
                without giving them a second thought. such as Coca Cola. Dolor sit
                amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End about-info Area */}


      {/* Start our team area */}
      <section id="team">
        <div className="container my-3 py-5 text-center">
          <div className="row mb-5">
            <div className="col">
              <h1>Our Team</h1>
              <p className="my-3">

              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 pt-1">
              <div className="card h-100">
                <div className="card-body">
                  <img
                    className="img-fouild rounded w-75 mb-3"
                    src="https://avatars.githubusercontent.com/u/100211528?v=4"
                    alt="Sophie"
                  />
                  <h5>BahaaEdeen AlNabulsi</h5>
                  <h5>Full-Stack Develpoer</h5>
                  <p>

                  </p>
                  {/* <div className="d-flex flex-row justify-content-center">
                    <div className="p-4">
                      <a href="" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="" target="_blank">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pt-1">
              <div className="card h-100">
                <div className="card-body">
                  <img
                    className="img-fouild rounded w-75 mb-3"
                    src="https://avatars.githubusercontent.com/u/100213822?v=4"
                    alt="lucy"
                  />
                  <h5>saja Alghalayini </h5>
                  <h5>Full-Stack Develpoer</h5>
                  <p>

                  </p>
                  {/* <div className="d-flex flex-row justify-content-center">
                    <div className="p-4">
                      <a href="" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="" target="_blank">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pt-1">
              <div className="card h-100">
                <div className="card-body">
                  <img
                    className="img-fouild rounded w-75 mb-3"
                    src="https://avatars.githubusercontent.com/u/49879845?v=4"
                    alt="Brad"
                  />
                  <h5>Raghad Al-Karasneh </h5>
                  <h5>Full-Stack Develpoer</h5>
                  <p>

                  </p>
                  {/* <div className="d-flex flex-row justify-content-center">
                    <div className="p-4">
                      <a href="" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="" target="_blank">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pt-1">
              <div className="card h-100">
                <div className="card-body">
                  <img
                    className="img-fouild rounded w-75 mb-3"
                    src="https://avatars.githubusercontent.com/u/100212077?v=4"
                    alt="andres"
                  />
                  <h5>Tamara Al-Shabatat</h5>
                  {/* <h5>Full-Stack Develpoer</h5> */}
                  <h5>Scrum Master</h5>
                  <p>

                  </p>
                  {/* <div className="d-flex flex-row justify-content-center">
                    <div className="p-4">
                      <a href="https://www.linkedin.com/in/roayaseen/" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="https://github.com/roayas" target="_blank">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="https://www.linkedin.com/in/roayaseen/" target="_blank">
                        <i class="fa-brands fa-linkedin"></i> */}
                      {/* </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      </section>
      {/* Start testimonial Area */}
      {/* <section className="testimonial-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Testimonial from our Clients</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="active-testimonial">
              {commnet.map((comment) =>{
                console.log(comment.rating);
                return(
                              <div className="single-testimonial item d-flex flex-row">
                              <div className="thumb">
                                <img className="img-fluid" src="img/elements/user3.png" alt="" height={60} width={60}/>
                              </div>

                              <div className="desc">

                              <div className="star">
                                  {comment.rating == 1 ? <>
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" /></> : ''}
                                  {comment.rating == 2 ? <>
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" /></> : ''}
                                  {comment.rating == 3 ? <>
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" /></> : ''}
                                  {comment.rating == 4 ? <>
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star" /></> : ''}
                                  {comment.rating == 5 ? <>
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" /></> : ''}
                                  </div>
                                <h6>
                                  {comment.user_id}
                                </h6>
                                <p>{comment.body}</p>
                                
                              </div>
                            </div> */}
      {/* )})} */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </section> */}


      {/* <section>
      <div className='databox'>
                                <form onSubmit={rating}>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Name</label>
                                <input type="text" className='inp' name='uname'  onChange={(e)=>SetName(e.target.value)}/>
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Email</label>
                                <input type="text" className='inp' name='email'  onChange={(e)=>SetEmail(e.target.value)}/>
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Comment<span className='red'>*</span></label>
                                <input type="text" className='inp' name='msg'   onChange={(e)=>SetMsg(e.target.value)}/>
                            </span><br />
                                <div style={{ width: "60%", marginLeft: "-10%" }}>
                                   <button className='butt c2'>Submit</button>
                                </div>
                                </form>
                                </div>
  
    </section><br/> */}



    </>
  );
}
export default About;