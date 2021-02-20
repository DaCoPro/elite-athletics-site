import ClientsList from '../../components/ClientsList/ClientsList';


export default function TrainerPortal({ user }) {
    return (
        <div>
            
            <ClientsList user={user}/>
        </div>
    )
}