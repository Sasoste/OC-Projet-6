import { useParams, Navigate } from "react-router-dom";
import "../css/description.scss";
import Collapse from "./Collapse.jsx";
import Carrousel from "./Carrousel.jsx";
import Rating from "./Rating";
import Logements from "../logements.json";

function Description() {
  const { id } = useParams();
  const item = Logements.find((item) => item.id === id);

  if (!item) {
    return <Navigate to="/error" />;
  }

  const firstName = item.host.name.split(" ")[0];
  const lastName = item.host.name.split(" ").slice(1).join(" ");

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
