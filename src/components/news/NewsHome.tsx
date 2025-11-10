import Link from "next/link";
import React from "react";

const BlogHomeTwo = () => {
  return (
    <>
      <div className="it-blog-4__area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <div className="it-blog-4__section-title">
                <span className="it-section-subtitle-4">Whats happening</span>
                <h4 className="it-section-title">Our Latest News & Events</h4>
              </div>
            </div>
          </div>

          <div className="row">
            {/* News 1 */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-blog-4__item">
                <div className="it-blog-4__thumb-box p-relative">
                  <div className="it-blog-4__thumb p-relative">
                    <img
                      className="w-100"
                      src="assets/img/news/news1.jpg"
                      alt="Admissions Open"
                    />
                    <div className="it-blog-4__icon">
                      <a
                        className="popup-image"
                        href="assets/img/news/news1.jpg"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="it-blog-4__date">
                    <span>10 <br /> Nov</span>
                  </div>
                </div>

                <div className="it-blog-4__content">
                  <Link href="/news">
                    <h4 className="it-blog-4__title hover:text-theme">
                      Admissions Open 
                    </h4>
                  </Link>
                  <p>
                    Admissions are now open for all classes from K.G. to Higher Secondary.
                    Enroll today and join our journey of learning.
                  </p>
                  <Link href="/news" className="it-blog-4__readmore">
                    Read More
                    <i className="fa-sharp fa-regular fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* News 2 */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="it-blog-4__item">
                <div className="it-blog-4__thumb-box p-relative">
                  <div className="it-blog-4__thumb p-relative">
                    <img
                      className="w-100"
                      src="assets/img/news/news2.jpg"
                      alt="Campus Upgrades"
                    />
                    <div className="it-blog-4__icon">
                      <a
                        className="popup-image"
                        href="assets/img/news/news2.jpg"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="it-blog-4__date">
                    <span>28 <br /> Oct</span>
                  </div>
                </div>

                <div className="it-blog-4__content">
                <Link href="/news">
                    <h4 className="it-blog-4__title hover:text-theme">
                      Campus Facilities Upgraded
                    </h4>
                  </Link>
                  <p>
                    New classrooms, labs, and library upgrades completed to support
                    modern learning and student development.
                  </p>
                  <Link href="/news" className="it-blog-4__readmore">
                    Read More
                    <i className="fa-sharp fa-regular fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* News 3 */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="it-blog-4__item">
                <div className="it-blog-4__thumb-box p-relative">
                  <div className="it-blog-4__thumb p-relative">
                    <img
                      className="w-100"
                      src="assets/img/news/news3.jpg"
                      alt="Comprehensive Curriculum"
                    />
                    <div className="it-blog-4__icon">
                      <a
                        className="popup-image"
                        href="assets/img/news/news3.jpg"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="it-blog-4__date">
                    <span>15 <br /> Sep</span>
                  </div>
                </div>

                <div className="it-blog-4__content">
                 <Link href="/news">
                    <h4 className="it-blog-4__title hover:text-theme">
                      Holistic Curriculum Approach
                    </h4>
                  </Link>
                  <p>
                    From K.G. to Higher Secondary, our curriculum nurtures academic
                    excellence and strong moral values.
                  </p>
                  <Link href="/news" className="it-blog-4__readmore">
                    Read More
                    <i className="fa-sharp fa-regular fa-arrow-right ml-1"></i>
                  </Link>
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
