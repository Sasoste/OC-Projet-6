// déclare variable d'état et fonction pour mettre à jour 
import { useState } from "react";
// accéder aux paramètres de l'URL
import { useParams } from "react-router-dom";
import Logements from "../logements.json";
import "../css/carrousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Carrousel() {
  // on récupère l'id depuis les paramètres de l'URL 
  const { id } = useParams();
  // on recherche l'item dans le tableau qui correspond à l'id récupéré. 
  const item = Logements.find((item) => item.id === id);
  // initialisation d'index à 0 
  const [index, setIndex] = useState(0);

  const length = item.pictures.length;

  // fonction pour aller sur l'image précédente 
  function handlePrevious() {
    if (index === 0) {
      setIndex(length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  // fonction pour aller sur l'image suivante
  function handleNext() {
    if (index === length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="carousel">
      <div className="overlay">
        {length > 1 && (
        <button className="leftButton" onClick={handlePrevious}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        )}
        <img src={item.pictures[index]} alt={item.title} />
        {length > 1 && (
        <button className="rightButton" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        )}
        {length > 1 && (
        <p className="counter">
          {index + 1} / {length}
        </p>
        )}
      </div>
    </div>
  );
}

export default Carrousel;
