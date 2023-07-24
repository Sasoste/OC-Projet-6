import { useLocation } from "react-router-dom";
import BannerHome from "../assets/mer.png";
import BannerAbout from "../assets/montagne.png";
import "../css/banner.scss";

function Banner() {
  const location = useLocation();
  let imageSrc = BannerHome;

  if (location.pathname === "/about") {
    imageSrc = BannerAbout;
  }

  return (
    <div className="banner">
      <img src={imageSrc} alt="Bannière" />
      <div className="overlay">
        {location.pathname === "/" && <p>Chez vous, partout et ailleurs</p>}
      </div>
    </div>
  );
}

export default Banner;
