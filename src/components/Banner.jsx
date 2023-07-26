// Permet de connaitre le chemin de l'URL actuellement affiché 
import { useLocation } from "react-router-dom"; 
import BannerHome from "../assets/mer.png";
import BannerAbout from "../assets/montagne.png";
import "../css/banner.scss";

function Banner() {
  // Objet qui contient informations de l'URL
  const location = useLocation(); 
  let imageSrc = BannerHome; 

  // Si on est sur la page à propos : l'image change
  if (location.pathname === "/about") { 
    imageSrc = BannerAbout;
  }

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
