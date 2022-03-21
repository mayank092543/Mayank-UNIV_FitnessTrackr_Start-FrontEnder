import { async } from "q";
import React, { useState, useEffect } from "react";
// import Routines from "./Routines";

const MyRoutines = ({routines, setRoutines}) => {
    const [name, setName] = useState("")
    const [goal, setGoal] = useState("")
    const [myRoutines, setMyRoutines] = useState([])

    const handleRoutinesSubmit = async(event) => {
            event.preventDefault();

            const token = localStorage.getItem("userToken")

            const response = await fetch("https://fitnesstrac-kr.herokuapp.com/api/routines", {
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

            const userName = '';
            await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }).then(response => response.json())
            .then(result => {
                userName = result.username;
            })
            .catch(console.error);


            await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${userName}/routines`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(response => response.json())
            .then(result => {
                setMyRoutines(result);
            })
            .catch(console.error);   
            
    }

    // const handleUpdate = () => {
        
    // }

    const handleDelete = async(routineIdToDelete) => {
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineIdToDelete}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
        .then(result => {
            console.log(result);
            
            if (result) {
                const newRoutines = routines.filter(routine => routine.id !== routineIdToDelete);
            }
        
    }).catch(console.error);
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
            <div>
                { myRoutines.length > 0 ?
                    myRoutines.map((routine) => (
                        <div key={routine.id}><br></br>
                            <h2>Name: {routine.name}</h2>
                            <h2>Goal: {routine.goal}</h2>

                            {
                                routine.activities.map(activity =>
                                    <div key={activity.id}>
                                        <h2>Activities {activity.id}</h2>
                                        <h3>Description: {activity.description}</h3>
                                        <h3>Duration: {activity.duration}</h3>
                                        <h3>Count: {activity.count}</h3>
                                    </div> 
                                    )
                            }

                        <button className="Update" onClick={() => handleUpdate()}>Update</button>

                        <button className="delete-bn" onClick ={() => handleDelete(routine.id)}>Delete</button>
                            
                        </div>

                    )) : <p>No Routines Yet!!!</p>
                }
            </div>
        </>
    )
}

export default MyRoutines;