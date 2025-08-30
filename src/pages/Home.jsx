import { Link } from "react-router-dom";
import { FaQrcode, FaLink, FaStar, FaHeart } from "react-icons/fa";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-icon">
              <FaStar />
            </div>
            <h1 className="hero-title">
              Bienvenido a <span className="highlight">DELFIA</span>
            </h1>
            <p className="hero-subtitle">
              Tu plataforma digital para crear códigos QR personalizados y
              conectar con tu audiencia
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon qr-icon">
              <FaQrcode />
            </div>
            <h3>Generador QR</h3>
            <p>Crea códigos QR únicos con el sello "DELFIA" en el centro</p>
            <Link to="/qr-generator" className="feature-btn">
              Crear QR
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon link-icon">
              <FaLink />
            </div>
            <h3>LinkTree</h3>
            <p>Conecta con Delfia a través de sus redes sociales y tienda</p>
            <Link to="/link" className="feature-btn">
              Ver Links
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="home-footer">
          <p>
            Hecho con <FaHeart className="heart-icon" /> para Delfia
          </p>
        </div>
      </div>

      {/* Background decorations */}
      <div className="bg-decoration bg-1"></div>
      <div className="bg-decoration bg-2"></div>
      <div className="bg-decoration bg-3"></div>
    </div>
  );
}

export default Home;
