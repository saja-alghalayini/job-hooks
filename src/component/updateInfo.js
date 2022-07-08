import React, { useState } from 'react';
import axios from "axios";
import "../css/update.css";
// localhost/job_hooks/API/updateUserInfo.php?id=1&firstName=aa&lastName=bb&email=aa@mail.com&password=asdfg&phone=0771020304
function UpdateInfo() {
    const [id, SetId]=useState(1);
    const [firstName, SetFirstName]=useState('');
    const [lastName, SetlastName]=useState('');
    const [email, Setemail]=useState('');
    const [password, Setpassword]=useState('');
    const [phone, setPhone]=useState('');


    const  Update = ()=>{
    axios.get(`localhost/job_hooks/API/updateUserInfo.php?id=${id}&firstName=${firstName}&lastName=${lastName}&email=${email}&password=${password}phone=${phone}`)    
        }

    return (
        <>
            <div style={{ padding: "40px", backgroundColor: '#4c5595', textAlign: "center" }}>
                <h1 style={{ color: 'white' }}>Update Your Profile</h1>
            </div>

                            <div className='databox'>
                                <form onSubmit={Update}>

                            <span className='d1'>
                                <label htmlFor="" className='label2'>First Name</label>
                                <input type="text" className='inp' name='firstName'   onChange={(e)=>SetFirstName(e.target.value)}/>
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Last Name</label>
                                <input type="text" className='inp' name='lastName'   oonChange={(e)=>SetlastName(e.target.value)}/>
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Email<span className='red'>*</span></label>
                                <input type="text" className='inp' name='email'   onChange={(e)=>Setemail(e.target.value)}/>
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Phone number<span className='red'>*</span></label>
                                <input type="text" className='inp' name='phone'   onChange={(e)=>setPhone(e.target.value)}/>
                            </span><br />
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Password<span className='red'>*</span></label>
                                <input type="text" className='inp' name='password'   onChange={(e)=>Setpassword(e.target.value)}/> 
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