import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import axios  from 'axios';
import '../css/header.css';


function Headers() {
    const [id, setId] = useState(1);
    // const [Login, setLogin] = useState(false);
    // useEffect(()=>{
    //     axios.get(`http://localhost/job_hooks/API/showUserInfo.php`)
    //     .then((res)=>{
    //     const data=res.data;
    //     setUsers(data);
    //     });
    //    })

    return (
        <>
            <header className=''>

              <div className='head '>
                
                                  {/* Logo */}
                                  <div className="logo ml-5">
                                      <img src="../../assets/img/logo/logo.png" height="100px" alt="" />
                                  </div>
   
                                                  
                                          <nav className="d-none d-lg-block w-100">
                                              <ul id="navigation">
                                                

        <Link to="/" className='linkto'>Home</Link>
        <Link to="/Joblist" eventKey="link-1" className='linkto'>Find Jobs</Link>
        <Link to="/About" eventKey="link-2" className='linkto'>About</Link>
        <Link to="/Contact" eventKey="link-3" className='linkto'> Contact Us</Link>
        { id? <Link to="/Userinfo" eventKey="link-4" className='linkto'> Profail</Link> :""}
        { id? "" :<span><Link to="/Register" eventKey="link-5" className='bttn'> Register</Link><Link to="/Login" eventKey="link-6" className='bttn'> Login</Link></span>}
        
                
                   
                                                     
        </ul>
    </nav>
                                             
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