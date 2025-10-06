"use client";

import Link from "next/link";
import React from "react";

const BlogHomeOne = () => {
  const curriculum = [
    {
      img: "assets/img/curriculum/lkg.jpg",
      title: "K.G Section",
      desc: "K.G section has two levels, the L.K.G and U.K.G. Children are usually admitted in the L.K.G. K.G section conducts various activities separately for K.G students.",
    },
    {
      img: "assets/img/curriculum/lp.jpg",
      title: "Primary Section (1–4) L.P",
      desc: "English, Arabic, Malayalam, Hindi, Mathematics, Environmental Studies, Computer Science, Physical Education, Arts Education, and Moral Studies.",
    },
    {
      img: "assets/img/curriculum/up.jpg",
      title: "Upper Primary (5–7) U.P",
      desc: "English, Arabic, Malayalam, Hindi, Mathematics, General Science, Social Science, Computer Science, Physical Education, Art Education, and Moral Education.",
    },
    {
      img: "assets/img/curriculum/highSchool.jpg",
      title: "High School Section",
      desc: "English, Arabic, Hindi, Malayalam, Mathematics, Science, Social Science, Computer Science (IT), Physical Education, Art Education, and Moral Education.",
    },
    {
      img: "assets/img/curriculum/highSection.jpg",
      title: "Higher Secondary Section",
      desc: (
        <>
          <p>Under Higher Secondary section, two streams are offered.</p>
          <p>
            <strong>Science stream:</strong> English, Arabic, Malayalam, Hindi,
            Physics, Chemistry, Biology, Mathematics.
          </p>
          <p>
            <strong>Commerce stream:</strong> English, Malayalam, Arabic, Hindi,
            Business Studies, Economics, Accountancy with Tally, Computer
            Application.
          </p>
        </>
      ),
    },
    {
      img: "assets/img/curriculum/moralEdu.jpg",
      title: "Moral / Islamic Education",
      desc: "M.V.M.R.H.S.S provides Islamic education (Madrassa) along with school education under the supervision and guidance of eminent scholars.",
    },
  ];

  return (
    <section className="it-blog__area pt-120 pb-90 bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="it-section-subtitle">Curriculum Overview</span>
          <h2 className="it-section-title">
            Building strong foundations for <br /> a brighter future
          </h2>
        </div>

        {/* Grid Layout */}
        <div
          className="grid-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {curriculum.map((item, index) => (
            <div
              key={index}
              className="it-blog__item"
              style={{
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div className="it-blog__thumb p-relative">
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div className="it-blog__icon">
                  <Link href="#">
                    <i className="flaticon-up-right-arrow"></i>
                  </Link>
                </div>
              </div>

              <div className="it-blog__content p-4">
                <div className="it-blog__meta">
                  <span>Curriculum</span>
                </div>
                <h4
                  className="it-blog__title mb-3"
                  style={{
                    fontWeight: "600",
                    color: "#0A1F44",
                  }}
                >
                  {item.title}
                </h4>
                <div
                  style={{
                    color: "#555",
                    fontSize: "15px",
                    lineHeight: "1.7",
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHomeOne;
