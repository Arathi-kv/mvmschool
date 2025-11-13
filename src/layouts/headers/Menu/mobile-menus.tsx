"use client";

import React, { useState } from "react";
import Link from "next/link";
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  const toggleSubMenu = (index: number) => {
    if (openMenus.includes(index)) {
      setOpenMenus(openMenus.filter((i) => i !== index));
    } else {
      setOpenMenus([...openMenus, index]);
    }
  };

  return (
    <nav className="it-menu-content">
      <ul className="mobile-main-menu">
        {menu_data.map((menu, index) => (
          <li
            key={index}
            className={`mobile-menu-item ${menu.submenu ? "has-submenu" : ""}`}
          >
            <div className="menu-item-header">
              <Link href={menu.link}>{menu.title}</Link>

              {menu.submenu && (
                <button
                  className="submenu-toggle"
                  onClick={() => toggleSubMenu(index)}
                >
                  {openMenus.includes(index) ? "−" : "+"}
                </button>
              )}
            </div>

            {menu.submenu && openMenus.includes(index) && (
              <ul className="mobile-submenu">
                {menu.submenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link href={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .mobile-main-menu {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .mobile-menu-item {
          border-bottom: 1px solid #eee;
        }
        .menu-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
        }
        .submenu-toggle {
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          line-height: 1;
        }
        .mobile-submenu {
          list-style: none;
          padding-left: 15px;
          margin: 5px 0 10px;
        }
        .mobile-submenu li {
          padding: 5px 0;
        }
      `}</style>
    </nav>
  );
};

export default MobileMenus;
