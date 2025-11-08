import React from "react";
import Link from "next/link";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <ul className="main-menu">
      {menu_data.map((item) => (
        <li
          key={item.id}
          className={`menu-item ${item.submenu ? "has-dropdown" : ""}`}
        >
          <Link href={item.link}>{item.title}</Link>

          {/* Render submenu if present */}
          {item.submenu && (
            <ul className="submenu">
              {item.submenu.map((sub) => (
                <li key={sub.id}>
                  <Link href={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
