import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/Userinfo.css";




function Userinfo() {
    const Background = "https://d341ezm4iqaae0.cloudfront.net/indeedjobs/wp-content/uploads/2020/12/hero-home.svg";
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http:/localhost:8000/php/showUserInfo.php?id='+id).then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
   
    return (
        <>
            <div style={{ padding: "40px", backgroundColor: '#4c5595', textAlign: "center" }}>
                <h1 style={{ color: 'white' }}>Your Profile</h1>
            </div>
            <div class="center">
    <div class="container">
      <div class="left">
        <div class="photo">
          <div class="circle"></div>   
          <div class="circle2"></div> 
          <img alt="user photo" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png" />
        </div>     
        <div class="title__contain">
          <div class="username">{users.first_name + last_name}</div>
        </div>
        <button class="update">update info</button> 
      </div>
      <div class="right">
        <div class="rightbox">
          <span class="large">Email</span>
          <span class="small">{users.email}</span>
        </div>
        <div class="rightbox">
          <span class="large">Phone</span>
          <span class="small">{users.phone_number}</span>
        </div>
        <div class="rightbox">
          <span class="large">Password</span>
          <span class="small">{users.password}</span>
        </div>
      </div>
    </div>
  </div>
        </>
    );
}
export default Userinfo;