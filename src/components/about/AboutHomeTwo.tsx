

import Link from 'next/link';
import React from 'react';

const AboutHomeTwo = () => {
  return (
    <>
      <div className="it-about-4__area fix pt-120 pb-120">
        <div className="container">
          <div className="row align-items-xl-start align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <div className="it-about-4__thumb-box">
                <img src="assets/img/about/about-4-1.png" alt="rk-theme" />
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 wow itfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-about-3__right-wrap it-about-4__right-wrap">
                <div className="it-about-3__section-box">
                  <span className="it-section-subtitle-4">
                    {/* <em>//</em>  */}
                    KNOW ABOUT Tecch</span>
                  <h4 className="it-section-title">Always Try to Deliver More
                    Than You</h4>
                  <h4>Focus on value education</h4>
                  <h4>Separate Hostel for girls and boys</h4>
                </div>
               
                
                <Link className="it-red-btn hover-2" href="/about-us"><span>discover more</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHomeTwo;