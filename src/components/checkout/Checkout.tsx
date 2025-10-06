
"use client"
import React from 'react';

const Checkout = () => {
  return (
    <>
      <div className="checkout__area pt-95 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="checkout__wrapper pb-10 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <span>Billing Details:</span>
                <div className="checkout__content">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="checkout__input">
                          <input type="text" placeholder="First Name*" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="checkout__input">
                          <input type="text" placeholder="Last Name*" />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12">
                        <div className="checkout__input">
                          <input type="email" placeholder="Email*" />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12">
                        <div className="checkout__input">
                          <input type="text" placeholder="Company Name*" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="checkout__wrapper pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                <span>Billing Details:</span>
                <div className="checkout__content">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="checkout__input">
                          <input type="text" placeholder="Postcode*" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="checkout__input">
                          <input type="text" placeholder="City*" />
                        </div>
                      </div>
                      <div className="col-xl-12 col-12">
                        <div className="checkout__input">
                          <input type="email" placeholder="Email*" />
                        </div>
                      </div>
                      <div className="col-xl-12 col-12">
                        <div className="checkout__input">
                          <input type="text" placeholder="House No*" />
                        </div>
                      </div>
                      <div className="col-xl-12 col-12">
                        <div className="checkout-form-list create-acc">
                          <input id="box" type="checkbox" />
                          <label htmlFor="box">I agree with the Team of service</label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="checkout__summary-wrapper">
                <div className="checkout__item">
                  <div className="checkout__list-item">
                    <b>Order summary:</b>
                    <div className="checkout__summary-list d-flex justify-content-between">
                      <span>Set Laboratory</span>
                      <span>USD $356</span>
                    </div>
                    <div className="checkout__summary-list d-flex justify-content-between">
                      <span>Medical Suraj</span>
                      <span>USD $576</span>
                    </div>
                    <div className="checkout__summary-list d-flex justify-content-between">
                      <span>Hospital Teblet</span>
                      <span>USD $951</span>
                    </div>
                    <div className="checkout__summary-list d-flex justify-content-between">
                      <span>Set Laboratory</span>
                      <span>USD $356</span>
                    </div>
                  </div>
                  <div className="checkout__bottom d-flex justify-content-between">
                    <span>Set Laboratory</span>
                    <span>USD $356</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="checkout__btn text-start text-lg-end">
                <a className="it-btn hover-2" href="#">
                  <span>Next Page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;