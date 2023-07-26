import { useParams, Navigate } from "react-router-dom";
import "../css/description.scss";
import Collapse from "./Collapse.jsx";
import Carrousel from "./Carrousel.jsx";
import Rating from "./Rating";
import Logements from "../logements.json";

function Description() {
  // on récupère l'id du logement grâce à l'url 
  const { id } = useParams();
  const item = Logements.find((item) => item.id === id);

  // si aucun logement trouvé on renvoie sur la page erreur
  if (!item) {
    return <Navigate to="/error" />;
  }

  // On sépare le nom du prénom pour l'affichage
  const firstName = item.host.name.split(" ")[0];
  const lastName = item.host.name.split(" ")[1];

  return (
    <div className="description">
      <Carrousel />

      <div className="block">
        <div className="leftBlock">
          <h1 className="title">{item.title}</h1>
          <p className="location">{item.location}</p>
          <div className="tags">
            {item.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rightBlock">
          <div className="host">
            <p className="hostName">
              {firstName} <br />
              {lastName}
            </p>
            <img className="hostImage" src={item.host.picture} alt="host" />
          </div>
          <Rating />
        </div>
      </div>

      <div className="collapseBlock">
        <Collapse title="Description" content={item.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {item.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Description;
