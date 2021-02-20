

export default function ClientListItem({ client, activeClient, setActiveClient, activeWorkouts, setActiveWorkouts}) {
    
    function handleClick() {
        setActiveClient(client);
        //get all workouts from DB that match user's ID
        //set active as that user's
        //repeat for nutrition & Check-in information
    }
    return (
        <h2 onClick={handleClick} >{client.name}</h2>
    )
}