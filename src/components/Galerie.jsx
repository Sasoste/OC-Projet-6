import Logements from "../logements.json";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="gallery">
      {Logements.map((logement) => (
        <div key={logement.id}>
          <Link to={`/logement/${logement.id}`}>
            <img src={logement.cover} alt={logement.title} />
          </Link>
          <p>{Logements.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
