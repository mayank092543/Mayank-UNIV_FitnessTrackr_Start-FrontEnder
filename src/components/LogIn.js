// BASIC!!!
// needs to be updated 3/17/2021
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// get our fontawesome imports
import { faSignIn } from '@fortawesome/free-solid-svg-icons'


const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault()
    // console.log('username: ', username);
    // console.log('password: ', password);
    const response = await fetch ("https://fathomless-ocean-09578.herokuapp.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type" : "Application/json",
      },
      body: JSON.stringify({
        username: username,
        passowrd: password
      })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
        const token = result.token;
        localStorage.setItem("userToken", token);
      })
      .catch(console.error);

      
    setUsername('');
    setPassword('');
  }

  const handleChange = (event) => {
    setUsername(event.target.value);
  }

  return (
    <div id='container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input type='text' name='username' value={username} onChange={handleChange} />

        <label htmlFor='password'>Password:</label>
        <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <FontAwesomeIcon icon={regular('fa-sign-in')} />

        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}


export default LogIn;