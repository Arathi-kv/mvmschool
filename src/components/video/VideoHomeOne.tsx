"use client"

import React from 'react';

const VideoHomeOne = () => {
  return (
    <div className="it-video__area it-video__space p-relative grey-bg">
      <div 
        className="it-video__bg" 
        style={{ 
          backgroundImage: 'url(/assets/img/about/about-2img.jpg)', 
          height: '500px', 
          width:'650px',
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        {/* Removed play button completely */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 wow itfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
            <div className="it-video__left-box z-index-5">
              <div className="it-video__content-box pb-40">
                <div className="it-video__content p-relative">
                  <ul>
                    <li><i className="flaticon-check-mark"></i> Conduct monthly test in every month, in addition to terminal examination.</li>
                    <li><i className="flaticon-check-mark"></i> Conduct the cultural programme in every week to develop cultural talent of the pupil.</li>
                    <li><i className="flaticon-check-mark"></i> Conduct arts, sports and games competition in every year.</li>
                    <li><i className="flaticon-check-mark"></i> Organize various game team such as football, volleyball and basketball team through specialized training programme.</li>
                    <li><i className="flaticon-check-mark"></i> Moral education mainly based on curriculum and syllabus prescribed by educational board of Kerala Nadhvathul Mujaheedeen.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHomeOne;
