

import Link from 'next/link';
import React from 'react';

const BlogHomeOne = () => {
  return (
    <>
      <div className="it-blog__area pt-120 pb-85 fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-6">
              <div className="it-blog__section-title">
                <span className="it-section-subtitle">WHAT ELSE HERE</span>
                <h4 className="it-section-title">The Best Tech Solution <br />for Our Clients</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 d-none d-lg-block">
              <div className="it-blog__button text-end">
                <Link className="it-btn hover-2" href="/blog-details"><span>VIEW MORE</span></Link>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="it-blog__item">
                <div className="it-blog__thumb p-relative">
                  <img className="w-100" src="assets/img/blog/blog-1-1.png" alt="rk-theme" />
                    <div className="it-blog__icon">
                      <Link href="#"><i
                        className="flaticon-up-right-arrow"></i></Link>
                    </div>
                </div>
                <div className="it-blog__content">
                  <div className="it-blog__meta">
                    <span>March 23, 2023 _ Development</span>
                  </div>
                  <h4 className="it-blog__title"><Link href="/blog-details">A Simple Social Media Marketing List</Link></h4>
                  <Link href="#">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-blog__item">
                <div className="it-blog__thumb p-relative">
                  <img className="w-100" src="assets/img/blog/blog-1-2.png" alt="rk-theme" />
                    <div className="it-blog__icon">
                      <Link href="#"><i className="flaticon-up-right-arrow"></i></Link>
                    </div>
                </div>
                <div className="it-blog__content">
                  <div className="it-blog__meta">
                    <span>March 23, 2023 _ Development</span>
                  </div>
                  <h4 className="it-blog__title"><Link href="/blog-details">Does My Website Need Any Blog?</Link></h4>
                  <Link href="#">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="it-blog__item">
                <div className="it-blog__thumb p-relative">
                  <img className="w-100" src="assets/img/blog/blog-1-3.png" alt="rk-theme" />
                    <div className="it-blog__icon">
                      <Link href="#"><i className="flaticon-up-right-arrow"></i></Link>
                    </div>
                </div>
                <div className="it-blog__content">
                  <div className="it-blog__meta">
                    <span>March 23, 2023 _ Development</span>
                  </div>
                  <h4 className="it-blog__title"><Link href="/blog-details">What is Holding Back The IT Solution</Link></h4>
                  <Link href="#">Read More</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHomeOne;