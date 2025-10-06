"use client";

import React, { useState } from "react";
import NavMenu from "./Menu/nav-menu";
import Link from "next/link";
import Image from "next/image";
import useSticky from "@/hooks/use-sticky";
import Offcanvus from "@/components/common/Offcanvus";

const HeaderFour = () => {
  const { sticky } = useSticky();
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <header className="it-header-height">
        {/* <!-- header-area-start --> */}
        <div id="header-sticky" className={`it-header__area ${sticky ? "header-sticky" : ""}`}>
          <div className="container container-large">
            <div className="it-header__wrap p-relative">
              {/* Desktop Logo */}
              <div className="it-header__logo d-none d-xl-block">
                <Link href="/">
                  <Image
                    src="/assets/img/logo/school-logo.png"
                    alt="rk-theme"
                    width={180}
                    height={60}
                    priority
                  />
                </Link>
              </div>

              <div className="row align-items-center">
                <div className="col-xl-10 col-lg-6 col-md-6 col-6">
                  <div className="it-header__menu d-none d-xl-block text-center">
                    <nav className="it-menu-content">
                      <NavMenu />
                    </nav>
                  </div>

                  {/* Mobile Logo */}
                  <div className="it-header__main-logo d-xl-none">
                    <Link href="/">
                      <Image
                        src="/assets/img/logo/school-logo.png"
                        alt="rk-theme"
                        width={140}
                        height={50}
                        priority
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                  <div className="it-header__right-box d-flex align-items-center justify-content-end">
                    <div className="it-header__bar d-xl-none">
                      <button className="it-menu-bar" onClick={() => setOpenSidebar(!openSidebar)}>
                        <i className="fa-regular fa-bars"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-area-end --> */}
      </header>

      <Offcanvus openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
};

export default HeaderFour;
