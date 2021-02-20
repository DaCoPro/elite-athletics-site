import './ClientDetails.css';
import { useState, useEffect } from 'react';
import * as workoutsAPI from '../../utilities/workouts-api';

export default function ClientDetails({ activeClient }) {
    
    
    

    return (
        <div>
            {activeClient ? <h1>{activeClient.name}</h1> : null}

        </div>

    )
}