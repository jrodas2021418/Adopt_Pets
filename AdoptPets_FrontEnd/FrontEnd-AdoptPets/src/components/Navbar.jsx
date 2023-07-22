import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import  "../styles/NavBar.css"

function Navbar(){

    const navRef = useRef();

    const showNavbar = ()=>{
         navRef.current.classList.toggle("responsive_nav")
    }

    return(
        <header>
            <h3> Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Solicitud</a>
                <a href="/#">Adopciones</a>
                <a href="/#">Contact Us</a>
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

export default Navbar;