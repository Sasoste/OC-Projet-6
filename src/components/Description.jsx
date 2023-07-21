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
    <>
      <Carrousel />
      <div classname="leftBlock">
        <h1 className="title">{item.title}</h1>
        <p className="location">{item.location}</p>
        <p className="tags">{item.tags}</p>
      </div>
      <div className="rightBlock">
        <p className="hostName">{item.host.name}</p>
        <img className="hostImage" src={item.host.picture}/>
        <Rating />
      </div>
      <div className="collapseBlock">
        <Collapse title="Description" content={item.description} />
        <Collapse title="Équipements" content={item.equipments} />
      </div>
    </>
  );
}

export default Description;