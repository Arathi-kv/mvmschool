

import Link from 'next/link';
import React from 'react';

const CtaHomeThree = () => {
  return (
    <>
      <div className="it-cta-3__area">
        <div className="container">
          <div className="it-cta-3__plr theme-bg">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-5 col-md-6">
                <div className="it-cta-3__text z-index">
                  <h4 className="it-cta-3__title text-white">We are Ready <br />
                    Develop Your Site!</h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-md-6">
                <div className="it-cta-3__text text-start text-md-end">
                  <Link className="it-btn white-bg-color" href="/service-details"><span>SERVICE
                    MORE</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaHomeThree;