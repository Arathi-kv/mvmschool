
"use client"
import Link from 'next/link';
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
 


const BlogSidebar = () => {
  return (
    <>
      <div className="postbox__area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mb-40">
              <div className="postbox__details-wrapper">
                <div className="postbox__thumb-box mb-30">
                  <div className="postbox__main-thumb">
                    <img src="assets/img/blog/Details-1-4.jpg" alt="rk-theme" />
                  </div>
                  <div className="postbox__content-box">
                    <div className="postbox__meta">
                      <span><i className="fal fa-user"></i>April 21, 2023</span>
                      <span><i className="fal fa-user"></i>Alamgir Chowdhuri</span>
                    </div>
                    <h4 className="postbox__details-title">Best IT Technology Services you
                      can Trust</h4>
                    <Link className="it-btn hover-2 mt-15" href="/blog-details"><span>read more</span></Link>
                  </div>
                </div>
                <div className="postbox__thumb-box mb-30">
                  <div className="it-postbox__wrapper p-relative">
                    <Swiper
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={50} 
                    modules={[Autoplay, Navigation]}
                    navigation={{
                      nextEl: '.postbox-arrow-next',
                      prevEl: '.postbox-arrow-prev',
                    }}
                    breakpoints={{
                      '1400': {
                        slidesPerView: 1,
                      },
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
                    
                     className="swiper-container postbox__thumb-slider-active">

                      <SwiperSlide className="swiper-slide">
                        <div className="postbox__main-thumb">
                          <img src="assets/img/blog/Details-1-5.jpg" alt="rk-theme" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="postbox__main-thumb">
                          <img src="assets/img/blog/Details-1-4.jpg" alt="rk-theme" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="postbox__main-thumb">
                          <img src="assets/img/blog/Details-1-6.jpg" alt="rk-theme" />
                        </div>
                      </SwiperSlide>

                    </Swiper>
                    <div className="postbox__slider-arrow-wrap">
                      <button className="postbox-arrow-prev">
                        <i className="fa-solid fa-arrow-left"></i>
                      </button>
                      <button className="postbox-arrow-next">
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <div className="postbox__content-box">
                    <div className="postbox__meta">
                      <span><i className="fal fa-user"></i>April 21, 2023</span>
                      <span><i className="fal fa-user"></i>Alamgir Chowdhuri</span>
                    </div>
                    <h4 className="postbox__details-title">Tecch is a perfect solution for any
                      kind of creatives agencies</h4>
                    <Link className="it-btn hover-2 mt-15" href="/blog-details"><span>read more</span></Link>
                  </div>
                </div>
                <div className="postbox__thumb-box">
                  <div className="postbox__main-thumb">
                    <img src="assets/img/blog/Details-1-6.jpg" alt="rk-theme" />
                  </div>
                  <div className="postbox__content-box">
                    <div className="postbox__meta">
                      <span><i className="fal fa-user"></i>April 21, 2023</span>
                      <span><i className="fal fa-user"></i>Alamgir Chowdhuri</span>
                    </div>
                    <h4 className="postbox__details-title">Everything you need to learn about
                      IT Solution for your Company.</h4>
                    <Link className="it-btn hover-2 mt-15" href="/blog-details"><span>read more</span></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 mb-40">
              <div className="sidebar__wrapper-box">
                <div className="sidebar__widge-title-box">
                  <h3 className="sidebar__widget-title">Search</h3>
                </div>
                <div className="sidebar__serch mb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  <div className="sidebar__search">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="sidebar__search">
                        <input type="text" placeholder="Keywords here...." />
                        <button type="submit">
                          <i className="fal fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="sidebar__widget mb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Recent Post</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post">
                      <div className="rc__post mb-20 d-flex">
                        <div className="rc__post-thumb mr-20">
                          <Link href="#"><img src="assets/img/blog/blog-details-1.jpg" alt="rk-theme" /></Link>
                        </div>
                        <div className="rc__post-content">
                          <h3 className="rc__post-title">
                            <Link href="#">Keep Your Business Safe
                              Ensure High</Link>
                          </h3>
                          <div className="rc__meta">
                            <span>Agu 10, 2023</span>
                          </div>
                        </div>
                      </div>
                      <div className="rc__post mb-20 d-flex">
                        <div className="rc__post-thumb mr-20">
                          <Link href="#"><img src="assets/img/blog/blog-details-1-2.jpg" alt="rk-theme" /></Link>
                        </div>
                        <div className="rc__post-content">
                          <h3 className="rc__post-title">
                            <Link href="#">Weve been a strategy
                              thought leader for nearly</Link>
                          </h3>
                          <div className="rc__meta">
                            <span>Agu 10, 2023</span>
                          </div>
                        </div>
                      </div>
                      <div className="rc__post d-flex">
                        <div className="rc__post-thumb mr-20">
                          <Link href="#"><img src="assets/img/blog/blog-details-1-3.jpg" alt="rk-theme" /></Link>
                        </div>
                        <div className="rc__post-content">
                          <h3 className="rc__post-title">
                            <Link href="#">This Weeks Top Stories
                              About It</Link>
                          </h3>
                          <div className="rc__meta">
                            <span>Agu 10, 2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__widget mb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Categories</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <ul>
                      <li>
                        <Link href="/blog">Cloud Service</Link>
                      </li>
                      <li>
                        <Link href="/blog">Web Development</Link>
                      </li>
                      <li>
                        <Link href="/blog">Ui/Ux Designing</Link>
                      </li>
                      <li>
                        <Link href="/blog">IT Management</Link>
                      </li>
                      <li>
                        <Link href="/blog">Data Visualization</Link>
                      </li>
                      <li>
                        <Link href="/blog">Security System</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar__widget mb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title sm-border">Tag</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="tagcloud">
                      <a href="#">IT Technology</a><a href="#">Software</a><a href="#">Design</a><a href="#">Service</a><a href="#">Development</a><a href="#">Digital</a><a href="#">Cyber</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="basic-pagination">
                <nav>
                  <ul>
                    <li>
                      <Link href="/blog">1</Link>
                    </li>
                    <li>
                      <Link href="/blog">2</Link>
                    </li>
                    <li>
                      <Link href="/blog">3</Link>
                    </li>
                    <li>
                      <Link className="color" href="/blog">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;