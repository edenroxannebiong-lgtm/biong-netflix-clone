import React, { useState,useEffect } from "react";
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
                return () => {
                    window.removeEventListener("scroll");
                };
            }
        });
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"    
                alt="Netflix Logo"
            />
            <img
                className="nav_menu"
                src="https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg"
                alt="Menu"
            />
        </div>
    );
}

export default Nav;
