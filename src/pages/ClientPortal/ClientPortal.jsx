import './ClientPortal.css';
import * as workoutsAPI from '../../utilities/workouts-api';
import * as checkinAPI from '../../utilities/checkin-api';
import * as nutritionAPI from '../../utilities/nutrition-api';
import { useState, useEffect } from 'react';

export default function ClientPortal({ user }) {
    const [myWorkoutPlans, setMyWorkoutPlans] = useState([]);
    const [myNutritionPlans, setMyNutritionPlans] = useState([]);
    const [myCheckins, setMyCheckins] = useState([]);

    // On Load, querry all data about clients from the DB
    useEffect(function() {
        async function getMyData() {
            if (user) {
                const myWorkouts = await workoutsAPI.getAll();
                setMyWorkoutPlans(myWorkouts);
                const myCheckins = await checkinAPI.getAll();
                setMyCheckins(myCheckins);
                const myNutritionPlans = await nutritionAPI.getAll();
                setMyNutritionPlans(myNutritionPlans);
            }
        }
        getMyData();
    }, [user]);

    
    
    return (
        <div className="clientPortal">
            <h1>Welcome to the Client Portal!</h1>
            {myWorkoutPlans.length ? <h4>{myWorkoutPlans[0].name}</h4> : null}
            {myNutritionPlans.length ? <h4>{myNutritionPlans[0].name}</h4> : null}
            {myCheckins.length ? <h4>{myCheckins[0].name}</h4> : null}
        </div>
    )
}