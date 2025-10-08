
"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';


const HeroHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div className="it-slider__wrapper z-index fix">
     <Swiper
  loop={true}
  slidesPerView={1}
  spaceBetween={0}
  effect="fade"
  autoplay={{
    delay: 5000, // 5 seconds per slide
    disableOnInteraction: false, // continues autoplay after user interaction
  }}
  modules={[Autoplay, EffectFade, Pagination]}
  pagination={{ el: ".it-slider-dots", clickable: true }}
  breakpoints={{
    1200: { slidesPerView: 1 },
    992: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    576: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  }}
  className="swiper-container it-slider__active p-relative"
>


          <SwiperSlide className="swiper-slide">
            <div className="it-slider__area it-slider__height it-slider__overlay p-relative">
              <div className="it-slider__shape-1">
                <img src="assets/img/slider/slider-shape-3-2.png" alt="rk-theme" />
              </div>
              <div className="it-slider__shape-2">
                <img src="assets/img/slider/shape-4-2.png" alt="rk-theme" />
              </div>
              <div className="it-slider__bg" style={{ backgroundImage: `url(/assets/img/slider/slider1.jpg)` }}></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="it-slider__content-wrap">
                      <div className="it-slider__content">
                       
                        <h2 className="it-slider-title pb-30">M.V.M  <br />Higher Secondary School</h2>
                      </div>
                      <div className="it-slider__button d-flex align-items-center">
                        <Link className="it-btn" href="/about-us"><span>discover more</span></Link>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="it-slider__area it-slider__height p-relative it-slider__overlay">
              <div className="it-slider__shape-1">
                <img src="assets/img/slider/slider-shape-3-2.png" alt="rk-theme" />
              </div>
              <div className="it-slider__shape-2">
                <img src="assets/img/slider/shape-4-2.png" alt="rk-theme" />
              </div>
              <div className="it-slider__bg " style={{ backgroundImage: `url(/assets/img/slider/slider2.jpg)` }}></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="it-slider__content-wrap">
                      <div className="it-slider__content">
                        
                        <h2 className="it-slider-title pb-30">M.V.M  <br />Higher Secondary School</h2>
                      </div>
                      <div className="it-slider__button d-flex align-items-center">
                        <Link className="it-btn" href="/about-us"><span>discover more</span></Link> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="it-slider__area it-slider__height it-slider__overlay p-relative">
              <div className="it-slider__shape-1">
                <img src="assets/img/slider/slider-shape-3-2.png" alt="rk-theme" />
              </div>
              <div className="it-slider__shape-2">
                <img src="assets/img/slider/shape-4-2.png" alt="rk-theme" />
              </div>
              <div className="it-slider__bg" style={{ backgroundImage: `url(/assets/img/slider/slider3.jpg)` }}></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="it-slider__content-wrap">
                      <div className="it-slider__content">
                        <h2 className="it-slider-title pb-30">M.V.M <br /> Higher Secondary School</h2>
                      </div>
                      <div className="it-slider__button d-flex align-items-center">
                        <Link className="it-btn" href="/about-us"><span>discover more</span></Link> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper> 
        {/* <div className="it-slider-dots"></div>       */}


      </div> 

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"rhu7LAnc_kA"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroHomeOne;