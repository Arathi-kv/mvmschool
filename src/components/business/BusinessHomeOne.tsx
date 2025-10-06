

import React from 'react';

const BusinessHomeOne = () => {
  return (
    <>
      <div className="it-business__area it-business__space">
        <div className="it-business__bg" style={{ backgroundImage: 'url(/assets/img/business/business-bg-1.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5">
                <div className="it-business__section-title">
                  <span className="it-section-yellow-subtitle text-white">OUR BUSINESS PATH</span>
                  <h4 className="it-section-title text-white">Trusted IT Solution <br /> & Services Business</h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="it-business__item-box d-flex about-items-center justify-content-between">
                  <div className="it-business__item">
                    <div className="it-business__icon">
                      <span><i className="flaticon-badge"></i></span>
                    </div>
                    <div className="it-business__text">
                      <h5 className="it-business__title">Experienced</h5>
                      <span>Lorem ipsum dolor sit a</span>
                    </div>
                  </div>
                  <div className="it-business__item">
                    <div className="it-business__icon">
                      <span><i className="flaticon-bar-chart"></i></span>
                    </div>
                    <div className="it-business__text">
                      <h5 className="it-business__title">Convenience</h5>
                      <span>Lorem ipsum dolor sit a</span>
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

export default BusinessHomeOne;