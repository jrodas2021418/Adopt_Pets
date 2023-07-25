import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import  "../styles/NavBar.css"
import { Link, NavLink,useNavigate } from "react-router-dom";
export const Navbar=()=>{

    const navRef = useNavigate();

    const showNavbar = ()=>{
         navRef.current.classList.toggle("responsive_nav")
    }

    return(
        <header className="Header1">
            <h3 className="NavBar"> Logo</h3>
            <nav className="NavBar" ref={NavLink}>
                <NavLink
                className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/solicitud"
                    >
                        Solicitud
                </NavLink>
                <NavLink
                className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Home"
                    >
                        Home
                </NavLink>
             
                <NavLink
                className=  { ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/adopcion"
                    >
                      Adopciones
                </NavLink>
                <NavLink
                className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/contact"
                    >
                        Contact Us
                </NavLink>
                <NavLink
                className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/comentario"
                    >
                        Comentarios
                </NavLink>
                <button className="nav-btn  nav-close-btn" onClick={showNavbar} >
                   <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

