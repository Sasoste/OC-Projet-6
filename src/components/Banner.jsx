// Permet de connaitre le chemin de l'URL actuellement affiché 
import { useLocation } from "react-router-dom"; 
import "../css/banner.scss";

function Banner({ imageSrc }) {
  const location = useLocation(); 

  // Si on est sur la page d'accueil, le texte apparait sur l'image
  return (
    <div className="banner">
      <img src={imageSrc} alt="Bannière" />
      <div className="overlay">
        {location.pathname === "/" && <p>Chez vous, partout et ailleurs</p>}
      </div>
    </div>
  );
}

export default Banner;
