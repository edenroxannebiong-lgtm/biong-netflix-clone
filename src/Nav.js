import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      {/* Logo on the left */}
      <h1 className="nav_logo">TRAILEX</h1>

      {/* Hamburger on the right */}
      <div className="nav_hamburger" onClick={() => console.log("Menu clicked")}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Nav;