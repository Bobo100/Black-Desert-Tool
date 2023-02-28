import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/navbar.css"
export function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="website-name">
            首頁
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                // d="active"
                className="nav-links"
                onClick={handleClick}
              >
                料理
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/enhanched"
                // d="active"
                className="nav-links"
                onClick={handleClick}
              >
                衝裝機率
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

// export default NavBar;