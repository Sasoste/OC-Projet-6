import Logements from "../logements.json";
import { Link } from "react-router-dom";
import "../css/galerie.scss";

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
