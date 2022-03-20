import React, { useState, useEffect } from "react";
import CreateActivities from "./CreateActivities";


const Activities = () => {
    const [activities, setActivities] = useState("");

    const token = localStorage.getItem("userToken");

    useEffect(() => {
        const fetchActivities = async() => {
            const response = await fetch("https://fathomless-ocean-09578.herokuapp.com/api/activities")
                .then(response => response.json())
                .then(result => {
                    setActivities(result)
                })
                .catch(console.error);
        }
        fetchActivities();
    }, [])

    return (
        <>
            <div id = "logoutActivities">

                <h1>All Activities</h1>

                {
                    token ? <CreateActivities activities={activities} /> : <></>
                }

                {
                    activities.map((activity) => (
                        <div key={activity.id}>
                            <h2>{activity.name}</h2>
                            <h4>{activity.description}</h4>
                        </div>
                    ))
                }
            </div>
        </>
    )

}

export default Activities;