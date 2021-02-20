import './ClientListItem.css';


export default function ClientListItem({ checkins, setActiveCheckins, nutritionPlans, setActiveNutritionPlans, client, activeClient, setActiveClient, activeWorkouts, setActiveWorkouts, workouts}) {
    
    async function handleClick() {
        //set "active" client to display on right panel.
        setActiveClient(client);
        //set "active" state to selected client's info.
        const userWorkouts = workouts.filter(workout => workout.user === client._id);
        setActiveWorkouts(userWorkouts);
        const userNutrition = nutritionPlans.filter(plan => plan.user === client._id);
        setActiveNutritionPlans(userNutrition);
        const userCheckins = checkins.filter(c => c.user === client._id);
        setActiveCheckins(userCheckins);

    }

    return (
        <div>
            <h2 onClick={handleClick} >{client.name}</h2>
        </div>
    )
}