
import Link from 'next/link';
import React from 'react';

const TeamHomeOne = () => {
  return (
    <>
      <div className="it-team__area pt-120 pb-90">
        <div className="it-team__plr">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-team__section-title text-center">
                  <span className="it-section-subtitle">Meet With Our Specialist</span>
                  <h4 className="it-section-title">Team that Builds Ideas Driven <br />by the Future</h4>
                </div>
              </div>
            </div>
            <div className="row">

              <div className="col-xl-3 col-lg-4 col-sm-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".3s">
                <div className="it-team__item">
                  <img className="w-100" src="assets/img/team/chairman.jpg" alt="rk-theme" />
                  <div className="it-team__content">
                    <Link href="/team-details">
                      <h5 className="it-team__author-name">Robert Teel</h5>
                    </Link>
                    <span>CEO & Founder</span>
                    <div className="it-team__social-box">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="it-team__item-shape">
                    <img src="assets/img/team/team-shape-1.png" alt="rk-theme" />
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".5s">
                <div className="it-team__item">
                  <img className="w-100" src="assets/img/team/team-1-2.png" alt="rk-theme" />
                  <div className="it-team__content">
                    <Link href="/team-details">
                      <h5 className="it-team__author-name">Bonnie Ashley</h5>
                    </Link>
                    <span>CEO & Founder</span>
                    <div className="it-team__social-box">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="it-team__item-shape">
                    <img src="assets/img/team/team-shape-1.png" alt="rk-theme" />
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".7s">
                <div className="it-team__item">
                  <img className="w-100" src="assets/img/team/team-1-3.png" alt="rk-theme" />
                  <div className="it-team__content">
                    <Link href="/team-details">
                      <h5 className="it-team__author-name">Katie Plaster</h5>
                    </Link>
                    <span>CEO & Founder</span>
                    <div className="it-team__social-box">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="it-team__item-shape">
                    <img src="assets/img/team/team-shape-1.png" alt="rk-theme" />
                  </div>
                </div>
              </div>
              
              <div className="col-xl-3 col-lg-4 col-sm-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".9s">
                <div className="it-team__item">
                  <img className="w-100" src="assets/img/team/team-1-4.png" alt="rk-theme" />
                  <div className="it-team__content">
                    <Link href="/team-details">
                      <h5 className="it-team__author-name">David Backhum</h5>
                    </Link>
                    <span>CEO & Founder</span>
                    <div className="it-team__social-box">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="it-team__item-shape">
                    <img src="assets/img/team/team-shape-1.png" alt="rk-theme" />
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

export default TeamHomeOne;