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
        
        <div className="nav-links">
          <Link 
            to="/qr-generator" 
            className={`nav-link ${location.pathname === '/qr-generator' ? 'active' : ''}`}
          >
            <FaQrcode className="nav-icon" />
            <span>QR Generator</span>
          </Link>
          
          <Link 
            to="/link" 
            className={`nav-link ${location.pathname === '/link' ? 'active' : ''}`}
          >
            <FaLink className="nav-icon" />
            <span>Links</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
