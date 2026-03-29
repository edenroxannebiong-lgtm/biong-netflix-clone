import React, { useState,useEffect } from "react";
import './Nav.css';

function Nav() {
    const [show, handleShow] = React.useState(false);

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
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Netflix_Logo.svg"
                alt="Netflix Logo"
            />
            <img
                className="nav_avatar"
                src="https://i.pravatar.cc/100"
                alt="Avatar"
            />
        </div>
    );
}

export default Nav;
