import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { useRef } from "react"; // Importar useRef

export const Navbar = () => {
  const navRef = useRef(); // Usar useRef en lugar de useNavigate

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Logo</h3>
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
