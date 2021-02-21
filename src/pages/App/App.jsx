import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import TrainerPortal from '../TrainerPortal/TrainerPortal';
import ClientPortal from '../ClientPortal/ClientPortal';
import About from '../About/About';
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
          <Route path="/trainerportal">
            <TrainerPortal user={user}/>
          </Route>
          <Route path="/clientportal">
            <ClientPortal user={user}/>
          </Route>
          <Route path="/login">
            <AuthPage setUser={setUser}/>
          </Route>
          <Redirect to="/about" />
        </Switch>
      </>
    </main>
  );
}

