import React from "react";
import {
  FaHome,
  FaTshirt,
  FaShoePrints,
  FaWallet,
  FaHamburger,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Dropdown } from "bootstrap";

const Navbar = () => {
  const styleIcons = {
    // color: "white",
    fontSize: "20px",
  };

  function peeker() {
    alert("This is not working.");
  }
  function peekera() {
    alert("This is not working too.");
  }
  function peekerb() {
    alert("ok, does this work? No.");
  }
  function peekerc() {
    alert("Oh my everything here does not work.");
  }

  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark py-2">
      <Link to="/bright-and-shine" className="navbar-brand mx-3 dancing-script">
        <span>Bright & Shine Collection</span>
      </Link>
      <button
        className="navbar-toggler shadow-none mx-2 border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span>
          <FaHamburger style={styleIcons} />
        </span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="collapsibleNavbar"
      >
        <div>
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link to="/bright-and-shine" className="nav-link">
                <FaHome style={styleIcons} /> HOME
              </Link>
            </li>
            <li className="nav-item mx-2 dropdown">
              <a href="#" className="nav-link" data-bs-toggle="dropdown">
                <FaTshirt style={styleIcons} /> CLOTHES
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="suits">
                  Suits
                </Link>
                <a className="dropdown-item" href="#" onClick={peeker}>
                  Shirts
                </a>
                <a className="dropdown-item" href="#" onClick={peekera}>
                  Trousers
                </a>
                <Link className="dropdown-item" to="dress">
                  Dress
                </Link>
                <a className="dropdown-item" href="#" onClick={peekerc}>
                  Jeans (Men & Women)
                </a>
              </div>
            </li>
            <li className="nav-item mx-2 dropdown">
              <a href="#" className="nav-link" data-bs-toggle="dropdown">
                <FaShoePrints style={styleIcons} /> SHOES
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="officialshoes">
                  Official Shoes
                </Link>
                <a className="dropdown-item" href="#" onClick={peekera}>
                  Fashion (Men & Women)
                </a>
              </div>
            </li>
            <li className="nav-item mx-2 dropdown">
              <a href="#" className="nav-link" data-bs-toggle="dropdown">
                <FaWallet style={styleIcons} /> ACCESSORIES
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#" onClick={peekerb}>
                  Wallets
                </a>
                <Link className="dropdown-item" to="watches">
                  Watches
                </Link>
                <a className="dropdown-item" href="#" onClick={peekerc}>
                  Belts
                </a>
                <a className="dropdown-item" href="#" onClick={peeker}>
                  Necklaces
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
