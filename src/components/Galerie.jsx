import Logements from "../logements.json";
// on importe Link pour faire des liens de navigations
import { Link } from "react-router-dom";
import "../css/galerie.scss";

// on utilise map pour parcourir logements.json et renvoyer les données qu'on vient chercher dans la méthode
function Gallery() {
  return (
    <div className="gallery">
      {Logements.map((logement) => (
        <Link key={logement.id} to={`/logement/${logement.id}`}>
          <div  className="card">
             <img src={logement.cover} alt={logement.title} />
            <p className="cardTitle">{logement.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
