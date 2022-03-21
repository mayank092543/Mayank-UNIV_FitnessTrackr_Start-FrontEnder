import React, {useState, useEffect} from "react";

const Home = () => {
    const [homeRoutines, setHomeRoutines] = useState([])

    useEffect(() => {
        const fetchRoutines = async() => {
            const response = await fetch("https://fitnesstrac-kr.herokuapp.com/api/routines")
                .then(response => response.json())
                .then(result => {
                    setHomeRoutines(result)
                })
                .catch(console.error)
        }
        fetchRoutines()
    }, [])

    return (
        <div id = "welcomePage">
            <h2 id="welcome-title">Welcome to the Fitness Tracker App</h2>

            {
                    homeRoutines.map((routine) => (
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
                            
                        </div>

                    ))
                }
        </div>
    )
}

export default Home;