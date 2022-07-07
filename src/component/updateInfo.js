import React, { useState } from 'react';
import axios from "axios";
import "../css/update.css";
// localhost/job_hooks/API/updateUserInfo.php?id=1&firstName=aa&lastName=bb&email=aa@mail.com&password=asdfg&phone=0771020304
function UpdateInfo() {
    // state = {
    //         id:'',
    //         firstName: '',
    //         lastName: '',
    //         email: '';
    //         password:'';
    //         phone:'';
    //       }

    const  Update = ()=>{
    axios.get("localhost/job_hooks/API/updateUserInfo.php?id=1&firstName=?&lastName=?&email=?&password=?phone=")    
        }

    return (
        <>
            <div style={{ padding: "40px", backgroundColor: '#4c5595', textAlign: "center" }}>
                <h1 style={{ color: 'white' }}>Update Your Profile</h1>
            </div>

                            <div className='databox'>
                                <form onSubmit={this.Update}>

                            <span className='d1'>
                                <label htmlFor="" className='label2'>First Name</label>
                                <input type="text" className='inp' name='firstName'   />
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Last Name</label>
                                <input type="text" className='inp' name='lastName'   />
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Email<span className='red'>*</span></label>
                                <input type="text" className='inp' name='email'   />
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Phone number<span className='red'>*</span></label>
                                <input type="text" className='inp' name='phone'   />
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Password<span className='red'>*</span></label>
                                <input type="text" className='inp' name='password'   /> 
                            </span><br />
                                <div style={{ width: "60%", marginLeft: "2%" }}>
                                   <button className='butt c2'>Submit</button>
                                </div>
                                </form>
</div>
        </>
    );
}

export default UpdateInfo;