import { async } from "q";
import React, { useState } from "react";

const CreateActivities = ({ activities, setActivities }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleActivitiesSubmit = async(event) => {
        event.preventDefault()

        const token = localStorage.getItem("userToken")

        console.log(name)
        console.log(description)

        const existingActivity = activities.filter((activity => activity.name))
        console.log(existingActivity)

        if(existingActivity !== name) {
            const response = await fetch(" http://fitnesstrac-kr.herokuapp.com/api/activities", {
                method: "POST",
                headers: {
                    "Content-Type" : "Application/json",
                    "Authorization" : `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: name,
                    description: description
                })
            }).then(response => response.json())
              .then(result => {
                  console.log(result);
                  setActivities([result, ...activities])
              })
              .catch(console.error)
        } else {
            alert("An activity with this name already exists") 
        }

        setName("")
        setDescription("")
    }

    return (
        <>
            <h1 id = "myactivities">Create your own Activities</h1>

            <form onSubmit = {handleActivitiesSubmit}>

                <label htmlFor="nameOfActivity">Name: </label>
                <input type = "text" placeholder = "Name your Activity"
                       value = {name}
                       onChange = {(event) => {setName(event.target.value)}}>
                </input>

                <label htmlFor="descriptionOfActivity">Description: </label>
                <input type = "text" placeholder = "Description of your Activity"
                       value = {description}
                       onChange = {(event) => {setDescription(event.target.value)}}>
                </input>

                <button tpye = "submit">Submit</button>

            </form>
        </>
    )
}

export default CreateActivities;
