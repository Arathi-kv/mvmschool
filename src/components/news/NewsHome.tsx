"use client";
import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "yet-another-react-lightbox/styles.css";

// Disable SSR for Lightbox to avoid hydration errors
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

const BlogHomeTwo = () => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const handleOpen = (src: string) => setOpenImage(src);
  const handleClose = () => setOpenImage(null);

  return (
    <>
      <div className="it-blog-4__area pt-120 pb-90">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="col-12 text-center">
              <div className="it-blog-4__section-title">
                <span className="it-section-subtitle-4">Whats happening</span>
                <h4 className="it-section-title">Our Latest News & Events</h4>
              </div>
            </div>
          </div>

          {/* Two News Columns */}
          <div className="row">
            {/* News Item 1 */}
            <div
              className="col-lg-6 col-md-6 mb-30 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-blog-4__item h-100">
                <div className="it-blog-4__thumb-box p-relative">
                  <div
                    className="it-blog-4__thumb p-relative"
                    style={{ maxHeight: "320px", overflow: "hidden" }}
                  >
                    <img
                      className="w-100 object-cover"
                      src="assets/img/news/news1.jpg"
                      alt="Admissions Open"
                    />
                    <div className="it-blog-4__icon">
                      <button
                        onClick={() => handleOpen("assets/img/news/news1.jpg")}
                        className="popup-image"
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="it-blog-4__date">
                    <span>
                      10 <br /> Nov
                    </span>
                  </div>
                </div>

                <div className="it-blog-4__content">
                  <Link href="/news">
                    <h4 className="it-blog-4__title hover:text-theme">
                      Admissions Open
                    </h4>
                  </Link>
                  <p>
                    Admissions are now open for all classes from K.G. to Higher
                    Secondary. Enroll today and join our journey of learning.
                  </p>
                  <Link href="/news" className="it-blog-4__readmore">
                    Read More
                    <i className="fa-sharp fa-regular fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* News Item 2 */}
            <div
              className="col-lg-6 col-md-6 mb-30 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="it-blog-4__item h-100">
                <div className="it-blog-4__thumb-box p-relative">
                  <div
                    className="it-blog-4__thumb p-relative"
                    style={{ maxHeight: "320px", overflow: "hidden" }}
                  >
                    <img
                      className="w-100 object-cover"
                      src="assets/img/news/news2.jpg"
                      alt="Campus Upgrades"
                    />
                    <div className="it-blog-4__icon">
                      <button
                        onClick={() => handleOpen("assets/img/news/news2.jpg")}
                        className="popup-image"
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="it-blog-4__date">
                    <span>
                      28 <br /> Oct
                    </span>
                  </div>
                </div>

                <div className="it-blog-4__content">
                  <Link href="/news">
                    <h4 className="it-blog-4__title hover:text-theme">
                      Campus Facilities Upgraded
                    </h4>
                  </Link>
                  <p>
                    New classrooms, labs, and library upgrades completed to
                    support modern learning and student development.
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

      {/* Lightbox Popup */}
      {openImage && (
        <Lightbox
          open={!!openImage}
          close={handleClose}
          slides={[{ src: openImage }]}
          carousel={{ finite: true }} // disables looping
          render={{
            buttonPrev: () => null, // hides "previous" arrow
            buttonNext: () => null, // hides "next" arrow
          }}
        />
      )}
    </>
  );
};

export default BlogHomeTwo;
