import "../css/footer.scss";
import Logoblanc from "../assets/kasablanc.png";

function Footer() {
    return (
        <footer className="footer">
            <img src={Logoblanc} alt="logo kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer; 