


import Link from 'next/link';
import React from 'react';

const ProductDetails = () => {
  return (
    <>
      <div className="it-project-details__area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-project-details__wrapper">
                <div className="it-project-details__thumb">
                  <img src="assets/img/project/Details1-1.png" alt="rk-theme" />
                </div>
                <div className="it-project-details__thumb-text-box mb-45 d-flex align-items-center justify-content-between">
                  <div className="it-project-details__thumb-text">
                    <span>published:</span>
                    <strong>April 20, 2023</strong>
                  </div>
                  <div className="it-project-details__thumb-text">
                    <span>CATAGORY:</span>
                    <strong>Design/ Ideas</strong>
                  </div>
                  <div className="it-project-details__thumb-text">
                    <span>client:</span>
                    <strong>rktheme</strong>
                  </div>
                  <div className="it-team-details__social">
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in linkedin"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter twitter"></i></a>
                  </div>
                </div>
                <div className="it-project-details__text">
                  <h5 className="postbox__details-title mb-20">Software Solution with Team</h5>
                  <p>With worldwide annual spend on digital advertising surpassing $325 billion, its no surprise that different approaches to online marketing are becoming available. One of these new approache marketing or digital performance marketing. Keep reading to learn all about performance marketing, from how it works to how it compares to digital marketing. Plus, get insight into the benefits and risks of performance marketing and how it can affect your companys long-term success and profitability. Performance marketing is an approach to digital marketing or advertising where businesses only pay when a specific result occurs. This result could be a new lead, sale, or other outcome agreed upon by the advertiser and business. Performance marketing involves channels such as affiliate marketing, online
                  </p>
                  <p>The main thing that separates performance marketing from other types of marketing is the way businesses pay for their campaigns. Rather than paying up front or by month, advertisers pay when a specific action takes place. You might enlist a marketing companys help to bring your branding to more individuals by having these marketers promote your business to prospective customers. The hope is that users will complete a form to learn more about your company and become a lead.</p>
                </div>
                <div className="it-project-3__section-wrap pt-120 mb-60">
                  <div className="row align-items-end">
                    <div className="col-xl-12">
                      <div className="it-project-3__title-box text-center">
                        <span className="it-section-subtitle-2">OUR SHOWCASE</span>
                        <h4 className="it-section-title">See More Projects</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                    <div className="it-project-5__item fix">
                      <img src="assets/img/project/project-3-1.jpg" alt="rk-theme" />
                      <div className="it-project-5__text">
                        <Link href="/facilities"><i
                          className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                        <span>IDEA</span>
                        <h6>Digital Solution</h6>
                      </div>
                      <div className="it-project-5__shape">
                        <img src="assets/img/project/shape-5-1.png" alt="rk-theme" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                    <div className="it-project-5__item fix">
                      <img src="assets/img/project/project-3-2.jpg" alt="rk-theme" />
                      <div className="it-project-5__text">
                        <Link href="/facilities"><i
                          className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                        <span>IDEA</span>
                        <h6>Digital Solution</h6>
                      </div>
                      <div className="it-project-5__shape">
                        <img src="assets/img/project/shape-5-1.png" alt="rk-theme" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                    <div className="it-project-5__item fix">
                      <img src="assets/img/project/project-3-3.jpg" alt="rk-theme" />
                      <div className="it-project-5__text">
                        <Link href="/facilities"><i
                          className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                        <span>IDEA</span>
                        <h6>Digital Solution</h6>
                      </div>
                      <div className="it-project-5__shape">
                        <img src="assets/img/project/shape-5-1.png" alt="rk-theme" />
                      </div>
                    </div>
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

export default ProductDetails;