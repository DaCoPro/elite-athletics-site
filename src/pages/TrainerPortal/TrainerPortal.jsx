import './TrainerPortal.css';
import ClientsList from '../../components/ClientsList/ClientsList';
import ClientDetails from '../../components/ClientDetails/ClientDetails';
import * as trainersAPI from '../../utilities/trainers-api';
import * as workoutsAPI from '../../utilities/workouts-api';
import * as checkinAPI from '../../utilities/checkin-api';
import * as nutritionAPI from '../../utilities/nutrition-api';
import { useState, useEffect } from 'react';

export default function TrainerPortal({ user }) {
    //Initialize all client state here
    const [clients, setClients] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    const [checkins, setCheckins] = useState([]);
    const [nutritionPlans, setNutritionPlans] = useState([]);
    const [activeClient, setActiveClient] = useState([]);
    const [activeWorkouts, setActiveWorkouts] = useState([]);
    const [activeCheckins, setActiveCheckins] = useState([]);
    const [activeNutritionPlans, setActiveNutritionPlans] = useState([]);

    //On Load, querry all data about clients from the DB
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
                    checkins={checkins}
                    setActiveCheckins={setActiveCheckins}
                    nutritionPlans={nutritionPlans}
                    setActiveNutritionPlans={setActiveNutritionPlans}
                />
            </div>
            <div className="clientDetail">
                
                <ClientDetails 
                    activeClient={activeClient}
                    activeWorkouts={activeWorkouts}
                    activeNutritionPlans={activeNutritionPlans}
                    activeCheckins={activeCheckins}
                />   
            </div>
        </div>
    )
}