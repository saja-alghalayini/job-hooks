import React, { useState } from 'react';
import axios from "axios";
import "../css/update.css";
// localhost/job_hooks/API/updateUserInfo.php?id=1&firstName=aa&lastName=bb&email=aa@mail.com&password=asdfg&phone=0771020304
function UpdateInfo() {
    // const [id, SetId]=useState(1);
    const[isSubmit,setSubmit]=useState(false);
    const [firstName, SetFirstName]=useState('');
    const [lastName, SetLastName]=useState('');
    const [email, SetEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [password, SetPassword]=useState('');

    const  Update = ()=>{
    axios.get(`http://localhost/job_hooks/API/updateUserInfo.php?id=1&firstName=${firstName}&lastName=${lastName}&email=${email}&password=${password}&phone=${phone}`)    
    setSubmit(isSubmit)}

    return (
        <>
        <div className='text-center message' style={{ display:isSubmit?"block":"none"}}>
        <p>Your information  has been  updated successfully</p>
       </div>
       <div class="single-slider section-overly slider-height2 d-flex align-items-center" 
            data-background="assets/img/hero/about.jpg">
              <div class="container">
                <div class="row">
              <div class="col-xl-12"><div class="hero-cap text-center">
                <h2 style={{ padding: "35px", color:'#fff'}}>Update Your Profile</h2>
                    </div>
                  </div>
                </div>
              </div>
          </div>


                            <div className='databox' style={{marginRight:'70%'}}>
                                <form onSubmit={Update}>

                            <span className='d1'>
                                <label htmlFor="" className='label2'>First Name</label>
                                <input type="text" className='inp' name='firstName'   onChange={(e)=>SetFirstName(e.target.value)}/>
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Last Name</label>
                                <input type="text" className='inp' name='lastName'  onChange={(e)=>SetLastName(e.target.value)}/>
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Email<span className='red'>*</span></label>
                                <input type="text" className='inp' name='email'   onChange={(e)=>SetEmail(e.target.value)}/>
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Phone number<span className='red'>*</span></label>
                                <input type="text" className='inp' name='phone'  onChange={(e)=>setPhone(e.target.value)}/>
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Password<span className='red'>*</span></label>
                                <input type="text" className='inp' name='password' onChange={(e)=>SetPassword(e.target.value)}/> 
                            </span><br />
                                <div style={{ }}>
                                   <button className='butt'>Submit</button>
                                </div>
                                </form>
</div>
        </>
    );
}

export default UpdateInfo;