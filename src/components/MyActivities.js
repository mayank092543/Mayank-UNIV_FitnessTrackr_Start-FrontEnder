import { async } from "q";
import React, { useState } from "react";

const MyActivities = ({ activities }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleActivitiesSubmit = async(event) => {
        event.preventDefault()

        const existingActivity = activities.filter((activity => activity.name))

        if(existingActivity !== name) {
            const response = await fetch("https://fathomless-ocean-09578.herokuapp.com/api/activities", {
                method: "POST",
                headers: {
                    "Content-Type" : "Application/json",

                },
                body: JSON.stringify({
                    name: name,
                    description: description
                })
            }).then(response => response.json())
              .then(result => {
                  console.log(result);
              })
              .catch(console.error)
        } else {
            alert("This activity is already exist")
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