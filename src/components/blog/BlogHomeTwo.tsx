

import Link from 'next/link';
import React from 'react';

const BlogHomeTwo = () => {
  return (
    <>
      <div className="it-blog-4__area  pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-blog-4__section-title text-center">
                <span className="it-section-subtitle-4">
                  {/* <em>//</em>  */}
                  Whats happening</span>
                <h4 className="it-section-title">Our Latest Blog & News</h4>
              </div>
            </div>
          </div>
          <div className="row">
            
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="it-blog-4__item">
                <div className="it-blog-4__thumb-box p-relative">
                  <div className="it-blog-4__thumb p-relative">
                    <img className="w-100" src="assets/img/blog/blog-4-1.jpg" alt="rk-theme" />
                    <div className="it-blog-4__icon">
                      <a className="popup-image" href="assets/img/blog/blog-4-1.jpg"><i
                        className="fa-solid fa-plus"></i></a>
                    </div>
                  </div>
                  <div className="it-blog-4__date">
                    <span>29 <br /> May</span>
                  </div>
                </div>
                <div className="it-blog-4__content">
                  <div className="it-blog-4__meta">
                    <span>March 23, 2023 _ Development</span>
                  </div>
                  <Link href="#">
                    <h4 className="it-blog-4__title">A Simple Social Media <br />Marketing List</h4>
                  </Link>
                  <Link href="#">Read More<i
                    className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-blog-4__item">
                <div className="it-blog-4__thumb-box p-relative">
                  <div className="it-blog-4__thumb p-relative">
                    <img className="w-100" src="assets/img/blog/blog-4-2.jpg" alt="rk-theme" />
                    <div className="it-blog-4__icon">
                      <a className="popup-image" href="assets/img/blog/blog-4-2.jpg"><i
                        className="fa-solid fa-plus"></i></a>
                    </div>
                  </div>
                  <div className="it-blog-4__date">
                    <span>29 <br /> May</span>
                  </div>
                </div>
                <div className="it-blog-4__content">
                  <div className="it-blog-4__meta">
                    <span>By admin _ Solution</span>
                  </div>
                  <Link href="#">
                    <h4 className="it-blog-4__title">Easy to Use Software New
                      Innovation</h4>
                  </Link>
                  <Link href="#">Read More<i
                    className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="it-blog-4__item">
                <div className="it-blog-4__thumb-box p-relative">
                  <div className="it-blog-4__thumb p-relative">
                    <img className="w-100" src="assets/img/blog/blog-4-3.jpg" alt="rk-theme" />
                    <div className="it-blog-4__icon">
                      <a className="popup-image" href="assets/img/blog/blog-4-3.jpg"><i
                        className="fa-solid fa-plus"></i></a>
                    </div>
                  </div>
                  <div className="it-blog-4__date">
                    <span>29 <br /> May</span>
                  </div>
                </div>
                <div className="it-blog-4__content">
                  <div className="it-blog-4__meta">
                    <span>March 23, 2023 _ Development</span>
                  </div>
                  <Link href="#">
                    <h4 className="it-blog-4__title">What is Holding Back the IT Solution</h4>
                  </Link>
                  <Link href="#">Read More<i
                    className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHomeTwo;