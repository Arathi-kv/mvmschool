"use client";

import React from "react";
import Image from "next/image";

const FeatureHomeThree = () => {
  const points = [
    "Focus on value education",
    "Separate hostels for girls and boys",
    "Eminent scholars conduct moral classes for students",
    "A well-furnished prayer hall / masjid functions in the campus",
    "Provides a spacious playground for students to engage in sports and games",
    "Various educational clubs such as Social, Mathematics, Science, and Language clubs function actively in our school",
  ];

  return (
    <section
      className="it-feature-3__area py-5"
      style={{
        background: "linear-gradient(180deg, #f8f9fb 0%, #ffffff 100%)",
      }}
    >
      <div className="container">
        <div
          className="row align-items-center"
          style={{
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
          }}
        >
          {/* Image Section */}
          <div className="col-lg-6 col-md-12 p-0">
            <Image
              src="/assets/img/facilities/facilities.jpg"
              alt="Value Education"
              width={700}
              height={500}
              className="w-100 h-100"
              style={{
                objectFit: "cover",
                height: "100%",
                minHeight: "400px",
              }}
            />
          </div>

          {/* Text Section */}
          <div className="col-lg-6 col-md-12 p-5">
            <h2
              style={{
                fontWeight: "700",
                color: "#0A1F44",
                marginBottom: "25px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              
            </h2>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                color: "#444",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              {points.map((point, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      color: "#0A1F44",
                      fontWeight: "bold",
                      marginRight: "10px",
                    }}
                  >
                    •
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHomeThree;
