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
        <header>
            <h3> Logo</h3>
            <nav ref={NavLink}>
                <NavLink
                className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/solicitud"
                    >
                        Solicitud
                </NavLink>
                <NavLink
                className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/home"
                    >
                        Home
                </NavLink>
             
                <NavLink
                className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/adopciones"
                    >
                      Adopciones
                </NavLink>
                <NavLink
                className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/contact"
                    >
                        Contact Us
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

