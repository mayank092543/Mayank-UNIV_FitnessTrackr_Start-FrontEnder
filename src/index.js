import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter } from 'react-router-dom';

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";


import {
    LogIn,
    //SignOut
  } from './components';

const App = (props) => {
 
 
 return <>
     <BrowserRouter>
        <main>
            <div id="navbar">
                <Link to=""></Link>
                <Link to=""></Link>
                <Link to=""></Link>
                <Link to=""></Link>
            </div>
            <div id="page-body">
                {/* These will be replaced by components
                    for example <Routines /> */}
                <Switch>
                    {/* <Route path="/community">
                        <Community posts={posts}/>
                    </Route>
                    <Route path="/messages">
                        <Messages />
                    </Route> */}
                    
                </Switch>
            </div>
        </main>
     
     </BrowserRouter>

  </>
}

export default LogIn;