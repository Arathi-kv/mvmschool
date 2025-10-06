

import Link from 'next/link';
import React from 'react';

const ServiceHomeOne = ({style_2} :any) => {
  return (
    <>
      <div className="it-service__area it-service__space fix theme-bg">
        <div className="it-service__shape">
          <img src="assets/img/service/service-shape-1-1.png" alt="rk-theme" />
        </div>
        <div className="it-service__shape-2">
          <img src="assets/img/service/service-shape-1-3.png" alt="rk-theme" />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 mb-50 col-sm-12">
              <div className="it-service__section-title">
                <span className="it-section-yellow-subtitle">OUR {style_2 ? "Service" : "FUN FACT"}</span>
                <h4 className="it-section-title text-white">Dealing in All Professional IT Service</h4>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 mb-50 d-none d-md-block">
              <div className="it-service__right-btn text-end">
                <a className="it-btn" href="#"><span>All Service</span></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-sm-6 mb-40 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".3s">
              <div className="it-service__item text-center">
                <div className="it-service__thumb">
                  <div className="it-service__icon">
                    <Link href="/service-details">
                      <i className="flaticon-up-right-arrow"></i>
                    </Link>
                  </div>
                  <img src="assets/img/service/service-1-1.jpg" alt="rk-theme" />
                </div>
                <Link href="/service-details">
                  <h4 className="it-service__title">Product Development</h4>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6 mb-40 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".5s">
              <div className="it-service__item text-center">
                <div className="it-service__thumb">
                  <div className="it-service__icon">
                    <Link href="/service-details">
                      <i className="flaticon-up-right-arrow"></i>
                    </Link>
                  </div>
                  <img src="assets/img/service/service-1-2.jpg" alt="rk-theme" />
                </div>
                <Link href="/service-details">
                  <h4 className="it-service__title">Security System</h4>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6 mb-40 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".7s">
              <div className="it-service__item text-center">
                <div className="it-service__thumb">
                  <div className="it-service__icon">
                    <Link href="/service-details">
                      <i className="flaticon-up-right-arrow"></i>
                    </Link>
                  </div>
                  <img src="assets/img/service/service-1-4.jpg" alt="rk-theme" />
                </div>
                <Link href="/service-details">
                  <h4 className="it-service__title">Data Analytics</h4>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6 mb-40 wow itfadeUp" data-wow-duration=".9s"
              data-wow-delay=".9s">
              <div className="it-service__item text-center">
                <div className="it-service__thumb">
                  <div className="it-service__icon">
                    <Link href="/service-details">
                      <i className="flaticon-up-right-arrow"></i>
                    </Link>
                  </div>
                  <img src="assets/img/service/service-1-3.jpg" alt="rk-theme" />
                </div>
                <Link href="/service-details">
                  <h4 className="it-service__title">UI/UX Designing</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHomeOne;