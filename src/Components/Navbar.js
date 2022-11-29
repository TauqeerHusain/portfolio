import React from "react";
import "../Styles/Navbar.css";
import Toggle from "./Toggle";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <div className="navbarLeft">
        <div className="navbarName">Tauqeer</div>
        <span>
          <Toggle />
        </span>
      </div>
      <div className="navbarRight">
        <div className="navbarList">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
