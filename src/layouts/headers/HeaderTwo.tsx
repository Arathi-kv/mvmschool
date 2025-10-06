"use client"

import Link from 'next/link';
import NavMenu from './Menu/nav-menu';
import React, { useState } from 'react';
import useSticky from '@/hooks/use-sticky';
import Search from '@/components/common/Search';
import Offcanvus from '@/components/common/Offcanvus';

const HeaderTwo = () => {

  const { sticky } = useSticky()
  const [open, setOpen] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)


  return (
    <>
      <header className="it-header-height">
        {/* <!-- header-area-start --> */}
        <div className="it-header-middle__area it-header-middle__space">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-6 col-md-4 col-6">
                <div className="it-header-middle__logo-box">
                  <Link href="/">
                    <img src="assets/img/logo/black-logo.png" alt="rk-theme" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-8 col-6">
                <div className="it-header-middle__contact-wrap">
                  <div className="it-header-middle__contact-box d-none d-xl-block">
                    <ul>
                      <li>
                        <div className="it-header-middle__contact-list d-flex align-items-center">
                          <div className="it-header-middle__icon">
                            <span><i className="flaticon-phone-call-1"></i></span>
                          </div>
                          <div className="it-header-middle__text">
                            <span>Call Us Anytime</span>
                            <a href="tel:+9978687656">+99 (786) 87656</a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="it-header-middle__contact-list d-flex align-items-center">
                          <div className="it-header-middle__icon">
                            <span><i className="flaticon-black-back-closed-envelope-shape"></i></span>
                          </div>
                          <div className="it-header-middle__text">
                            <span>Drop us a Line</span>
                            <a href="mailto:Tecchhelp@gmail.com">Tecchhelp@gmail.com</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="it-header__bar d-xl-none">
                    <button className="it-menu-bar red">
                      <span onClick={() => setOpenSidebar(!openSidebar)}><i className="fa-regular fa-bars"></i></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 d-none d-xl-block">
                <div className="it-header-middle__btn text-end">
                  <a className="it-border-btn" href="#"><span>Get solution</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- header-area-start --> */}
        <div id="header-sticky" className={`it-header-4-box ${sticky ? 'header-sticky' : ''}`}>
          <div className="it-heder-menu-4__area it-heder-menu-4__wrapper d-none d-xl-block">
            <div className="container">
              <div className="it-heder-menu-4__bg">
                <div className="row align-items-center">
                  <div className="col-xl-10 col-lg-10 col-md-10">
                    <div className="it-heder-menu-4__main-menu-box z-index-3">
                      <nav className="it-menu-content" id="mobile-menu">

                      <NavMenu />   

                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2">
                    <div className="it-heder-menu-4__right-box text-end z-index-3" >
                      <button className="search-open-btn red-bg" onClick={() => setOpen(true)}>
                        <i className="flaticon-loupe"></i>
                      </button>
                      <Link href="/cart"><i className="flaticon-shopping-cart"></i></Link>
                    </div>
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

export default HeaderTwo;