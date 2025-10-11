

import Link from 'next/link';
import React from 'react';

const FooterOne = ({ style_2 }: any) => {
  return (
    <>
      <footer>
        {/* <!-- footer-area-start --> */}
        <div className={`it-footer__area it-footer__space ${style_2 ? "black-bg" : "theme-bg"} z-index`}>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".3s">
                <div className="it-footer__widget footer-col-1">
                  <div className="it-footer__logo">
                    <Link href="/">
                      <img src="assets/img/logo/footer-logo.png" alt="rk-theme" />
                    </Link>
                  </div>
                  <div className="it-footer__text pb-15">
                    <p>M.V.M.R.H.S.S – Quality education for all, from K.G. to Higher Secondary </p>
                  </div>
                 
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="it-footer__widget footer-col-2">
                  <h4 className="it-footer__widget-title">Usefull Links</h4>
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
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".7s">
                <div className="it-footer__widget footer-col-3">
                  <h4 className="it-footer__widget-title">Our Updates</h4>
                  <div className="it-footer__gallery-box">
                    <div className="it-footer__gallery d-flex align-items-center">
                      <img src="assets/img/footer/footer-sm-1-1.jpg" alt="rk-theme" />
                      <div className="it-footer__gallery-content">
                        <span className={`${style_2 ? "color-red" : ""}`}><i className="far fa-clock"></i>Admission</span>
                        <p>Admissions open for the academic year.</p>
                      </div>
                    </div>
                    <div className="it-footer__gallery d-flex align-items-center">
                      <img src="assets/img/footer/footer-sm-1-2.jpg" alt="rk-theme" />
                      <div className="it-footer__gallery-content">
                        <span className={`${style_2 ? "color-red" : ""}`}><i className="far fa-clock"></i>Facilities</span>
                        <p>From classrooms to labs, our facilities are designed for excellence.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           <div className="col-xl-3 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
        <div className="it-footer__widget footer-col-4">
      <h4 className="it-footer__widget-title">Contact Us</h4>
    {/* Contact List */}
    <div className="it-footer__list mb-4">
      <ul>
        <li className="flex items-center mb-2">
          <i className="fa-solid fa-envelope mr-2 text-orange-500"></i>
          <a href="mailto:info@mvmrhss.com">info@mvmrhss.com</a>
        </li>
        <li className="flex items-center mb-2">
          <i className="fa-solid fa-phone mr-2 text-orange-500"></i>
          <a href="tel:+919567871424">+91 95678 71424</a>
        </li>
        <li className="flex items-center">
          <i className="fa-solid fa-phone mr-2 text-orange-500"></i>
          <a href="tel:+917593078368">+91 75930 78368</a>
        </li>
      </ul>
    </div>

    {/* Social Links */}
    <div className="it-footer__social flex space-x-4">
      <a href="#" className="text-orange-500">
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a href="#" className="text-orange-500">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="#" className="text-orange-500">
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
      <a href="#" className="text-orange-500">
        <i className="fa-brands fa-twitter"></i>
      </a>
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

    </>
  );
};

export default FooterOne;