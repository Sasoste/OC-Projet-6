import "../css/home.scss";
import Banner from "../components/Banner.jsx";
import Gallery from "../components/Galerie.jsx";
import BannerHome from "../assets/mer.png";

function Home() {
  return (
    <div className="home">
      <Banner 
        imageSrc={BannerHome}  
      />
      <Gallery />
    </div>
  );
}

export default Home;
