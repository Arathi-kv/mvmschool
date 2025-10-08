import React from "react";
import Link from "next/link";
import menu_data from './menu-data';

const NavMenu = () => {
  return (
    <ul>
      {menu_data.map((item) => (
        <li key={item.id}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
