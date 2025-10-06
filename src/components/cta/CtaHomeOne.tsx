

import Link from 'next/link';
import React from 'react';

const CtaHomeOne = ({style_2} :any) => {
  return (
    <>
      <div className={`it-cta-3__area ${style_2 ? "pb-100" : ""} `}>
        <div className="container container-large">
          <div className="it-cta-3__bg">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="it-cta-3__text z-index">
                  <h4 className="it-cta-3__title">Tecch Always Ready For Help You <br />
                    to Grow Your Business</h4>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="it-cta-3__text text-start text-md-end">
                  <Link className="it-black-btn" href="/service-details"><span>SERVICE MORE</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaHomeOne;