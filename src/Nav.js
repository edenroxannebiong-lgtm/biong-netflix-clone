import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav({ setSearchQuery }) {
  const [show, handleShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setLocalSearch(query); 
    setSearchQuery(query); 
    
    if (query.length > 2) {
      console.log("Searching for:", query);
    }
  };

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
      <h1 className="nav_logo" onClick={() => window.scrollTo(0, 0)}>
        TRAILEX
      </h1>

      <div className="nav_right">
        <div className="nav_searchContainer">
          <input
            type="text"
            className="nav_search"
            placeholder="Search movies..."
            value={localSearch}
            onChange={handleSearch}
          />
        </div>

        <div className="nav_hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
        </div>
      </div>

      
      <div className={`nav_menu ${menuOpen && "active"}`}>
        <ul className="nav_menu_list">
          <li onClick={() => setMenuOpen(false)}>Trending Now</li>
          <li onClick={() => setMenuOpen(false)}>Top Rated Movies</li>
          <li onClick={() => setMenuOpen(false)}>Action Movies</li>
          <li onClick={() => setMenuOpen(false)}>Comedy Movies</li>
          <li onClick={() => setMenuOpen(false)}>Romance Movies</li>
          <li onClick={() => setMenuOpen(false)}>Horror Movies</li>
          <li onClick={() => setMenuOpen(false)}>Documentaries</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;