import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {
    Home,
    LogIn,
    LogOut,
    Registration,
    Activities,
    Routines,
    MyRoutines
  } from './components';

const App = () => {

    // const [authToken, setAuthToken] = useState(false)

    // useEffect(() => {
    //     localStorage.getItem("userToken") ? setAuthToken(true) : setAuthToken(false)
    // }, [])

    const token = localStorage.getItem("userToken")

    // console.log(token)
 
 
 return <>
     <BrowserRouter>
     <div id="container">

         <div id = "header">
             <p className = "title">Fitness Tracker</p>

        
            <nav id="navbar">

                <Link to="/home" className="link">Home</Link>

                <Link to="/routines" className="link">Routines</Link>

                {
                    localStorage.getItem("userToken") ? <Link to ="/myroutines" className="link">My Routines</Link> : <></>
                }

                {/* <Link to ="/myroutines" className="link">My Routines</Link>   */}

                <Link to="/activities" className="link">Activities</Link>

                {
                    localStorage.getItem("userToken") ? <Link to ="/logout" className="link">LogOut</Link> : <Link to = "/login" className="link">LogIn</Link>
                }    

                {/* <Link to ="/logout" className="link">LogOut</Link>

                <Link to ="/logIn" className="link">LogIn</Link> */}

                {
                    localStorage.getItem("userToken") ? <></> : <Link to ="/register" className="link">SignUp</Link>
                }
                
            </nav>
        </div>

        <img id="Logo" src="Logo.png" />

            <div id="page-body">
                <Switch>
                <Route path = "/home">
                    <Home />
                </Route>

                <Route path = "/routines">
                    <Routines />
                </Route>

                <Route path = "/myroutines">
                    <MyRoutines />
                </Route>

                <Route exact path = "/activities">
                    <Activities />
                </Route>

                <Route path = "/logout">
                    <LogOut />
                </Route>

                <Route path = "/login">
                    <LogIn />
                </Route>

                <Route path = "/register">
                    <Registration />
                </Route>
                </Switch>
            </div>
        </div>
     
     </BrowserRouter>

  </>
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);