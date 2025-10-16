import { Link, useLocation } from "react-router-dom";
import { FaQrcode, FaLink } from "react-icons/fa";
import "../styles/Navigation.css";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">DELFIA</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
