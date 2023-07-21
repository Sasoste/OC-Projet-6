import "../css/header.scss";
import Logo from "../assets/kasa.png";
import Navbar from "./Navbar";

function Header() {
    return (
        <header>
        <img src={Logo} alt="logo kasa" />
        <Navbar />
        </header>
    )
}

export default Header;