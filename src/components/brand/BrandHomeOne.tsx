
"use client"

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import brand_img_1 from "@/assets/img/brand/brand-1-1.png";
import brand_img_2 from "@/assets/img/brand/brand-1-2.png";
import brand_img_3 from "@/assets/img/brand/brand-1-3.png";
import brand_img_4 from "@/assets/img/brand/brand-1-4.png";
import brand_img_5 from "@/assets/img/brand/brand-1-5.png";


const brand_data = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
]



const BrandHomeOne = ({ style_2 }: any) => {
  return (
    <>
      <div className={`it-brand__area ${style_2 ? "it-brand__border pt-110 pb-100" : ""}`}>
        <div className="container">
          <div className={`${style_2 ? "" : "it-brand__border-top pt-80 pb-80"}`}>
            <div className="row">
              <div className="it-brand__wrapper">
                <Swiper
                  speed={1000}
                  loop={true}
                  slidesPerView={5}
                  spaceBetween={30}
                  autoplay={true}
                  modules={[Autoplay, Pagination]}
                  pagination={{
                    el: ".testimonial-slider-dots",
                    clickable: true,
                  }}
                  breakpoints={{
                    '1200': {
                      slidesPerView: 5,
                    },
                    '992': {
                      slidesPerView: 5,
                    },
                    '768': {
                      slidesPerView: 4,
                    },
                    '576': {
                      slidesPerView: 3,
                    },
                    '0': {
                      slidesPerView: 2,
                    },
                  }}
                  className="swiper-container it-brand__active">
                  {brand_data.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="it-brand__item">
                        <Image src={item} alt="rk-theme" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandHomeOne;