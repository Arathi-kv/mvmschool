import React from "react";
import Link from "next/link";
import menu_data from './menu-data';
import Image from "next/image";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li key={i} className={`${item.has_dropdown || item.img_dropdown ? "has-dropdown" : ""}`}>
            <Link href={item.link}>{item.title}</Link>
            {item.img_dropdown && (
              <div className="it-submenu submenu has-home-img">
                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
                  {item.sub_menus.map((img, index) => (
                    <div key={index} className="col home-img">
                      <div className="home-img-thumb mb-15">
                        <Image style={{ width: "100%", height: "100%" }} src={img.demo_img} alt="rk-theme" />
                        <div className="home-img-btn">
                          <Link className="it-btn-white-sm" href={img.link}>View Demo</Link>
                        </div>
                      </div>
                      <div className="home-img-content text-center">
                        <h4 className="home-img-title">
                          <Link href={img.link}>{img.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {item.has_dropdown && (
              <ul className="submenu it-submenu">
                {item.sub_menus?.map((submenu, index) => (
                  <li key={index}><Link href={submenu.link}>{submenu.title}</Link></li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;

