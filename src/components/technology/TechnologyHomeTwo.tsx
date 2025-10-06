
import React from 'react';
import Count from '../common/count';
import Link from 'next/link';

const TechnologyHomeTwo = () => {
  return (
    <>
      <div className="it-technology-4__area fix p-relative pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 wow itfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-technology-4__right-box">
                <div className="it-technology-4__title-box pb-15">
                  <span className="it-section-subtitle-4">
                    {/* <em>//</em>  */}
                    Check Our Benifits</span>
                  <h4 className="it-section-title">Your Partner for Software Innovation</h4>
                </div>
                <div className="it-technology-4__text pb-10">
                  <p>Tecch is the partner of choice for many of the world leading enterprises, SMEs and
                    technology challengers. We help businesses elevate their value through.</p>
                </div>
                <div className="it-choose-2__item-wrap mb-60 d-flex align-items-center">
                  <div className="it-choose-2__item active-2 d-flex align-items-center">
                    <span>
                      <i className="flaticon-rocket"></i>
                    </span>
                    <h6>Marketing <br />Management</h6>
                  </div>
                  <div className="it-choose-2__text">
                    <span><b data-purecounter-duration="1" data-purecounter-end="428"
                      className="purecounter"> <Count number={428} /> </b> <br />IT Specialist
                    </span>
                  </div>
                </div>
                <div className="it-technology-4__item d-flex align-items-center text-center p-relative">
                  <Link className="it-red-btn hover-2" href="/about-us"><span>discover more</span></Link>
                  <div className="it-technology-4__icon-2 d-none d-xl-block">
                    <span><i className="flaticon-badge"></i></span>
                  </div>
                  <p className="text-start d-none d-xl-block">We are High Quality <br /> Tech Solution</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-technology-4__thumb-box p-relative text-center text-lg-end">
                <div className="it-technology-4__thumb">
                  <img src="assets/img/technology/tech-4-1.jpg" alt="rk-theme" />
                </div>
                <div className="it-technology-4__thumb-sm">
                  <img src="assets/img/technology/tech-4-2.jpg" alt="rk-theme" />
                </div>
                <div className="it-technology-4__shape d-none d-md-block">
                  <img src="assets/img/technology/shape-4-1.png" alt="rk-theme" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyHomeTwo;