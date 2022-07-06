import React, { useState } from 'react';
// import Header from "../components/layout/Header";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/update.css";

function UpdateInfo() {
    const Background = "https://d341ezm4iqaae0.cloudfront.net/indeedjobs/wp-content/uploads/2020/12/hero-home.svg";
    return (
        <>
            <div style={{ padding: "40px", backgroundColor: '#4c5595', textAlign: "center" }}>
                <h1 style={{ color: 'white' }}>Edit Profile</h1>
            </div>

        

            <div className="c2 m-auto w-50 mt-5">
                <div className="cHead">
                    <h5  className='label c2'>Update Your Profile Information:</h5>
                </div><br />
               
                <div className="c2 ">
                    <div>
                        <div style={{}}>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>First Name</label>
                                <input type="text" className='inp' />
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Last Name</label>
                                <input type="text" className='inp' />
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Email<span className='red'>*</span></label>
                                <input type="text" className='inp' />
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>:phone number<span className='red'>*</span></label>
                                <input type="text" className='inp' />
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Password<span className='red'>*</span></label>
                                <input type="text" className='inp' />
                            
                            </span><br />
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="c2">
                <div className="cHead">
                    <h5 className='label'>Upload Resume/CV:</h5>
                </div>
                <div className="cBody">
                    <label htmlFor="" className='label2'>Please upload your resume (Max size: 5 MB)<span className='red'>*</span></label>
                    <div>
                        <input type="file" id="file2" />
                        <label htmlFor="file2" className='file'>Chose a file</label>
                    </div>
                </div>
            </div>

           


            <div style={{ width: "60%", margin: "auto" }}>
                <button className='butt c2'>Submit</button>
            </div>
        </>
    );
}

export default UpdateInfo;