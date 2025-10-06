

import React from 'react';
import Count from '../common/count';

const FunfactHomeOne = ({style_2} : any) => {
  return (
    <>
      <div className={`it-funfact__area ${style_2 ? 'funfact-inner pt-120 pb-120' : ''}`}>
        {!style_2 && 
          <div className="container">
            <div className="row align-area-start">
              <div className="col-xl-8 col-lg-7 mb-50">
                <div className="it-funfact__section-title">
                  <span className="it-section-subtitle">OUR FUN FACT</span>
                  <h4 className="it-section-title">The Greatest Achievement <br />For IT Solution Provides</h4>
                </div>
              </div>
            </div>
          </div>
        
        }
        <div className="it-funfact__wrap">
          <div className="it-funfact__bg fix theme-bg-2 p-relative">
            <div className="it-funfact__shape d-none d-xl-block">
              <img src="assets/img/funfact/funfact-shape-1.png" alt="rk-theme" />
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-30">
                  <div className="it-funfact__item d-flex align-items-center justify-content-xl-center">
                    <div className="it-funfact__icon">
                      <span><i className="flaticon-management"></i></span>
                    </div>
                    <div className="it-funfact__text">
                      <h4 className="it-funfact__title-sm"><i data-purecounter-duration="1"
                        data-purecounter-end="3480" className="purecounter"> <Count number={3480} /> </i>
                      </h4>
                      <span>Project Completed</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-30">
                  <div className="it-funfact__item d-flex align-items-center justify-content-xl-center">
                    <div className="it-funfact__icon">
                      <span><i className="flaticon-support"></i></span>
                    </div>
                    <div className="it-funfact__text">
                      <h4 className="it-funfact__title-sm"><i data-purecounter-duration="1"
                        data-purecounter-end="248" className="purecounter"><Count number={248} /></i>
                      </h4>
                      <span>IT Specialist</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-30">
                  <div className="it-funfact__item d-flex align-items-center justify-content-xl-center">
                    <div className="it-funfact__icon">
                      <span><i className="flaticon-rating"></i></span>
                    </div>
                    <div className="it-funfact__text">
                      <h4 className="it-funfact__title-sm"><i data-purecounter-duration="1"
                        data-purecounter-end="6980" className="purecounter"> <Count number={6980} /> </i>
                      </h4>
                      <span>Happy Clients</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-30">
                  <div className="it-funfact__item d-flex align-items-center justify-content-xl-center">
                    <div className="it-funfact__icon">
                      <span><i className="flaticon-solution"></i></span>
                    </div>
                    <div className="it-funfact__text">
                      <h4 className="it-funfact__title-sm"><i data-purecounter-duration="1"
                        data-purecounter-end="250" className="purecounter"><Count number={250} /></i>
                      </h4>
                      <span>Smart Solution </span>
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

export default FunfactHomeOne;