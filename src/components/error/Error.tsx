

import Link from 'next/link';
import React from 'react';

const Error = () => {
  return (
    <>
      <div className="it-error__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-error__box">
                <h5 className="it-error__title">Page Not Found!</h5>
                <div className="it-error__content text-center">
                  <div className="it-error__thumb">
                    <img src="assets/img/error/Error.png" alt="rk-theme" />
                  </div>
                  <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
                  <Link className="it-black-btn hover-2" href="/"><span>back to home</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;