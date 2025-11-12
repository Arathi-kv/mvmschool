
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
                    <div className="it-testimonial__item text-left p-relative ">
                     
                      <div className="it-testimonial__author-info">
                        <h5 className="it-testimonial__author-name text-center" style={{ margin: "20px 0" }}>Vision</h5>
                        <p>To uplift the socially and educationally weaker sections in our
                            locality, utilizing the latest and innovative educational technology and
                            teaching methodology, and to bring up the forthcoming generations
                            capable of withstanding the challenges of the modern world.
                            
                            To enhance the linguistic, communicative, cognitive and creative
                            talents of our students, to facilitate excellence in their professional as
                            well as personal life and to render them assistance to achieve self actu-
                            alization.</p><br />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="it-testimonial__item p-relative text-left">
                        <div className="it-testimonial__author-info">
                        <h5 className="it-testimonial__author-name text-center" style={{ margin: "20px 0" }}>
                        Mission
                        </h5>
                       <p>Bringing up future generations with a creative mind set, scientific
                          temperament and positive outlook towards the fellow beings.
                          Bringing out the innate potentialities in the toddlers, by exposing
                          them to the rich and vibrant environment ideally and judiciously main-
                          tained in the campus.<br />
                          Mould our products into dynamic and balanced personalities,
                          capable of reaching the Pre- Predetermined goals by channelizing the
                          academic excellence imbibed from our class rooms.</p>< br />
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