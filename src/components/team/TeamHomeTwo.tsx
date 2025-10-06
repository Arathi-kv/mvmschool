

import Link from 'next/link';
import React from 'react';

const TeamHomeTwo = () => {
  return (
    <>
      <div className="it-team-4__area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-team-4__title-box text-center pb-60">
                <span className="it-section-subtitle-4">
                  {/* <em>//</em>  */}
                  Meet With Our Specialist</span>
                <h4 className="it-section-title">Experienced Peoples</h4>
              </div>
            </div>
          </div>
          <div className="row">
            
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".3s">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/team/chairman.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>ADVISER</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Melina Perez</h5>
                    </Link>
                  </div>
                  <div className="it-team-4__social-box">
                    <div className="it-team-4__social-item">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".5s">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/team/team-4-2.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>Developer</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Brock Lesnar</h5>
                    </Link>
                  </div>
                  <div className="it-team-4__social-box">
                    <div className="it-team-4__social-item">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".7s">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/team/team-4-3.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>DESIGNER</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Randy Orton</h5>
                    </Link>
                  </div>
                  <div className="it-team-4__social-box">
                    <div className="it-team-4__social-item">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TeamHomeTwo;