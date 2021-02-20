import './ClientsList.css';
import ClientListItem from '../ClientListItem/ClientListItem';


export default function ClientsList({ checkins, setActiveCheckins, nutritionPlans, setActiveNutritionPlans, user, clients, activeClient, setActiveClient, activeWorkouts, setActiveWorkouts, workouts }) {
    
    const clientList = clients.map(c =>
        <ClientListItem 
            key={c._id} 
            client={c} 
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
            
    );

    return (
        <div>

            <h1>Clients List</h1>
            {clientList}
        </div>
    );
}