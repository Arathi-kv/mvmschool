

import Link from 'next/link';
import React from 'react';

const TechnologyHomeThree = () => {
  return (
    <>
      <div className="it-technology-5__area p-relative black-bg pt-120 pb-120">
        <div className="it-technology-5__bg">
          <img src="assets/img/technology/tech-5-1.jpg" alt="rk-theme" />
            <div className="it-technology-5__bg-text-box d-none d-lg-block">
              <div className="it-technology-5__bg-text d-flex align-items-center">
                <i className="flaticon-medal"></i>
                <span>We Are Working this Platform Almost <br />
                  20 Years Honesty</span>
              </div>
            </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="offset-xl-6 offset-lg-6 col-xl-6 col-lg-6 wow itfadeRight" data-wow-duration=".9s"
              data-wow-delay=".7s">
              <div className="it-technology-4__right-box it-technology-4__color">
                <div className="it-technology-4__title-box pb-15">
                  <span className="it-section-subtitle-5">Check Our Benifits</span>
                  <h4 className="it-section-title text-white">Your Partner for <br />
                    Software Innovation</h4>
                </div>
                <div className="it-technology-4__text pb-15">
                  <p>Tecch is the partner of choice for many of the world leading enterprises, SMEs and
                    technology challengers. We help businesses elevate their value through.</p>
                </div>
                <div
                  className="it-technology-4__idea-wrap d-flex align-items-center align-items-lg-start mb-20">
                  <div className="it-technology-4__idea-icon">
                    <i className="flaticon-rocket-launch"></i>
                    <span></span>
                  </div>
                  <div className="it-technology-4__idea-text">
                    <p>Lorem ipsum is simply free text dolor sit
                      am adipi we daily ipsum</p>
                  </div>
                </div>
                <div className="it-technology-4__list-wrapper">
                  <div className="it-technology-4__list-box">
                    <ul>
                      <li><i className="fa-regular fa-circle-check"></i>Suspendisse finibus urna mau</li>
                      <li><i className="fa-regular fa-circle-check"></i>Vestibulum leo ligula vit</li>
                    </ul>
                  </div>
                  <Link className="it-btn white-bg-color" href="/about-us"><span>discover more</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyHomeThree;