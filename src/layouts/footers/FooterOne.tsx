"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const FooterOne = ({ style_2 }: any) => {
  return (
    <footer>
      {/* <!-- footer-area-start --> */}
      <div className={`it-footer__area it-footer__space ${style_2 ? "black-bg" : "theme-bg"} z-index`}>
        <div className="container">
          <div className="row">
            {/* Footer Logo & Text */}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="it-footer__widget footer-col-1">
                <div className="it-footer__logo">
                  <Link href="/">
                    <Image
                      src="/assets/img/logo/footer-logo.png"
                      alt="rk-theme"
                      width={150}
                      height={50}
                      priority
                    />
                  </Link>
                </div>
                <div className="it-footer__text pb-15">
                  <p>M.V.M.R.H.S.S – Quality education for all, from K.G. to Higher Secondary</p>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-xl-2 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-footer__widget footer-col-2">
                <h4 className="it-footer__widget-title">Useful Links</h4>
                <div className="it-footer__list">
                  <ul>
                    <li><i className="flaticon-next"></i><a href="#">Facilities</a></li>
                    <li><i className="flaticon-next"></i><a href="#">Management</a></li>
                    <li><i className="flaticon-next"></i><a href="#">Curriculum</a></li>
                    <li><i className="flaticon-next"></i><a href="#">Admission</a></li>
                    <li><i className="flaticon-next"></i><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Updates / Gallery */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="it-footer__widget footer-col-3">
                <h4 className="it-footer__widget-title">Our Updates</h4>
                <div className="it-footer__gallery-box">
                  <div className="it-footer__gallery d-flex align-items-center">
                    <Image
                      src="/assets/img/footer/footer-sm-1-1.jpg"
                      alt="rk-theme"
                      width={80}
                      height={80}
                      objectFit="cover"
                    />
                    <div className="it-footer__gallery-content">
                      <span className={`${style_2 ? "color-red" : ""}`}><i className="far fa-clock"></i>Admission</span>
                      <p>Admissions open for the academic year.</p>
                    </div>
                  </div>
                  <div className="it-footer__gallery d-flex align-items-center">
                    <Image
                      src="/assets/img/footer/footer-sm-1-2.jpg"
                      alt="rk-theme"
                      width={80}
                      height={80}
                      objectFit="cover"
                    />
                    <div className="it-footer__gallery-content">
                      <span className={`${style_2 ? "color-red" : ""}`}><i className="far fa-clock"></i>Facilities</span>
                      <p>From classrooms to labs, our facilities are designed for excellence.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact / Social */}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
              <div className="it-footer__widget footer-col-4">
                <h4 className="it-footer__widget-title">Reach Us</h4>
                <div className="it-footer__input-box">
                  <input type="text" placeholder="info@mvmrhss.com" />
                  <div className={`it-footer__button-box ${style_2 ? "color-red" : ""}`}>
                    <button><i className="fas fa-arrow-right"></i></button>
                  </div>
                </div>
                <div className="it-footer__list">
                  <ul>
                    <li><i className="flaticon-next"></i><a href="#">+919567871424 , +917593078368</a></li>
                  </ul>
                </div>
                <div className="it-footer__social">
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>{" "}
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>{" "}
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>{" "}
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer-area-end --> */}

      {/* <!-- copyright-area-start --> */}
      <div className={`it-copyright__area ${style_2 ? "black-bg" : "it-copyright__bg"}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="it-copyright__text text-center">
                <span>
                  &copy; {new Date().getFullYear()}{" "}
                  <b className={`${style_2 ? "color-red" : ""}`}></b> All Rights Reserved. Powered by{" "}
                  <a
                    href="https://signroots.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    signrOots
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- copyright-area-end --> */}
    </footer>
  );
};

export default FooterOne;
