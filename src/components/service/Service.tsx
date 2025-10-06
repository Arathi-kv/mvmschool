


import Link from 'next/link';
import React from 'react';

const Service = () => {
  return (
    <>
      <div className="it-service-2__area grey-bg pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="it-service-2__item p-relative fix">
                <div className="it-service-2__thumb fix p-relative">
                  <img className="w-100" src="assets/img/service/service-2-1.jpg" alt="rk-theme" />
                </div>
                <div className="it-service-2__wrapper fix">
                  <div className="it-service-2__content-box text-center">
                    <div className="it-service-2__top">
                      <div className="it-service-2__icon">
                        <span><i className="flaticon-ux-design"></i></span>
                      </div>
                      <Link href="/service-details">
                        <h5 className="it-service-2__title-sm">UI/UX <br />
                          Designing</h5>
                      </Link>
                    </div>
                    <Link href="/service-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-service-2__item p-relative fix">
                <div className="it-service-2__thumb fix p-relative">
                  <img className="w-100" src="assets/img/service/service-2-2.jpg" alt="rk-theme" />
                </div>
                <div className="it-service-2__wrapper fix">
                  <div className="it-service-2__content-box text-center">
                    <div className="it-service-2__top">
                      <div className="it-service-2__icon">
                        <span><i className="flaticon-management"></i></span>
                      </div>
                      <Link href="/service-details"><h5 className="it-service-2__title-sm">IT Service <br />
                        Management</h5></Link>
                    </div>
                    <Link href="/service-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="it-service-2__item p-relative fix">
                <div className="it-service-2__thumb fix p-relative">
                  <img className="w-100" src="assets/img/service/service-2-3.jpg" alt="rk-theme" />
                </div>
                <div className="it-service-2__wrapper fix">
                  <div className="it-service-2__content-box text-center">
                    <div className="it-service-2__top">
                      <div className="it-service-2__icon">
                        <span><i className="flaticon-digital-marketing"></i></span>
                      </div>
                      <Link href="/service-details"><h5 className="it-service-2__title-sm">Affilate <br />
                        Marketing</h5></Link>
                    </div>
                    <Link href="/service-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
              <div className="it-service-2__item p-relative fix">
                <div className="it-service-2__thumb fix p-relative">
                  <img className="w-100" src="assets/img/service/service-2-4.jpg" alt="rk-theme" />
                </div>
                <div className="it-service-2__wrapper fix">
                  <div className="it-service-2__content-box text-center">
                    <div className="it-service-2__top">
                      <div className="it-service-2__icon">
                        <span><i className="flaticon-software-application"></i></span>
                      </div>
                      <Link href="/service-details"><h5 className="it-service-2__title-sm">App <br />
                        Developments</h5></Link>
                    </div>
                    <Link href="/service-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
              <div className="it-service-2__item p-relative fix">
                <div className="it-service-2__thumb fix p-relative">
                  <img className="w-100" src="assets/img/service/service-2-5.jpg" alt="rk-theme" />
                </div>
                <div className="it-service-2__wrapper fix">
                  <div className="it-service-2__content-box text-center">
                    <div className="it-service-2__top">
                      <div className="it-service-2__icon">
                        <span><i className="flaticon-graph"></i></span>
                      </div>
                      <Link href="/service-details"><h5 className="it-service-2__title-sm">Data <br />
                        Analysis</h5></Link>
                    </div>
                    <Link href="/service-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay="1.3s">
              <div className="it-service-2__item p-relative fix">
                <div className="it-service-2__thumb fix p-relative">
                  <img className="w-100" src="assets/img/service/service-2-6.jpg" alt="rk-theme" />
                </div>
                <div className="it-service-2__wrapper fix">
                  <div className="it-service-2__content-box text-center">
                    <div className="it-service-2__top">
                      <div className="it-service-2__icon">
                        <span><i className="flaticon-internet"></i></span>
                      </div>
                      <Link href="/service-details"><h5 className="it-service-2__title-sm">Digital <br />
                        Marketing</h5></Link>
                    </div>
                    <Link href="/service-details">
                      Read More
                    </Link>
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

export default Service;