
import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({ title, subtitle }: any) => {
  return (
    <>
      <div className="it-breadcrumb__area p-relative fix it-breadcrumb-height" style={{ backgroundImage: `url(/assets/img/breadcrumb/breadcrumb.png)` }}>
        <div className="it-breadcrumb__shape-2 wow itfadeRight" data-wow-duration=".9s" data-wow-delay=".9s">
          <img src="assets/img/breadcrumb/shape-1-2.png" alt="rk-theme" />
        </div>
        <div className="it-breadcrumb__shape-3 wow itfadeRight" data-wow-duration=".9s" data-wow-delay="1.4s">
          <img src="assets/img/breadcrumb/shape-1-3.png" alt="rk-theme" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-breadcrumb__content d-flex align-items-center justify-content-between z-index-5">
                <h3 className="it-breadcrumb__title">{title}</h3>
                <div className="it-breadcrumb__list">
                  <span><Link href="/">Home  -   </Link></span>
                  <span className="color">{subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;