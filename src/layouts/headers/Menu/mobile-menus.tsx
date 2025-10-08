"use client";

import React from "react";
import Link from "next/link";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <nav className="it-main-menu-content">
      <ul>
        {menu_data.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
