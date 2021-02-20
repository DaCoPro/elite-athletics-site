import './ClientDetails.css';
import { useState, useEffect } from 'react';
import * as workoutsAPI from '../../utilities/workouts-api';

export default function ClientDetails({ activeClient, activeWorkouts }) {
    
    
    // console.log(activeWorkouts)
    // console.log(active)

    return (
        <div>
            {activeClient ? <h1>{activeClient.name}</h1> : null}
            

        </div>

    )
}