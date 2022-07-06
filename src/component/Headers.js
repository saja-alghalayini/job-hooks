import React from 'react';
import {Routes, BrowserRouter,  Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Home from './index';
import Joblist from './Job_listing';
import About from './About';
import Contact from './Contact';
import Register from './Register';
import Login from './Login';


function Headers() {

    return (
        <>
            <header className=''>

              <div className='head '>
                
                                  {/* Logo */}
                                  <div className="logo ">
                                      <img src="../../assets/img/logo/logo.png" height="100px" alt="" />
                                  </div>
   
                                                  <BrowserRouter>
                                          <nav className="d-none d-lg-block w-100">
                                              <ul id="navigation">
                                                
                                                  <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Joblist" eventKey="link-1">Find Jobs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link herf="/About" eventKey="link-2">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link herf="/Contact" eventKey="link-3" > Contact Us</Nav.Link>
      </Nav.Item>
    </Nav>
                                                  {/* <Routes> */}
                                                  
                                                  {/* <Link to="/About">About</Link>
                                                  <Link to="/Form">Form</Link>
                                                  <Link to="/Contact">Contact</Link> */}
                                                  {/* <Link to="/regis">Register</Link>
                                                   <Link to="/login">Login</Link> */}
                                                      {/* <Router>
                                                 </Router> */}
                                                    <Routes>
                                                         <Route exact path='/'  element={< Home />}></Route> 
                                                         <Route  path='/About' element={< About />}></Route>
                                                         <Route  path='/Contact' element={< Contact />}></Route>
                                                         <Route  path='/About' element={< About />}></Route>
                                                         <Route  path='/Joblist' element={< Joblist />}></Route>
                                                         {/* <Route  path='/About' element={< About />}></Route>
                                                         <Route  path='/Contact' element={< Contact />}></Route>  */}
                                                         <Route exact path='/Register'  element={< Register />}></Route> 
                                                         <Route  path='/Login' element={< Login />}></Route>
                                                         {/*<Route  path='/Contact' element={< Contact />}></Route>  */}
                                             
                                                    </Routes>
                                              </ul>
                                          </nav>

                                      {/* Header-btn */}
                                      <div className="header-btn d-none f-right d-lg-block">
                                      {/* <Routes> */}
                                          {/* <a herf="#" className="btn head-btn1">Register</a>
                                          <a herf="#" className="btn head-btn2">Login</a> */}
                                      {/* </Routes> */}

                                      </div>


                                                  </BrowserRouter>
                              {/* Mobile Menu */}
                              <div className="col-12">
                                  <div className="mobile_menu d-block d-lg-none"></div>
                              </div>
   
              
              {/* Header End */}
                 </div>
          </header>
    

         </>
    )

}
export default Headers