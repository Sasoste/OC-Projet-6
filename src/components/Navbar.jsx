import { NavLink } from 'react-router-dom';
import "../css/navbar.scss";

function Navbar() {
  return (
    <navbar>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about">A Propos</NavLink>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
