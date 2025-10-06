

import Link from 'next/link';
import React from 'react';

const BlogHomeThree = () => {
  return (
    <>
      <div className="it-blog-3__area fix p-relative pb-90">
        <div className="it-blog-3__bg-2 pt-115">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-blog-3__section-box z-index text-center pb-60">
                  <span className="it-section-subtitle-5">Our Latest Blogs</span>
                  <h4 className="it-section-title">Our Latest Blog & News</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".3s">
                <div className="it-blog-3__item z-index space it-blog-3__item-color">
                  <Link href="#">
                    <div className="it-blog-3__thumb fix">
                      <img className="w-100" src="assets/img/blog/blog-2-1.jpg" alt="rk-theme" />
                    </div>
                  </Link>
                  <div className="it-blog-3__content-box">
                    <div className="it-blog-3__content">
                      <span className="it-blog-3__meta">By admin _ <strong
                        className="color">Development</strong></span>
                      <Link href="#">
                        <h5 className="it-blog-3__title space">Does My Website Need
                          Any Blog?</h5>
                      </Link>
                      <Link href="/blog-details"
                        className="it-blog-3__link-2 d-flex align-items-center justify-content-between">
                        Read More
                        <i className="flaticon-right-arrow"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".5s">
                <div className="it-blog-3__item z-index space it-blog-2__item-color">
                  <Link href="#">
                    <div className="it-blog-3__thumb fix">
                      <img className="w-100" src="assets/img/blog/blog-2-3.jpg" alt="rk-theme" />
                    </div>
                  </Link>
                  <div className="it-blog-3__content-box">
                    <div className="it-blog-3__content">
                      <span className="it-blog-3__meta">By admin _ <strong
                        className="color">Development</strong></span>
                      <Link href="#">
                        <h5 className="it-blog-3__title space">A Simple Social Media Marketing List</h5>
                      </Link>
                      <Link href="/blog-details"
                        className="it-blog-3__link-2 d-flex align-items-center justify-content-between">
                        Read More
                        <i className="flaticon-right-arrow"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".7s">
                <div className="it-blog-3__item z-index space it-blog-2__item-color">
                  <Link href="#">
                    <div className="it-blog-3__thumb fix">
                      <img className="w-100" src="assets/img/blog/blog-2-2.jpg" alt="rk-theme" />
                    </div>
                  </Link>
                  <div className="it-blog-3__content-box">
                    <div className="it-blog-3__content">
                      <span className="it-blog-3__meta">By admin _ <strong
                        className="color">Development</strong></span>
                      <Link href="#">
                        <h5 className="it-blog-3__title space">What is Holding Back The IT Solution</h5>
                      </Link>
                      <Link href="/blog-details"
                        className="it-blog-3__link-2 d-flex align-items-center justify-content-between">
                        Read More
                        <i className="flaticon-right-arrow"></i>
                      </Link>
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

export default BlogHomeThree;