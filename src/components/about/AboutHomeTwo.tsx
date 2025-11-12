

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
                <img src="assets/img/about/about1.jpg" alt="theme" />
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 wow itfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-about-3__right-wrap it-about-4__right-wrap">
                <div className="it-about-3__section-box">
                  <span className="it-section-subtitle">
                    {/* <em>//</em>  */}
                    KNOW ABOUT US</span>
                  <h4 className="it-section-title"> M.V.M Higher Secondary School</h4>
                </div>
                <p>
                  M.V.M Higher Secondary School established in 1986, under Assabah Association Trust. a full-fledged Higher Secondary School starting from K.G. to Higher Secondary with reorganization from government of Kerala, 
                  MVMRHSS believe that education is not merely the pursuit of academic excellence but the holistic development of every child. Established with a vision to nurture intellectually vibrant,
                  morally upright,and socially responsible individuals, our school provides a dynamic learning environment that blends tradition with modern educational practices.
                 </p>
                
                <Link className="it-btn hover-2" href="/about-us"><span>discover more</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHomeTwo;