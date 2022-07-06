import React, { Component } from 'react';
import Home from './index';
import About from './About';
// import Form from './Form';
import Contact from './Contact';
// import { render } from "react-dom";



import {Routes,BrowserRouter, Route,Link} from "react-router-dom";

class Navbar extends Component {
    state = {  } 
    render() { 
        return (

            <div className="App">
            <BrowserRouter>
            <nav>

      <ul>
       <li>
         <Link to="/About">AboutUs</Link>
       </li>
       <li>
         <Link to="/Contact">ContactUs</Link>
       </li>
       <li>
         <Link to="/">Home</Link>
       </li>
      
      </ul>
      </nav>
             <Routes>

                <Route path="/About" element={ <About />}>
                 About
                </Route>
                <Route path="/Contact" element={ <Contact />}>
                Contact
                </Route>
                <Route path="/" exact element={ <Home name="ibrahim" />}>
                Home                
                </Route>
               

          </Routes>
          </BrowserRouter>



          </div>

        );
    }
}
 
export default Navbar;
