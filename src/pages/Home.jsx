import "../css/home.scss";
import Banner from "../components/Banner.jsx";
import Gallery from "../components/Galerie.jsx";


function Home() {
  return (
    <div className="home">
      <Banner />
      <Gallery />
    </div>
  );
}

export default Home;
