

import Link from 'next/link';
import React from 'react';

const ServiceHomeThree = () => {
  return (
    <>
      <div className="it-service-4__area fix black-bg p-relative pt-120 pb-120 z-index">
        <div className="it-service-4__shape-3">
          <img src="assets/img/feature/shape-5.png" alt="rk-theme" />
        </div>
        <div className="container">
          <div className="it-service-4__section-wrap">
            <div className="row align-items-end">
              <div className="col-xl-7 col-lg-6 col-md-6">
                <div className="it-service-4__section-box z-index-5">
                  <span className="it-section-subtitle-5">OUR SHOWCASE</span>
                  <h4 className="it-section-title text-white">Service We are Offering <br />
                    to Our Customer</h4>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="it-service-4__top-text z-index-5">
                  <p>Porem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    is simply free text quis bibendum. There are many variations of passages of
                    available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-md-3 row-cols-1 row-cols-sm-2">
            <div className="col mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="it-service-4__item fix text-center">
                <span><i className="flaticon-digital-marketing"></i></span>
                <Link href="/service-details">
                  <h5 className="it-service-4__title">Digital <br />
                    Marketing</h5>
                </Link>
                <div className="it-service-4__link">
                  <Link href="/service-details">Read More</Link>
                </div>
                <div className="it-service-4__overly"></div>
              </div>
            </div>
            <div className="col mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-service-4__item fix text-center">
                <span><i className="flaticon-web-design"></i></span>
                <Link href="/service-details">
                  <h5 className="it-service-4__title">UI/UX <br />
                    Designing</h5>
                </Link>
                <div className="it-service-4__link">
                  <Link href="/service-details">Read More</Link>
                </div>
                <div className="it-service-4__overly"></div>
              </div>
            </div>
            <div className="col mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="it-service-4__item fix text-center">
                <span><i className="flaticon-bar-chart"></i></span>
                <Link href="/service-details">
                  <h5 className="it-service-4__title">Marketing <br />
                    Strategy</h5>
                </Link>
                <div className="it-service-4__link">
                  <Link href="/service-details">Read More</Link>
                </div>
                <div className="it-service-4__overly"></div>
              </div>
            </div>
            <div className="col mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
              <div className="it-service-4__item fix text-center">
                <span><i className="flaticon-support"></i></span>
                <Link href="/service-details">
                  <h5 className="it-service-4__title">IT Service <br />
                    Managements</h5>
                </Link>
                <div className="it-service-4__link">
                  <Link href="/service-details">Read More</Link>
                </div>
                <div className="it-service-4__overly"></div>
              </div>
            </div>
            <div className="col mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
              <div className="it-service-4__item fix text-center">
                <span><i className="flaticon-analytics"></i></span>
                <Link href="/service-details">
                  <h5 className="it-service-4__title">Data <br />
                    Visualization</h5>
                </Link>
                <div className="it-service-4__link">
                  <Link href="/service-details">Read More</Link>
                </div>
                <div className="it-service-4__overly"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="it-service-4__bottom-text text-center pt-20">
                <span>Need digital marketing solutions & services? <Link href="/service-details">Send a request now</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHomeThree;