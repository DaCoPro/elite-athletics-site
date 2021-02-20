import './ClientDetails.css';
import { useState, useEffect } from 'react';
import * as workoutsAPI from '../../utilities/workouts-api';

export default function ClientDetails({ activeNutritionPlans, activeCheckins, activeClient, activeWorkouts }) {
    //select a workout from "active" array to be able to render
    const currentWorkoutPlan = activeWorkouts[0];
    const currentNutritionPlan = activeNutritionPlans[0];
    const currentCheckin = activeCheckins[0];

    return (
        <div>
            {activeClient ? <h1>{activeClient.name}</h1> : null}
            {currentWorkoutPlan ? <h4>{currentWorkoutPlan.name}</h4> : null}
            {currentNutritionPlan ? <h4>{currentNutritionPlan.name}</h4> : null}
            {currentCheckin ? <h4>{currentCheckin.name}</h4>  : null}
            
          
        </div>

    )
}