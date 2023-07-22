import { useParams, Navigate } from "react-router-dom";
import "../css/description.scss";
import Collapse from "./Collapse";
import Carrousel from "./Carrousel";
import Rating from "./Rating";
import Logements from "../logements.json";

function Description() {
  const { id } = useParams();
  const item = Logements.find((item) => item.id === id);

  if (!item) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="description">
      <Carrousel />
      <div className="block">
        <div className="leftBlock">
          <h1 className="title">{item.title}</h1>
          <p className="location">{item.location}</p>
          <p className="tags">{item.tags}</p>
          <Collapse title="Description" content={item.description} />
        </div>
        <div className="rightBlock">
          <div className="host">
            <p className="hostName">{item.host.name}</p>
            <img className="hostImage" src={item.host.picture} alt="host" />
          </div>
          <Rating />
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
    </div>
  );
}

export default Description;
