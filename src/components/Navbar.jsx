import { Link } from 'react-router-dom';
import "../css/navbar.scss";

function Navbar() {
  return (
    <navbar>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A Propos</Link>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
