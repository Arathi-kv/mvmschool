"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");

  const openMobileMenu = (menu: string) => {
    setNavTitle(navTitle === menu ? "" : menu);
  };

  return (
    <nav className="it-menu-content">
      <ul>
        {menu_data.map((menu, menu_index) => (
          <React.Fragment key={menu_index}>
            {/* Image Dropdown */}
            {menu.img_dropdown && (
              <li
                className={`has-dropdown ${navTitle === menu.title ? "dropdown-opened" : ""}`}
              >
                <Link
                  href="#"
                  className={navTitle === menu.title ? "expanded" : ""}
                >
                  {menu.title}
                  <button
                    onClick={() => openMobileMenu(menu.title)}
                    className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}
                  >
                    <i className="fal fa-angle-right"></i>
                  </button>
                </Link>
                {/* Submenus removed because menu_data has none */}
                <div
                  className="it-submenu submenu has-home-img"
                  style={{ display: navTitle === menu.title ? "block" : "none" }}
                >
                  <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
                    {/* No sub_menus to render */}
                  </div>
                </div>
              </li>
            )}

            {/* Standard Dropdown */}
            {menu.has_dropdown && (
              <li
                className={`has-dropdown ${navTitle === menu.title ? "dropdown-opened" : ""}`}
              >
                <Link
                  href={menu.link}
                  className={navTitle === menu.title ? "expanded" : ""}
                >
                  {menu.title}
                  <button
                    onClick={() => openMobileMenu(menu.title)}
                    className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}
                  >
                    <i className="fal fa-angle-right"></i>
                  </button>
                </Link>
                <ul
                  className="submenu it-submenu"
                  style={{ display: navTitle === menu.title ? "block" : "none" }}
                >
                  {/* No sub_menus to render */}
                </ul>
              </li>
            )}

            {/* Normal Menu Item */}
            {!menu.has_dropdown && !menu.img_dropdown && (
              <li>
                <Link href={menu.link}>{menu.title}</Link>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenus;
