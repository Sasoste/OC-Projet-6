import { NavLink } from 'react-router-dom';
import "../css/navbar.scss";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={(nav) => (nav.isActive ? "active-style" : 'none')}>Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={(nav) => (nav.isActive ? "active-style" : 'none')}>A Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
