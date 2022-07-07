import { useEffect, useState } from "react";
import axios from "axios";
import "../css/userinfo.css";


function Userinfo() {
    const [user, setUsers] = useState([]);
    useEffect(()=>{
     axios.get(`http://localhost/job_hooks/API/showUserInfo.php`)
     .then((res)=>{
     console.log(res)
     const data=res.data;
     setUsers(data);
      
     });
    
    })
  
   
    return (
        <>
            <div style={{ padding: "40px", backgroundColor: '#4c5595', textAlign: "center" }}>
                <h1 style={{ color: 'white' }}>Your Profile</h1>
            </div>
            {user.map((data)=>

<>
            <div className="center">
    <div className="container">
      <div className="left">
        <div className="photo">
          <div className="circle"></div>   
          <div className="circle2"></div> 
          <img alt="user photo" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png" />
        </div>     
          <div className="title__contain">

      


            
          <div className="username">{data.first_name + ' ' + data.last_name}</div>
        </div>
        <button className="update">update info</button> 
      </div>
      <div className="right">
        <div className="rightbox">
          <span className="large">Email</span>
          <span className="small">{data.email}</span>
        </div>
        <div className="rightbox">
          <span className="large">Phone</span>
          <span className="small">{data.phone_number}</span>
        </div>
        <div className="rightbox">
          <span className="large">Password</span>
          <span className="small">{data.password}</span>
        </div>
      </div>
    </div>
    </div>
    </>
        )}
    </>
    );
}
export default Userinfo;