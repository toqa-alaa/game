import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import './PageNav.css'

function PageNav() {
  return (
    <div className="header-wrapper">
      <nav className="navbar">
        <div className="container">
          <ul className="nav-links">
      
            
            <li>
              <Link to="/read">Read</Link>
            </li>
            <li>
              <Link to="/watch">Watch</Link>
            </li>
            <li>
              <Link to="/play">Play</Link>
            </li>
          </ul>

          <div className="logo-container">
            <Logo />
          </div>

          <div className="right-section">
            <Link to="/marketplace" className="marketplace-link ">
              Marketplace
            </Link>
            <Link className="connect">        
                <img src=".\src\assets\connect Wallet.svg" alt="connect wallet" />

           </Link>
          </div>
        </div>
      </nav>
      <div className="text-center me-5 pe-5">
        <img src=".\src\assets\Group 4.png"  /></div>
    
            <div className="flick"></div>
 
    </div>

  );
}

export default PageNav;
