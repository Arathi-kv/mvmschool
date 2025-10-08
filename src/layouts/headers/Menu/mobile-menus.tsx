"use client";

import React from "react";
import Link from "next/link";
import menu_data from "./menu-data";

const MobileMenus = () => {
  return (
    <nav className="it-menu-content">
      <ul>
        {menu_data.map((menu, index) => (
          <li key={index}>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenus;
