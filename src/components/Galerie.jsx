import Logements from "../logements.json";
import { Link } from "react-router-dom";
import "../css/galerie.scss";

function Gallery() {
  return (
    <div className="gallery">
      {Logements.map((logement) => (
        <Link to={`/logement/${logement.id}`}>
          <div key={logement.id} className="card">
             <img src={logement.cover} alt={logement.title} />
            <p className="cardTitle">{logement.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
