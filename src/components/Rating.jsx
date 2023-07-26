import { useParams } from "react-router-dom";
import "../css/rating.scss";
import Logements from "../logements.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


// on utilise useParams pour récupérer l'id qui est dans l'url, et on utilise l'id pour récupérer le rating du logement
function Rating() {
  const { id } = useParams();
  const item = Logements.find((item) => item.id === id);
  const rating = item.rating;

  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} className="active" />);
  }
  for (let i = rating; i < 5; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }
  return (
        <div className="rating">
            {stars}
        </div>
    )
}

export default Rating;