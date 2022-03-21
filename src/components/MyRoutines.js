import { async } from "q";
import React, { useState, useEffect } from "react";
// import Routines from "./Routines";

const MyRoutines = ({routines, setRoutines}) => {
    const [name, setName] = useState("")
    const [goal, setGoal] = useState("")

    const handleRoutinesSubmit = async(event) => {
            event.preventDefault();

            const token = localStorage.getItem("userToken")

            const response = await fetch("https://fathomless-ocean-09578.herokuapp.com/api/routines", {
                method: "POST",
                headers: {
                    "Content-Type" : "Application/json",
                    "Authorization" : `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: name,
                    goal: goal
                })
            })
    }

    return (
        <>
            <h1 id = "CreateRoutines">Create your own Routines</h1>
            <form onSubmit = {handleRoutinesSubmit}>

                <label htmlFor = "RoutineName">Routine Name</label>
                <input type = "text" placeholder = "Name"
                       value = {name}
                       onChange = {(event) => {setName(event.target.value)}}>
                </input>

                <label htmlFor = "RoutineGoal">Goal</label>
                <input type = "text" placeholder = "Goal"
                       value = {goal}
                       onChange = {(event) => {setGoal(event.target.value)}}>    
                </input>

                <button type = "submit">Submit</button>
            </form>

        </>
    )
}

export default MyRoutines;