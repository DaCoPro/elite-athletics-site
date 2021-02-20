import './ClientsList.css';
import ClientListItem from '../ClientListItem/ClientListItem';


export default function ClientsList({ user, clients, activeClient, setActiveClient, activeWorkouts, setActiveWorkouts }) {
    
    const clientList = clients.map(c =>
          <ClientListItem key={c._id} client={c} activeClient={activeClient} setActiveClient={setActiveClient} activeWorkouts={activeWorkouts} setActiveWorkouts={setActiveWorkouts} />
    );

    return (
        <div>

            <h1>Clients List</h1>
            {clientList}
        </div>
    );
}