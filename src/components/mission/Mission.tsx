
"use client"

import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const setting = {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: true,
  speed: 1000,
  breakpoints: {
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
  pagination: {
    el: ".testimonial-slider-dots",
    clickable: true,
  },
}

const TestimonialHomeOne = () => {
  return (
    <>
      <div className="it-testimonial__area it-testimonial__space">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-testimonial__section-box text-center">
                <span className="it-section-subtitle">VISION & MISSION</span>
                <h4 className="it-section-title">What We Stand For</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="it-testimonial__wrapper">
                <Swiper
                  loop={true}
                  slidesPerView={2}
                  spaceBetween={30}
                  autoplay={true}
                  modules={[Autoplay, Pagination]}
                  pagination={{
                    el: ".testimonial-slider-dots",
                    clickable: true,
                  }}
                  breakpoints={
                    {
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
                    }
                  }
                  className="swiper-container it-testimonial__active">

                  <SwiperSlide className="swiper-slide">
                    <div className="it-testimonial__item text-center p-relative">
                     
                      <div className="it-testimonial__author-info">
                        <h5 className="it-testimonial__author-name" style={{ margin: "20px 0" }}>Vision</h5>
                        <p>The vision of M.V.M.R.H.S.S  is that to provide quality education for  <br />all pupil with affordable cost.</p><br />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="it-testimonial__item p-relative text-center">
                        <div className="it-testimonial__author-info">
                        <h5 className="it-testimonial__author-name" style={{ margin: "20px 0" }}>
                        Mission
                        </h5>
                       <p>Our mission is to provide education for all religious groups without considering caste or creed. School provides education for all <br /> religious groups,such as Hindu, Muslim, and Christian etc. </p>
                      </div>
                    </div>
                  </SwiperSlide>

                 
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialHomeOne;