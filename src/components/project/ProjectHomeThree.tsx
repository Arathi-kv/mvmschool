"use client";

import Link from "next/link";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectHomeThree = () => {
  return (
    <>
      <div className="it-project-5__area pt-115 pb-10">
        <div className="it-project-5__plr">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-project-5__section-box text-center">
                  <span className="it-section-subtitle-5">OUR CURRICULUM</span>
                  <h4 className="it-section-title">
                    A Journey of Learning and Growth
                  </h4>
                </div>
              </div>
            </div>

            <div className="it-project-5__wrapper">
              <Swiper
                loop={true}
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay, Pagination]}
                pagination={{
                  el: ".project-5-slider-dots",
                  clickable: true,
                }}
                breakpoints={{
                  1200: { slidesPerView: 4 },
                  992: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  576: { slidesPerView: 1 },
                  0: { slidesPerView: 1 },
                }}
                className="swiper-container it-project-5__active"
              >
                {[
                  {
                    img: "assets/img/curriculum/lkg-home.jpg",
                    title: "K.G Section",
                  },
                  {
                    img: "assets/img/curriculum/lp-home.jpg",
                    title: "Primary Section (L.P)",
                  },
                  {
                    img: "assets/img/curriculum/up-home.jpg",
                    title: "Upper Primary (U.P)",
                  },
                  {
                    img: "assets/img/curriculum/highSchoolhome.jpg",
                    title: "High School Section",
                  },
                  {
                    img: "assets/img/curriculum/highsechome.jpg",
                    title: "Higher Secondary Section",
                  },
                  {
                    img: "assets/img/curriculum/moralEdu-home.jpg",
                    title: "Moral / Islamic Education",
                  },
                ].map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="it-project-5__item fix position-relative overflow-hidden rounded-3 shadow-sm">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-100 rounded-3"
                        style={{
                          height: "350px", // 
                          objectFit: "cover",
                        }}
                      />

                      {/* Permanent Text Overlay at Bottom */}
                      <div
                        className="it-project-5__text text-center"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          background: "rgba(0, 0, 0, 0.6)",
                          color: "#fff",
                          padding: "15px 10px",
                          opacity: 1,
                          visibility: "visible",
                        }}
                      >
                        <Link
                          href="/curriculum"
                          className="d-inline-block mb-1"
                        >
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </Link>
                        <div>
                          <span
                            style={{
                              fontSize: "13px",
                              display: "block",
                              lineHeight: "1.2",
                              letterSpacing: "0.5px",
                            }}
                          >
                            Curriculum
                          </span>
                          <h6
                            style={{
                              margin: "5px 0 0",
                              fontSize: "16px",
                              fontWeight: 600,
                            }}
                          >
                            {item.title}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="project-5-slider-dots"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHomeThree;
