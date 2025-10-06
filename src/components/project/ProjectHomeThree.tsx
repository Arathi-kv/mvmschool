
"use client"

import Link from 'next/link';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const ProjectHomeThree = () => {
  return (
    <>
      <div className="it-project-5__area pt-115 pb-115">
        <div className="it-project-5__plr">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-project-5__section-box text-center">
                  <span className="it-section-subtitle-5">OUR SHOWCASE</span>
                  <h4 className="it-section-title">Check Our Latest Projects</h4>
                </div>
              </div>
            </div>
            <div className="it-project-5__wrapper">
              <Swiper
                loop={true}
                slidesPerView={4}
                spaceBetween={30}
                autoplay={true}
                modules={[Autoplay, Pagination]}
                pagination={{
                  el: ".project-5-slider-dots",
                  clickable: true,
                }}
                breakpoints={{
                  '1200': {
                    slidesPerView: 4,
                  },
                  '992': {
                    slidesPerView: 3,
                  },
                  '768': {
                    slidesPerView: 2,
                  },
                  '576': {
                    slidesPerView: 1,
                  },
                  '0': {
                    slidesPerView: 1,
                  },
                }}
                className="swiper-container it-project-5__active">

                <SwiperSlide className="swiper-slide">
                  <div className="it-project-5__item fix">
                    <img src="assets/img/project/project-5-1.jpg" alt="rk-theme" />
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
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="it-project-5__item fix">
                    <img src="assets/img/project/project-5-2.jpg" alt="rk-theme" />
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
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="it-project-5__item fix">
                    <img src="assets/img/project/project-5-3.jpg" alt="rk-theme" />
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
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="it-project-5__item fix">
                    <img src="assets/img/project/project-5-4.jpg" alt="rk-theme" />
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
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="it-project-5__item fix">
                    <img src="assets/img/project/project-5-3.jpg" alt="rk-theme" />
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
                </SwiperSlide>


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