"use client";

import Link from "next/link";
import NavMenu from "./Menu/nav-menu";
import React, { useState } from "react";
import useSticky from "@/hooks/use-sticky";
import Search from "@/components/common/Search";
import Offcanvus from "@/components/common/Offcanvus";

const HeaderOne = () => {
  const { sticky } = useSticky();
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <header className="it-header-height">
        {/* <!-- header-area-start --> */}
        <div className="it-header-top__area theme-bg pt-10 pb-10 d-none d-lg-block">
          <div className="container container-large">
            <div className="row align-items-center justify-content-between">
              {/* Left: Social Icons */}
              <div className="col-auto">
                <div className="it-header-top__social">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              {/* Right: Contact Info */}
              <div className="col-auto">
                <div className="it-header-top__left-box text-end">
                  <span className="me-3">
                    <i className="fa-light fa-envelope"></i>
                    <a href="mailto:info@mvmrhss.com" className="ms-1">
                      info@mvmrhss.com
                    </a>
                  </span>
                  <span>
                    <i className="fa-light fa-phone-rotary"></i>
                    <a href="tel:+919567871424" className="ms-1">
                      +91 95678 71424
                    </a>
                  </span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Bottom Area */}
        <div
          id="header-sticky"
          className={`it-header__area ${sticky ? "header-sticky" : ""}`}
        >
          <div className="container container-large">
            <div className="it-header__wrap p-relative">
              {/* Desktop Logo */}
              <div className="it-header__logo d-none d-xl-block">
                <Link href="/">
                  <img src="assets/img/logo/school-logo.png" alt="logo" />
                </Link>
              </div>

              {/* ======= Desktop Menu ======= */}
              <div className="it-header__menu d-none d-xl-block text-center w-100">
                <nav className="it-menu-content">
                  <NavMenu />
                </nav>
              </div>

              {/* ======= Mobile Header Row ======= */}
              <div className="it-header__mobile d-flex align-items-center justify-content-between d-xl-none">
                {/* Mobile Logo */}
                <div className="it-header__main-logo">
                  <Link href="/">
                    <img src="assets/img/logo/school-logo.png" alt="logo" />
                  </Link>
                </div>

                {/* Hamburger Icon */}
                <div className="it-header__right-box">
                  <div className="it-header__bar">
                    <button className="it-menu-bar">
                      <span onClick={() => setOpenSidebar(!openSidebar)}>
                        <i className="fa-regular fa-bars"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-area-end --> */}
      </header>

      <Search open={open} setOpen={setOpen} />
      <Offcanvus openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
};

export default HeaderOne;
