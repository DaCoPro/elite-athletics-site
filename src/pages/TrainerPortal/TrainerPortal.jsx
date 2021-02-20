import './TrainerPortal.css';
import ClientsList from '../../components/ClientsList/ClientsList';
import ClientDetails from '../../components/ClientDetails/ClientDetails';
import * as trainersAPI from '../../utilities/trainers-api';
import { useState, useEffect } from 'react';

export default function TrainerPortal({ user }) {
    const [clients, setClients] = useState([]);
    const [activeClient, setActiveClient] = useState([]);
    const [activeWorkouts, setActiveWorkouts] = useState([]);

    useEffect(function() {
        async function getClients() {
            if (user) {
                const clients = await trainersAPI.getClients();
                setClients(clients);
            }
        }
        getClients();
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