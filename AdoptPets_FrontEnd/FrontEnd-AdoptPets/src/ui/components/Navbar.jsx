import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { useRef } from "react"; // Importar useRef
import logo from "../img/logo.png"

export const Navbar = () => {
  const navRef = useRef(); // Usar useRef en lugar de useNavigate

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="logo-container">
        <img src={logo} className="logo-image"/>
      <h3>AdoptPets</h3>
      </div>
      {/* Establecer ref en el elemento nav */}
      <nav ref={navRef}>
        <NavLink
          className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
          to="/solicitud"
        >
          Solicitud
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
          to="/adopciones"
        >
          Adopciones
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
          to="/contact"
        >
          Contact Us
        </NavLink>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
