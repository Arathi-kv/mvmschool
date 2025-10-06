
"use client"

import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const TestimonialHomeTwo = ({ style_2 }: any) => {
  return (
    <> 
      <div className={`it-testimonial-4__area fix grey-bg-2 p-relative pt-90 pb-120  ${style_2 ? "" : "it-testimonial-style-2"}`}>
        <div className="it-testimonial-4__shape-2">
          <img src="assets/img/testimonial/shape-4-2.png" alt="rk-theme" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-testimonial-4__section-box text-center mb-50">
                <span className={`${style_2 ? "it-section-subtitle-5" : "it-section-subtitle-4"}`}>
                  {/* <em>//</em>  */}
                  VISION & MISSION</span>
                <h4 className="it-section-title">Our Client Testimonials</h4>
              </div>
            </div>
          </div>
          <div className="it-testimonial-4__wrapper">
            <Swiper
              loop={true}
              slidesPerView={2}
              spaceBetween={30}
              autoplay={true}
              modules={[Autoplay]}
              breakpoints={{
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
              className="swiper-container it-testimonial-4__active">

              <SwiperSlide className="swiper-slide">
                <div className="it-testimonial-4__item p-relative">
                  <div className="it-testimonial-4__top-wrapper d-flex align-items-center">
                    <div className="it-testimonial-4__top-thumb">
                      <img src="assets/img/testimonial/author-4-1.png" alt="rk-theme" />
                    </div>
                    <div className="it-testimonial-4__author-info pt-35">
                      <span>Developer</span>
                      <h6>Mitchel Mars</h6>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>

                    {style_2 &&
                      <div className="it-testimonial-4__quot">
                        <span><i className="flaticon-quote"></i></span>
                      </div>
                    }


                  </div>
                  <div className="it-testimonial-4__text">
                    <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliqAenean sollicitudin,
                      lorem is simply free text quis bibendum. There are many variations of
                      passages of availabl Aenean </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="it-testimonial-4__item p-relative">
                  <div className="it-testimonial-4__top-wrapper d-flex align-items-center">
                    <div className="it-testimonial-4__top-thumb">
                      <img src="assets/img/testimonial/author-4-2.png" alt="rk-theme" />
                    </div>
                    <div className="it-testimonial-4__author-info pt-35">
                      <span>DESIGNER</span>
                      <h6>Ricky Ponting</h6>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    {style_2 &&
                      <div className="it-testimonial-4__quot">
                        <span><i className="flaticon-quote"></i></span>
                      </div>
                    }
                  </div>
                  <div className="it-testimonial-4__text">
                    <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliqAenean sollicitudin,
                      lorem is simply free text quis bibendum. There are many variations of
                      passages of availabl Aenean </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="it-testimonial-4__item p-relative">
                  <div className="it-testimonial-4__top-wrapper d-flex align-items-center">
                    <div className="it-testimonial-4__top-thumb">
                      <img src="assets/img/testimonial/author-4-1.png" alt="rk-theme" />
                    </div>
                    <div className="it-testimonial-4__author-info pt-35">
                      <span>Developer</span>
                      <h6>Mitchel Mars</h6>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>

                    {style_2 &&
                      <div className="it-testimonial-4__quot">
                        <span><i className="flaticon-quote"></i></span>
                      </div>
                    }

                  </div>
                  <div className="it-testimonial-4__text">
                    <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliqAenean sollicitudin,
                      lorem is simply free text quis bibendum. There are many variations of
                      passages of availabl Aenean </p>
                  </div>
                </div>
              </SwiperSlide>




            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialHomeTwo;