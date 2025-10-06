

import React from 'react';
import Count from '../common/count';
import Link from 'next/link';

const AboutHomeThree = () => {
  return (
    <>
      <div className="it-about-5__area pt-120 pb-90">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-xl-6 col-lg-6 wow itfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-about-5__left-box">
                <div className="it-about-5__section-box mb-15">
                  <span className="it-section-subtitle-5">ABOUT OUR COMPANY</span>
                  <h4 className="it-section-title">Small Enough to Care Big
                    Enough to Success</h4>
                </div>
                <div className="it-about-5__text mb-35">
                  <p>
                    Porem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    is simply free text quis bibendum. There are many variations of passages of
                    available
                  </p>
                </div>
                <div className="it-about-5__fea-list mb-40">
                  <ul>
                    <li><i className="flaticon-check-mark"></i>Aliquam accumsan et ante id pellentesque</li>
                    <li><i className="flaticon-check-mark"></i>Aliquam accumsan et ante id</li>
                  </ul>
                </div>
                <div className="it-about-5__button-box mb-15 d-flex">
                  <Link className="it-btn" href="/about-us"><span>discover more</span></Link>
                  <div className="it-about-5__experience-box d-flex align-items-end">
                    <h6 data-purecounter-duration="1" data-purecounter-end="25" className="purecounter">
                      <Count number={25} />
                    </h6>
                    <span>Years of <br /> Experience</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-about-5__thumb-box p-relative text-center text-lg-end">
                <div className="it-about-5__thumb">
                  <img src="assets/img/about/about-5-1.jpg" alt="rk-theme" />
                </div>
                <div className="it-about-5__thumb-sm">
                  <img src="assets/img/about/about-5-2.jpg" alt="rk-theme" />
                </div>
                <div className="it-about-5__shape-1 d-none d-xl-block">
                  <img src="assets/img/about/shape-5-1.png" alt="rk-theme" />
                </div>
                <div className="it-about-5__shape-2 d-none d-xxl-block">
                  <img src="assets/img/about/shape-5-2.png" alt="rk-theme" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHomeThree;