
"use client"

import Link from 'next/link';
import React from 'react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const setting = {
  loop: true,
  slidesPerView: 1,
  arrows: true,
  autoplay: true,
  effect: 'fade',
  breakpoints: {
    '1200': {
      slidesPerView: 1,
    },
    '992': {
      slidesPerView: 1,
    },
    '768': {
      slidesPerView: 1,
    },
    '576': {
      slidesPerView: 1,
      arrows: false,
    },
    '0': {
      slidesPerView: 1,
      arrows: false,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.test-next',
    prevEl: '.test-prev',
  },
}

const HeroHomeTwo = () => {
  return (
    <>
      <div className="it-slider-4__wrapper p-relative">
        <Swiper
          loop={true}
          slidesPerView={1}
          autoplay={true}
          effect='fade'
          modules={[Autoplay, EffectFade, Navigation]}
          navigation={{
            nextEl: '.test-next',
            prevEl: '.test-prev',
          }}
          breakpoints={{
            '1200': {
              slidesPerView: 1,
            },
            '992': {
              slidesPerView: 1,
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
          className="swiper-container it-slider-4__active">

          <SwiperSlide className="swiper-slide">
            <div
              className="it-slider-4__area d-flex align-items-center justify-content-center p-relative it-slider-4__height">
              <div className="it-slider-4__bg" style={{ backgroundImage: `url(/assets/img/slider/slider-4-1.jpg)` }}></div>
              <div className="it-slider-4__shape-1 d-none d-lg-block">
                <img src="assets/img/slider/shape-4-2.png" alt="rk-theme" />
              </div>
              <div className="it-slider-4__shape-2 d-none d-lg-block">
                <img src="assets/img/slider/shape-4-3.png" alt="rk-theme" />
              </div>
              <div className="it-slider-4__shape-3 d-none d-md-block">
                <img src="assets/img/slider/shape-4-4.png" alt="rk-theme" />
              </div>
              <div className="it-slider-4__shape-4 d-none d-md-block">
                <img src="assets/img/slider/shape-4-5.png" alt="rk-theme" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="it-slider-4__content text-center z-index-3">
                      <div className="it-slider-4__icon pb-15">
                        <img src="assets/img/slider/shape-4-1.png" alt="rk-theme" />
                      </div>
                      <h2 className="it-slider-2-title pb-30">INNOVATING <br />TECH SOLUTION</h2>
                    </div>
                    <div className="it-slider-4__button text-center">
                      <Link className="it-red-btn" href="/about-us"><span>discover more</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="it-slider-4__area p-relative d-flex align-items-center justify-content-center it-slider-4__height">
              <div className="it-slider-4__bg" style={{ backgroundImage: `url(/assets/img/slider/slider-4-2.jpg)` }}></div>
              <div className="it-slider-4__shape-1 d-none d-lg-block">
                <img src="assets/img/slider/shape-4-2.png" alt="rk-theme" />
              </div>
              <div className="it-slider-4__shape-2 d-none d-lg-block">
                <img src="assets/img/slider/shape-4-3.png" alt="rk-theme" />
              </div>
              <div className="it-slider-4__shape-3 d-none d-md-block">
                <img src="assets/img/slider/shape-4-4.png" alt="rk-theme" />
              </div>
              <div className="it-slider-4__shape-4 d-none d-md-block">
                <img src="assets/img/slider/shape-4-5.png" alt="rk-theme" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="it-slider-4__content text-center z-index-3">
                      <div className="it-slider-4__icon pb-15">
                        <img src="assets/img/slider/shape-4-1.png" alt="rk-theme" />
                      </div>
                      <h2 className="it-slider-2-title pb-30">INNOVATING <br />TECH SOLUTION</h2>
                    </div>
                    <div className="it-slider-4__button text-center">
                      <Link className="it-red-btn" href="/about-us"><span>discover more</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="it-slider-4__area p-relative d-flex align-items-center justify-content-center it-slider-4__height">
              <div className="it-slider-4__bg" style={{ backgroundImage: `url(/assets/img/slider/slider-4-3.jpg)` }}></div>
              <div className="it-slider-4__shape-1 d-none d-lg-block">
                <img src="assets/img/slider/shape-4-2.png" alt="rk-theme" />
              </div>
              <div className="it-slider-4__shape-2 d-none d-lg-block">
                <img src="assets/img/slider/shape-4-3.png" alt="rk-theme" />
              </div>
              <div className="it-slider-4__shape-3 d-none d-md-block">
                <img src="assets/img/slider/shape-4-4.png" alt="rk-theme" />
              </div>
              <div className="it-slider-4__shape-4 d-none d-md-block">
                <img src="assets/img/slider/shape-4-5.png" alt="rk-theme" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="it-slider-4__content text-center z-index-3">
                      <div className="it-slider-4__icon pb-15">
                        <img src="assets/img/slider/shape-4-1.png" alt="rk-theme" />
                      </div>
                      <h2 className="it-slider-2-title pb-30">INNOVATING <br />TECH SOLUTION</h2>
                    </div>
                    <div className="it-slider-4__button text-center">
                      <Link className="it-red-btn" href="/about-us"><span>discover more</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>



          <div className="it-slider-4__arrow-box">
            <div className="test-next">
              <button>
                <i className="fa-regular fa-arrow-right"></i>
              </button>
            </div>
            <div className="test-prev">
              <button>
                <i className="fa-regular fa-arrow-left"></i>
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default HeroHomeTwo;