import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
// déclare variable d'état pour gérer l'état du composant avec la fonction appropriée
import { useState } from "react";
import "../css/collapse.scss";

function Collapse({ title, content }) {
  // variable d'état initialisé sur false pour que le contenu soit caché 
  const [isCollapsed, setIsCollapsed] = useState(false);

  // fonction pour changer la valeur de la variable isCollapsed (ouvert/fermé)
  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="wrapper">
      <div className="title" onClick={toggleCollapse}>
        {title}
        <FontAwesomeIcon icon={isCollapsed ? faChevronDown : faChevronUp} />
      </div>
      <div className={`content ${isCollapsed ? "collapsed" : ""}`}>
        <div className="contentStyle">{content}</div>
      </div>
    </div>
  );
}
export default Collapse;
