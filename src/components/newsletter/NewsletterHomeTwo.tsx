
import Link from 'next/link';
import React from 'react';

const NewsletterHomeTwo = () => {
  return (
    <>
      <div className="it-newsletter-4__area">
        <div className="it-newsletter-4__bg fix p-relative" style={{ backgroundImage: `url(/assets/img/newsletter/bg-4-1.jpg)` }}>
          <div className="it-newsletter-4__thumb d-none d-xl-block">
            <img src="assets/img/newsletter/bg.png" alt="rk-theme" />
          </div>
          <div className="it-newsletter-4__shape-1 d-none d-xl-block">
            <img src="assets/img/newsletter/shape-4-1.png" alt="rk-theme" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8 col-md-6 col-sm-7">
                <div className="it-newsletter-4__text text-start text-xl-end">
                  <h4 className="it-newsletter-4__title">We are Ready <br />
                    Develop Your Site!</h4>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-5">
                <div className="it-newsletter-4__button text-start text-sm-end">
                  <Link className="it-red-btn" href="/about-us"><span>discover more</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterHomeTwo;