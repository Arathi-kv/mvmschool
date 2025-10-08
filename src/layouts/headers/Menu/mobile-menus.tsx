"use client"
import React, { useState } from "react";

// internal 
import Link from "next/link";
import Image from "next/image";
import menu_data from "./menu-data";


const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <>
      <nav className="it-menu-content">
        <ul>
          {menu_data.map((menu, menu_index) => (
            <React.Fragment key={menu_index}>
              {menu.img_dropdown &&
                <li className={`${menu.img_dropdown ? "has-dropdown" : ""} ${navTitle === menu.title ? "dropdown-opened" : ""}`}>
                  <Link href="#" className={navTitle === menu.title ? "expanded" : ""}>
                    {menu.title}
                    <button
                      onClick={() => openMobileMenu(menu.title)}
                      className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}><i className="fal fa-angle-right"></i></button></Link>
                  <div className="it-submenu submenu has-home-img" style={{ display: navTitle === menu.title ? "block" : "none", }}>
                    <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
                      {menu.sub_menus.map((item, i) => (
                        <div key={i} className="col home-img">
                          <div className="home-img-thumb mb-15">
                            <Image src={item.demo_img} style={{ width: "100", height: "auto" }} alt="" />
                            <div className="home-img-btn">
                              <Link className="it-btn-white-sm" href={item.link}>View Demo</Link>
                            </div>
                          </div>
                          <div className="home-img-content text-center">
                            <h4 className="home-img-title">
                              <Link href={item.link} style={{ color: "#ffffff" }}>{item.title}</Link>
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              }
              {menu.has_dropdown &&
                <li className={`${menu.has_dropdown ? "has-dropdown" : ""} ${navTitle === menu.title ? "dropdown-opened" : ""}`}>
                  <Link href={menu.link} className={navTitle === menu.title ? "expanded" : ""}>{menu.title}
                    <button onClick={() => openMobileMenu(menu.title)}
                      className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}><i className="fal fa-angle-right"></i></button>
                  </Link>
                  <ul className="submenu it-submenu" style={{ display: navTitle === menu.title ? "block" : "none", }}>
                    {menu.sub_menus?.map((sub, sub_index) => (
                      <li key={sub_index}>
                        <Link href={sub.link}>{sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              }

              {!menu.has_dropdown && !menu.img_dropdown && (
                <li>
                  <Link href={menu.link}>{menu.title}</Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;



