import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { FaUserAlt } from "react-icons/fa";
import { BsBasket3Fill } from "react-icons/bs";
import logo from "../assets/logo.png"
import Popup from './Popup';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonPopup , setButtonPopup] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
                  <img src={logo} alt="" width={"175px"} height={"50px"} />
      </Link>
      <div
        className="menuu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        
      </div>
      <ul className={menuOpen ? "open" : ""}>
       
          <li>
            <NavLink to="/">Ana Sayfa</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menü</NavLink>
          </li>
       
        <li>
          <NavLink to="/basket">
            <BsBasket3Fill />
          </NavLink>
        </li>
        <li className="popup-icon">

            <FaUserAlt  onClick={() => setButtonPopup(true)}> </FaUserAlt>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} ></Popup> 

        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
