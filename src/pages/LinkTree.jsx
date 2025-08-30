import { useState } from "react";
import {
  FaInstagram,
  FaShoppingBag,
  FaWhatsapp,
  FaHeart,
  FaStar,
} from "react-icons/fa";
import { BiStore } from "react-icons/bi";
import "../styles/LinkTree.css";

function LinkTree() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    {
      id: 1,
      title: "Instagram",
      subtitle: "@delfia_official",
      url: "https://instagram.com/delfia_official",
      icon: FaInstagram,
      color: "#E4405F",
      gradient: "linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)",
    },
    {
      id: 2,
      title: "Tienda Online",
      subtitle: "Productos exclusivos",
      url: "https://delfia-store.myshopify.com",
      icon: BiStore,
      color: "#96BF47",
      gradient: "linear-gradient(135deg, #96BF47, #7CB342)",
    },
    {
      id: 3,
      title: "WhatsApp Business",
      subtitle: "Contacto directo",
      url: "https://wa.me/1234567890",
      icon: FaWhatsapp,
      color: "#25D366",
      gradient: "linear-gradient(135deg, #25D366, #128C7E)",
    },
  ];

  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="linktree-page">
      <div className="linktree-container">
        {/* Header con foto de perfil y nombre */}
        <div className="profile-section">
          <div className="profile-image-container">
            <div className="profile-image">
              <FaStar className="sparkle-icon" />
            </div>
            <div className="profile-ring"></div>
          </div>
          <h1 className="profile-name">DELFIA</h1>
          <p className="profile-bio">✨ Creando magia digital ✨</p>
          <div className="profile-stats">
            <span className="stat">
              <FaHeart className="stat-icon" />
              <span>Fashion & Lifestyle</span>
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="links-section">
          {links.map((link) => (
            <div
              key={link.id}
              className={`link-card ${
                hoveredLink === link.id ? "hovered" : ""
              }`}
              onClick={() => handleLinkClick(link.url)}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                "--link-color": link.color,
                "--link-gradient": link.gradient,
              }}
            >
              <div className="link-icon">
                <link.icon />
              </div>
              <div className="link-content">
                <h3 className="link-title">{link.title}</h3>
                <p className="link-subtitle">{link.subtitle}</p>
              </div>
              <div className="link-arrow">→</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="footer">
          <p className="footer-text">
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

export default LinkTree;
