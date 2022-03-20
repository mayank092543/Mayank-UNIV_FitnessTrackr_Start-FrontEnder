import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter } from 'react-router-dom';

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {
    Home,
    LogIn,
    LogOut,
    Registration,
    Activities,
    Routines
  } from './components';

const App = () => {

    const [authToken, setAuthToken] = useState("")

    useEffect(() => {
        localStorage.getItem("userToken") ? setAuthToken(localStorage.getItem("userToken")) : setAuthToken(false)
    }, [])
 
 
 return <>
     <BrowserRouter>
     <div id="container">

         <div id = "header">
             <p className = "title">Fitness Tracker</p>

         </div>
            <div id="navbar">

                <Link to="/home"></Link>

                <Link to="/routines"></Link>

                <Link to="/activities" className="link"></Link>

                {
                    authToken ? <Link to ="/logout" className="link">LogOut</Link> : <Link to = "/login" className="link">LogIn</Link>
                }    

                {
                    authToken ? <></> : <Link to ="/register" className="link">SignUp</Link>
                }
                
            </div>

            <div id="page-body">

                <Route path = "/home">
                    <Home />
                </Route>

                <Route path = "/routines">
                    <Routines />
                </Route>

                <Route path = "/activities">
                    <Activities />
                </Route>

                <Route path = "/logout">
                    <LogOut />
                </Route>

                <Route path = "/login">
                    <LogIn authToken={authToken} setAuthToken={setAuthToken} />
                </Route>

                <Route path = "/register">
                    <Registration />
                </Route>

            </div>
        </div>
     
     </BrowserRouter>

  </>
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);