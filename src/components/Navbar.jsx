import { Link } from 'react-router-dom';
import "../css/navbar.scss";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
