import { useState } from "react";
import { useParams } from "react-router-dom";
import Logements from "../logements.json";
import "../css/carrousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Carrousel() {
  const { id } = useParams();
  const item = Logements.find((item) => item.id === id);

  const [index, setIndex] = useState(0);

  const length = item.pictures.length;

  function handlePrevious() {
    if (index === 0) {
      setIndex(length - 1);
    } else {
      setIndex(index - 1);
    }
  }

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
        <button className="leftButton" onClick={handlePrevious}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <img src={item.pictures[index]} alt={item.title} />
        <button className="rightButton" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <p className="counter">
          {index + 1} / {length}
        </p>
      </div>
    </div>
  );
}

export default Carrousel;
