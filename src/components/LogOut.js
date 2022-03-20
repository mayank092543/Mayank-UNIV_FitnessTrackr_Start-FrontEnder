import React from "react";

const LogOut = () => {
    localStorage.clear();

    return (
        <h1> You have been Logout</h1>
    )
}

export default LogOut;