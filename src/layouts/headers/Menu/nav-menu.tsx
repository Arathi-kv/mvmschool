import React from "react";
import Link from "next/link";
import menu_data from './menu-data';
import Image from "next/image";

const NavMenu = () => {
  return (
    <ul>
      {menu_data.map((item, i) => (
        <li key={i} className={`${item.has_dropdown || item.img_dropdown ? "has-dropdown" : ""}`}>
          <Link href={item.link}>{item.title}</Link>

          {/* Remove img_dropdown content since no sub_menus */}
          {item.img_dropdown && (
            <div className="it-submenu submenu has-home-img">
              {/* Empty submenu placeholder removed */}
            </div>
          )}

          {/* Remove standard dropdown submenu since no sub_menus */}
          {item.has_dropdown && (
            <ul className="submenu it-submenu">
              {/* Empty submenu placeholder removed */}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
