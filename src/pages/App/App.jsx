import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import TrainerPortal from '../TrainerPortal/TrainerPortal';
import About from '../About/About';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import ClientsPage from '../ClientsPage/ClientsPage';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <>
        <NavBar  user={user} setUser={setUser} />
        <Switch>
          <Route path="/about">
            <About user={user}/>
          </Route>
          <Route path="/clients">
            <ClientsPage user={user}/>
          </Route>
          <Route path="/trainerportal">
            <TrainerPortal user={user}/>
          </Route>
          <Route path="/login">
            <AuthPage />
          </Route>
          <Redirect to="/about" />
        </Switch>
      </>
    </main>
  );
}

