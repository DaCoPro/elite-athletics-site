import './ClientsList.css';
import ClientListItem from '../ClientListItem/ClientListItem';
import * as trainersAPI from '../../utilities/trainers-api';
import { useState, useEffect } from 'react';

export default function ClientsList({ user }) {
    const [clients, setClients] = useState([]);

    const clientList = clients.map(c =>
       
          <ClientListItem key={c._id} client={c}/>
        
    );

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
        <div>

            <h1>Clients List</h1>
            {clientList}
        </div>
    );
}