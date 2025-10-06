

import React from 'react';
import Count from '../common/count';
import Link from 'next/link';

const AboutHomeOne = ({style_2}: any) => {
  return (
    <>
      <div className={`it-about__area pb-120 ${style_2 ? "pt-120" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 wow itfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-about__left-box text-end p-relative">
                <div className="it-about__thumb">
                  <img src="assets/img/about/about1.jpg" alt="rk-theme" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow itfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="it-about__right-box">
                <div className="it-about__section-title pb-20">
                  <span className="it-section-subtitle">KNOW ABOUT US</span>
                  <h4 className="it-section-title">M.V.M Higher Secondary School</h4>
                </div>
                <div className="it-about__content">
                  <p>
                    Assabah Association Trust is a well organized and established non-profit organization, under Muslim management.
                    The trust is managing number of educational institutions. M.V.M.R.H.S.S founded in 1986 under Assabah Association Trust.
                    School provides quality education for all community with affordable cost.   Now the school has grown to a full
                   fledged Higher Secondary School starting from K.G. to Higher Secondary level with reorganization of government of Kerala.
                 </p>
                   {/*<div className="it-about__list-box">
                   <ul>
                      <li><i className="flaticon-check-mark"></i>Aliquam accumsan et ante id pellentesque
                      </li>
                      <li><i className="flaticon-check-mark"></i>Aliquam accumsan et ante id</li>
                    </ul>
                  </div> */}
                  <div className="it-about__btn d-flex align-items-center">
                    <Link className="it-btn hover-2" href="/about-us"><span>discover more</span></Link>
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

export default AboutHomeOne;