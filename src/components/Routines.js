import { async } from "q";
import React, { useState, useEffect } from "react";
import MyRoutines from "./MyRoutines";

const Routines = () => {
    const [routines, setRoutines] = useState("")

    const token = localStorage.getItem("userToken");

    useEffect(() => {
        const fetchRoutines = async() => {
            const response = await fetch("https://fathomless-ocean-09578.herokuapp.com/api/routines")
                .then(response => response.json())
                .then(result => {
                    setRoutines(result)
                })
                .catch(console.error)
        }
        fetchRoutines()
    }, [])

    return (
        <>
            <div id = "logoutRoutines">

                <h1>All Routines</h1>

                {
                    routines.map((routine) => (
                        <div key={routine.id}>
                            <h1>Name: {routine.name}</h1>
                            <h2>Goal: {routine.goal}</h2>

                            {
                                routine.activities.map(activity =>
                                    <div key={activity.id}>
                                        <h3>Activity Name: {activity.name}</h3>
                                        <h3>Description: {activity.description}</h3>
                                        <h3>Duration: {activity.duration}</h3>
                                        <h3>Count: {activity.count}</h3>
                                    </div>
                                    )
                            }
                            
                        </div>

                    ))
                }

            </div>

        </>
    )
}

export default Routines;