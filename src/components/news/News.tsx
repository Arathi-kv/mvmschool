import Link from 'next/link';
import React from 'react';

const BlogHomeTwo = () => {
  return (
    <>
      <div className="it-blog-4__area pt-100 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-blog-4__section-title text-center">
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
                      <a className="popup-image" href="assets/img/news/news1.jpg">
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="it-blog-4__date">
                    <span>10 <br /> Nov</span>
                  </div>
                </div>
                <div className="it-blog-4__content">
                  <div className="it-blog-4__meta">
                    <span>November 10, 2025 _ Announcement</span>
                  </div>
                  <Link href="#">
                    <h4 className="it-blog-4__title">
                      Admissions Open for the Academic Year
                    </h4>
                  </Link>
                  <p>
                    M.V.M Higher Secondary School is now accepting applications for
                    all classes from K.G. to Higher Secondary. Enroll now and be part
                    of a community that values quality education and holistic growth.
                  </p>
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
                      <a className="popup-image" href="assets/img/news/news2.jpg">
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="it-blog-4__date">
                    <span>28 <br /> Oct</span>
                  </div>
                </div>
                <div className="it-blog-4__content">
                  <div className="it-blog-4__meta">
                    <span>October 28, 2025 _ Development</span>
                  </div>
                  <Link href="#">
                    <h4 className="it-blog-4__title">
                      Campus Facilities Upgraded for Student Excellence
                    </h4>
                  </Link>
                  <p>
                    Our campus now features upgraded classrooms, computer labs, library,
                    prayer hall, and play areas — all designed to support academic and
                    moral development for every student.
                  </p>
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
                      <a className="popup-image" href="assets/img/news/news3.jpg">
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="it-blog-4__date">
                    <span>15 <br /> Sep</span>
                  </div>
                </div>
                <div className="it-blog-4__content">
                  <div className="it-blog-4__meta">
                    <span>September 15, 2025 _ Curriculum</span>
                  </div>
                  <Link href="#">
                    <h4 className="it-blog-4__title">
                      A Complete Curriculum from K.G. to Higher Secondary
                    </h4>
                  </Link>
                  <p>
                    With structured academic and moral education, M.V.M provides a
                    continuous learning experience from Kindergarten to Higher Secondary
                    level under experienced educators.
                  </p>
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
