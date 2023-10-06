import React, { useState } from "react";

// ICONS
import * as LuIcon from "react-icons/lu";
import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./SideNavBar.css";

export default function SideBarNav() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <IconContext.Provider value={{ color: "#FDF5E6" }}>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <Link to="/">
          <div className="logoContainer">
            <p>Culinary Kickstart</p>
          </div>
        </Link>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}
