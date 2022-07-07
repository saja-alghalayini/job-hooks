// import './App.css';
import {Routes, BrowserRouter,  Route, Link } from 'react-router-dom';
import Home from './component/index';
// import Form from './component/Form';
import Footer from './component/Footer';
import About from './component/About';
import Headers from './component/Headers';
// import Directory from './Search';
import Tip from './component/Tip1';
// import Userinfo from './component/Userinfo'; 
// import UpdateInfo from './component/updateInfo'; 
// import Apply from './component/Apply';
import Joblist from './component/Job_listing'
import Contact from './component/Contact';


function App() {
  return (
    <>
    <BrowserRouter>
    <Headers />
    <Routes>
       <Route exact path='/'  element={< Home />}></Route> 
        <Route  path='/About' element={< About />}></Route>
       <Route  path='/Contact' element={< Contact />}></Route>
      <Route  path='/Tip' element={< Tip />}></Route>
      <Route  path='/Joblist' element={< Joblist />}></Route> 
       {/* <Route  path='/About' element={< About />}></Route>
       <Route  path='/Contact' element={< Contact />}></Route>  */}
       {/* <Route exact path='/Register'  element={< Register />}></Route> 
       <Route  path='/Login' element={< Login />}></Route> */}
       {/*<Route  path='/Contact' element={< Contact />}></Route>  */}
       </Routes>
    </BrowserRouter>
    {/* <Headers /> */}
    {/* <Tip/> */}
    {/* <Home/> */}
    {/* <Apply/> */}
    {/* <UpdateInfo/>  */}
    {/* <Userinfo /> */}
     {/* <Footer />   */}
     {/* <Directory /> */}
     {/* <Contact/> */}
     <Footer />
    </>
    );
}

export default App;
