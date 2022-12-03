import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header1() {
  return (
    <div className="header_nav">
      <NavLink to={"/"} end className="nav_link">
        <p>_Home_</p>
      </NavLink>
      <NavLink to={"/favt"} className="nav_link">
        <p>_Favourites_</p>
      </NavLink>
    </div>
  );
}

export default Header1;
