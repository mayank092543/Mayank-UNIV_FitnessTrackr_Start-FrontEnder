import { async } from "q";
import React, { useState} from "react";

const Registration =() => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmation, setConfirmation] = useState("")

    const handleRegisterSubmit = async(event) => {
        event.preventDefault();

        if (password !== confirmation) {
            alert("Password does not match")
            setPassword("")
            setConfirmation("")
        }
        else {
        const response = fetch ("https://fitnesstrac-kr.herokuapp.com/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type" : "Application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => response.json())
          .then(result => {
              console.log(result);
              const token = result.token;
              localStorage.setItem("userToken", token);
          })
          .catch(console.error);

          setUsername("")
          setPassword("")
          setConfirmation("")
    }
}

    return (
        <>
            <h1 id = "register"> Registration </h1>

            <form onSubmit = {handleRegisterSubmit}>

                <label htmlFor="username">Username</label>
                <input type = "text" placeholder = "Username"
                value = {username}
                onChange = {(event) => {setUsername(event.target.value)}}>
                </input>

                <label htmlFor="password">Password</label>
                <input type = "password" placeholder = "Password"
                value = {password}
                onChange = {(event) => {setPassword(event.target.value)}}
                minLength = {4} required>
                </input>

                <label htmlFor="ConfirmationPassword">Confirmation Password</label>
                <input type = "password" placeholder = "Config. Password"
                value = {confirmation}
                onChange = {(event) => {setConfirmation(event.target.value)}}
                minLength = {4} required>
                </input>

                <button type = "submit">Submit</button>

            </form>
        </>
    )
}

export default Registration;