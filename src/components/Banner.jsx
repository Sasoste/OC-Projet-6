import { useLocation } from "react-router-dom";
import BannerHome from "../assets/mer.png";
import BannerAbout from "../assets/montagne.png";

function Banner() {
  const location = useLocation();
  let imageSrc = BannerHome;

  if (location.pathname === "/about") {
    imageSrc = BannerAbout;
  }

  return (
    <div>
      <img src={imageSrc} alt="Bannière" />
      {location.pathname === "/" && <p>Chez vous, partout et ailleurs</p>}
    </div>
  );
}

export default Banner;
