import './TrainerPortal.css';
import ClientsList from '../../components/ClientsList/ClientsList';
import ClientDetails from '../../components/ClientDetails/ClientDetails';
import * as trainersAPI from '../../utilities/trainers-api';
import * as workoutsAPI from '../../utilities/workouts-api';
import * as checkinAPI from '../../utilities/checkin-api';
import * as nutritionAPI from '../../utilities/nutrition-api';
import { useState, useEffect } from 'react';

export default function TrainerPortal({ user }) {
    const [clients, setClients] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    const [checkins, setCheckins] = useState([]);
    const [nutritionPlans, setNutritionPlans] = useState([]);

    const [activeClient, setActiveClient] = useState([]);
    const [activeWorkouts, setActiveWorkouts] = useState([]);
    const [activeCheckins, setActiveCheckins] = useState([]);
    const [activeNutritionPlans, setActiveNutritionPlans] = useState([]);

    //get all users that aren't trainers on load
    useEffect(function() {
        async function getData() {
            if (user) {
                const clients = await trainersAPI.getClients();
                setClients(clients);
                const workouts = await workoutsAPI.getAll();
                setWorkouts(workouts);
                const checkins = await checkinAPI.getAll();
                setCheckins(checkins);
                const nutritionPlans = await nutritionAPI.getAll();
                setNutritionPlans(nutritionPlans);
            }
        }
        getData();
    }, [user]);
    
    //get all workout plans on load (will repeat for nutrition and checkins)
    // useEffect(function() {
    //     async function getWorkouts() {
    //         if (user) {
    //             const workouts = await workoutsAPI.getAll();
    //             setWorkouts(workouts);
    //         }
            
    //     }
    //     getWorkouts();
    // }, [user]);
    console.log(nutritionPlans)
    console.log(checkins)
    return (
        <div className="trainerPortal">
            <div className="clientIndex">
                <ClientsList 
                    user={user} 
                    clients={clients} 
                    activeClient={activeClient}
                    setActiveClient={setActiveClient}
                    activeWorkouts={activeWorkouts}
                    setActiveWorkouts={setActiveWorkouts}
                    workouts={workouts}
                />
            </div>
            <div className="clientDetail">
                
                <ClientDetails 
                    activeClient={activeClient}
                    activeWorkouts={activeWorkouts}
                    setActiveWorkouts={setActiveWorkouts}
                />   
            </div>
        </div>
    )
}