
"use client"

import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const setting = {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  autoplay: true,
  breakpoints: {
    '1400': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 2,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 1,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.test-next',
    prevEl: '.test-prev',
  },
}

const BusinessAbout = () => {
  return (
    <>
      <div className="it-business-3__area pt-120 pb-120 fix">
        <div className="container-fluid g-0">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-business-3__section-box text-center pb-55">
                <span className="it-section-subtitle">OUR BUSINESS INDUSTRIES</span>
                <h4 className="it-section-title">Tecch Business Industries <br /> We Serve Always</h4>
              </div>
            </div>
          </div>
          <div className="it-business-3__plr">
            <div className="it-business-3__wrapper">
              <Swiper
                loop={true}
                slidesPerView={3}
                spaceBetween={50}
                autoplay={true}
                modules={[Autoplay, Navigation]}
                navigation={{
                  nextEl: '.test-next',
                  prevEl: '.test-prev',
                }}
                breakpoints={{
                  '1400': {
                    slidesPerView: 3,
                  },
                  '1200': {
                    slidesPerView: 2,
                  },
                  '992': {
                    slidesPerView: 2,
                  },
                  '768': {
                    slidesPerView: 1,
                  },
                  '576': {
                    slidesPerView: 1,
                  },
                  '0': {
                    slidesPerView: 1,
                  },
                }}
                className="swiper-container it-business-3__active">

                <SwiperSlide className="swiper-slide">
                  <div className="it-business-3__item d-flex p-relative">
                    <div className="it-business-3__thumb">
                      <img src="assets/img/business/author-3-2.png" alt="rk-theme" />
                    </div>
                    <div className="it-business-3__text">
                      <h5 className="it-business-3__title">Gaming and <br />
                        Entertainment</h5>
                      <p>Sed et aliquam lectus. Etiam augulectus Suspendisse eget orci conv dignissim nibh eget, blandit lacus</p>
                    </div>
                    <div className="it-business-3__big-text">
                      <span>G</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="it-business-3__item d-flex p-relative">
                    <div className="it-business-3__thumb">
                      <img src="assets/img/business/author-3-1.png" alt="rk-theme" />
                    </div>
                    <div className="it-business-3__text">
                      <h5 className="it-business-3__title">Business and <br />
                        Finance</h5>
                      <p>Sed et aliquam lectus. Etiam augulectus Suspendisse eget orci conv dignissim nibh eget, blandit lacus</p>
                    </div>
                    <div className="it-business-3__big-text">
                      <span>B</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="it-business-3__item d-flex p-relative">
                    <div className="it-business-3__thumb">
                      <img src="assets/img/business/author-3-3.png" alt="rk-theme" />
                    </div>
                    <div className="it-business-3__text">
                      <h5 className="it-business-3__title">Information <br />
                        Technology</h5>
                      <p>Sed et aliquam lectus. Etiam augulectus Suspendisse eget orci conv dignissim nibh eget, blandit lacus</p>
                    </div>
                    <div className="it-business-3__big-text">
                      <span>T</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="it-business-3__item d-flex p-relative">
                    <div className="it-business-3__thumb">
                      <img src="assets/img/business/author-3-1.png" alt="rk-theme" />
                    </div>
                    <div className="it-business-3__text">
                      <h5 className="it-business-3__title">Business and <br />
                        Finance</h5>
                      <p>Sed et aliquam lectus. Etiam augulectus Suspendisse eget orci conv dignissim nibh eget, blandit lacus</p>
                    </div>
                    <div className="it-business-3__big-text">
                      <span>B</span>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessAbout;