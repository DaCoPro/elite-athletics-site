import { useState, useEffect } from 'react';
import * as workoutsAPI from '../../utilities/workouts-api';


export default function ClientListItem({ client, activeClient, setActiveClient, activeWorkouts, setActiveWorkouts, workouts}) {
    
    async function handleClick() {
        setActiveClient(client);
        //filter workouts by user ID, resulting list is active (relevent to selected) workouts
        const userWorkouts = workouts.filter(workout => workout.user === client._id)
        setActiveWorkouts(userWorkouts);
    }
    return (
        <div>

            <h2 onClick={handleClick} >{client.name}</h2>
        </div>
    )
}