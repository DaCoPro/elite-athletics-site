import './NavBar.css';

import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div>
      {user ? 
        <nav className="navBar">
          
          <Link className="leftNavItem" to="/about">Elite Athletics</Link>
          <div className="rightNavItem" >
            {user.trainer ? <Link to="/trainerportal">Portal</Link> : <Link>Portal</Link>}
            <button onClick={handleLogOut}>LogOut</button>
          </div>
        </nav>
      :
        <nav className="navBar">
          <Link className="leftNavItem" to="/about">Elite Athletics</Link>
          <Link className="rightNavItem" to="/login"><button>Login</button></Link>
        </nav>
      }
    </div>
    
  );
}