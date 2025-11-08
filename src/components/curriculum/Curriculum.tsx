"use client";

import Link from "next/link";
import React from "react";

const BlogHomeOne = () => {
  const staff = [
    {
      img: "assets/img/management/rasheed-karinkappara-principal.jpg",
      name: "Mr.Rasheed Karinkappara",
      position: "Principal",
    },
    {
      img: "assets/img/management/alikutty-tm-vice-principal.jpg",
      name: "Mr.Alikutty T M",
      position: "Vice Principal",
    },
  ];

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
    <>
      {/* === Principal & Vice Principal Section === */}
      <section className="it-staff__area pt-100 pb-60 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="it-section-subtitle">Our Leadership</span>
            <h2 className="it-section-title">Guided by Excellence</h2>
          </div>

          <div
            className="grid-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", // wider grid
              gap: "50px",
              justifyItems: "center",
            }}
          >
            {staff.map((person, index) => (
              <div
                key={index}
                className="it-staff__item text-center"
                style={{
                  background: "#fff",
                  borderRadius: "6px",
                  padding: "10px",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  maxWidth: "460px", // wider card
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <img
                  src={person.img}
                  alt={person.name}
                  style={{
                    width: "100%",
                    height: "380px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                />
                <h4
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#0A1F44",
                    marginBottom: "6px",
                  }}
                >
                  {person.name}
                </h4>
                <p
                  style={{
                    color: "#555",
                    fontSize: "16px",
                    marginBottom: "0",
                  }}
                >
                  {person.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Curriculum Section === */}
      <section className="it-blog__area pt-120 pb-90 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="it-section-subtitle">Curriculum Overview</span>
            <h2 className="it-section-title">
              Building strong foundations for <br /> a brighter future
            </h2>
          </div>

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
    </>
  );
};

export default BlogHomeOne;
