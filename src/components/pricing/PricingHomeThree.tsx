
"use client"

import React, { useEffect } from 'react';

const PricingHomeThree = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <>
      <div className="it-pricing-5__area pt-115 pb-90">
        <div className="container">
          <div className="it-pricing-5__title-wrap">
            <div className="row align-items-end">
              <div className="col-xl-8 col-lg-6 col-md-6">
                <div className="it-pricing-5__section-box">
                  <span className="it-section-subtitle-5">OUR PRICING PLANS</span>
                  <h4 className="it-section-title">Choose Your Optional <br />
                    Pricing Plans</h4>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="it-pricing-5__tab">
                  <ul className="nav nav-tab justify-content-start justify-content-md-end" id="myTab"
                    role="tablist">
                    <li className="nav-items" role="presentation">
                      <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                        data-bs-target="#home" type="button" role="tab" aria-controls="home"
                        aria-selected="true">Bill Monthly</button>
                    </li>
                    <li className="nav-items" role="presentation">
                      <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                        data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                        aria-selected="false">Bill Annually</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="myTabContent">

            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="it-pricing-5__item">
                    <div className="it-pricing-5__top-box mb-30">
                      <i className="flaticon-income"></i>
                      <span>Basic</span>
                    </div>
                    <div className="it-pricing-5__middle-box mb-35">
                      <span><strong>$49</strong> / Monthly</span>
                    </div>
                    <div className="it-pricing-5__list mb-30">
                      <ul>
                        <li>Remote support</li>
                        <li>Unlimited Download</li>
                        <li>Security managment</li>
                        <li>Secure Finance Backup</li>
                        <li>24/7 System monitoring</li>
                      </ul>
                    </div>
                    <a className="it-grey-btn" href="#"><span>CHOOSE A PLAN</span></a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="it-pricing-5__item z-index fix p-relative active">
                    <div className="it-pricing-5__shape">
                      <img src="assets/img/project/shape-5-2.png" alt="rk-theme" />
                    </div>
                    <div className="it-pricing-5__top-box mb-30">
                      <i className="flaticon-internet"></i>
                      <span>Standard</span>
                    </div>
                    <div className="it-pricing-5__middle-box mb-35">
                      <span><strong>$52</strong> / Monthly</span>
                    </div>
                    <div className="it-pricing-5__list mb-30">
                      <ul>
                        <li>Remote support</li>
                        <li>Unlimited Download</li>
                        <li>Security managment</li>
                        <li>Secure Finance Backup</li>
                        <li>24/7 System monitoring</li>
                      </ul>
                    </div>
                    <a className="it-btn white-bg-color" href="#"><span>CHOOSE A PLAN</span></a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="it-pricing-5__item">
                    <div className="it-pricing-5__top-box mb-30">
                      <i className="flaticon-medal"></i>
                      <span>Premium</span>
                    </div>
                    <div className="it-pricing-5__middle-box mb-35">
                      <span><strong>$38</strong> / Monthly</span>
                    </div>
                    <div className="it-pricing-5__list mb-30">
                      <ul>
                        <li>Remote support</li>
                        <li>Unlimited Download</li>
                        <li>Security managment</li>
                        <li>Secure Finance Backup</li>
                        <li>24/7 System monitoring</li>
                      </ul>
                    </div>
                    <a className="it-grey-btn" href="#"><span>CHOOSE A PLAN</span></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="it-pricing-5__item">
                    <div className="it-pricing-5__top-box mb-30">
                      <i className="flaticon-income"></i>
                      <span>Basic</span>
                    </div>
                    <div className="it-pricing-5__middle-box mb-35">
                      <span><strong>$438</strong> / Monthly</span>
                    </div>
                    <div className="it-pricing-5__list mb-30">
                      <ul>
                        <li>Remote support</li>
                        <li>Unlimited Download</li>
                        <li>Security managment</li>
                        <li>Secure Finance Backup</li>
                        <li>24/7 System monitoring</li>
                      </ul>
                    </div>
                    <a className="it-grey-btn" href="#">CHOOSE A PLAN</a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="it-pricing-5__item z-index fix p-relative active">
                    <div className="it-pricing-5__shape">
                      <img src="assets/img/project/shape-5-2.png" alt="rk-theme" />
                    </div>
                    <div className="it-pricing-5__top-box mb-30">
                      <i className="flaticon-internet"></i>
                      <span>Standard</span>
                    </div>
                    <div className="it-pricing-5__middle-box mb-35">
                      <span><strong>$396</strong> / Monthly</span>
                    </div>
                    <div className="it-pricing-5__list mb-30">
                      <ul>
                        <li>Remote support</li>
                        <li>Unlimited Download</li>
                        <li>Security managment</li>
                        <li>Secure Finance Backup</li>
                        <li>24/7 System monitoring</li>
                      </ul>
                    </div>
                    <a className="it-red-btn" href="#">CHOOSE A PLAN</a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="it-pricing-5__item">
                    <div className="it-pricing-5__top-box mb-30">
                      <i className="flaticon-medal"></i>
                      <span>Premium</span>
                    </div>
                    <div className="it-pricing-5__middle-box mb-35">
                      <span><strong>$206</strong> / Monthly</span>
                    </div>
                    <div className="it-pricing-5__list mb-30">
                      <ul>
                        <li>Remote support</li>
                        <li>Unlimited Download</li>
                        <li>Security managment</li>
                        <li>Secure Finance Backup</li>
                        <li>24/7 System monitoring</li>
                      </ul>
                    </div>
                    <a className="it-grey-btn" href="#">CHOOSE A PLAN</a>
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

export default PricingHomeThree;