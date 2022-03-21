import { async } from "q";
import React, { useState, useEffect } from "react";
// import Routines from "./Routines";

const MyRoutines = () => {
    const [routines, setRoutines] = useState([])
    const [name, setName] = useState("")
    const [goal, setGoal] = useState("")

    const handleRoutinesSubmit = async(event) => {
            event.preventDefault();

            const token = localStorage.getItem("userToken")

            fetch(" http://fitnesstrac-kr.herokuapp.com/api/routines", {
                method: "POST",
                headers: {
                    "Content-Type" : "Application/json",
                    "Authorization" : `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: name,
                    goal: goal
                })
            }).then(response => response.json())
              .then(result => {
                  console.log(result);
                  setRoutines(result)
              })

              setName("")
              setGoal("")
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

            {
                routines.map((routine) => {
                    <div key={routine.id}>
                        <h2>Name: {routine.name}</h2>
                    </div>
                })
            }

        </>
    )


}

export default MyRoutines;