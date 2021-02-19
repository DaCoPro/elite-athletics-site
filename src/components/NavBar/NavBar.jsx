import './NavBar.css';

import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="navBar">
      {user ? 
        <nav>
          <Link to="/about">Elite Athletics</Link>
          {user.trainer ? <Link to="/trainerportal">Portal</Link> : <Link>Portal</Link>}
          <button onClick={handleLogOut}>LogOut</button>
        </nav>
      :
        <nav>
          <Link to="/about">Elite Athletics</Link>
          <Link to="/login"><button>Login</button></Link>
        </nav>
      }
    </div>
    
  );
}