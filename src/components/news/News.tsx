"use client";
import Link from "next/link";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const BlogHomeTwo = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setCurrentImage(src);
    setOpen(true);
  };

  const newsData = [
    {
      date: "10 Nov",
      meta: "Announcement",
      title: "Admissions Open for the Academic Year",
      img: "assets/img/news/news1.jpg",
      desc: "M.V.M Higher Secondary School is now accepting applications for all classes from K.G. to Higher Secondary. Enroll now and be part of a community that values quality education and holistic growth.",
    },
    {
      date: "28 Oct",
      meta: "Development",
      title: "Campus Facilities Upgraded for Student Excellence",
      img: "assets/img/news/news2.jpg",
      desc: "Our campus now features upgraded classrooms, computer labs, library, prayer hall, and play areas — all designed to support academic and moral development for every student.",
    },
   
  ];

  return (
    <>
      <div className="it-blog-4__area pt-100 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-blog-4__section-title text-center">
                <span className="it-section-subtitle-5">Whats happening</span>
                <h4 className="it-section-title">Our Latest News & Events</h4>
              </div>
            </div>
          </div>

          <div className="row">
            {newsData.map((item, index) => (
              <div
                key={index}
                className="col-xl-6 col-lg-6 col-md-6 mb-30 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay={`.${index + 3}s`}
              >
                <div className="it-blog-4__item">
                  <div className="it-blog-4__thumb-box p-relative">
                    <div className="it-blog-4__thumb p-relative">
                      <img className="w-100" src={item.img} alt={item.title} />
                      <div className="it-blog-4__icon">
                        <button
                          onClick={() => handleImageClick(item.img)}
                          className="popup-image"
                          style={{
                            border: "none",
                            background: "transparent",
                            cursor: "pointer",
                          }}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="it-blog-4__date">
                      <span>
                        {item.date.split(" ")[0]} <br /> {item.date.split(" ")[1]}
                      </span>
                    </div>
                  </div>
                  <div className="it-blog-4__content">
                    <div className="it-blog-4__meta">
                      <span>{item.meta}</span>
                    </div>
                  
                      <h4 className="it-blog-4__title">{item.title}</h4>
                   
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Popup */}
      {currentImage && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[{ src: currentImage }]}
          carousel={{ finite: true }}
          controller={{ closeOnBackdropClick: true }}
        />
      )}
    </>
  );
};

export default BlogHomeTwo;
