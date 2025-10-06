"use client";

import React from "react";
import Image from "next/image";
import mottoBg from "/public/assets/img/motto/motto-bg.jpg"; // make sure image exists here

const Motto = () => {
  return (
    
    <div className="it-motto__area py-5">
      <div className="container">
        <div
          className="row align-items-center"
          style={{
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
            padding: "40px 30px",
          }}
        >
          {/* Text Section */}
          <div className="col-xl-6 col-lg-6 mb-4 mb-lg-0 text-center">
            <h2
              style={{
                fontWeight: "700",
                color: "#0A1F44",
                marginBottom: "30px",
                textTransform: "uppercase",
              }}
            >
              Motto
            </h2>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "20px",
                color: "#555",
                lineHeight: "1.8",
                fontSize: "16px",
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <li>Create better result with quality education</li>
              <li>Provide general education with affordable cost</li>
              <li>Provide moral education along with school education</li>
              <li>Provide Islamic education along with school education</li>
              <li>Social and cultural development of pupil</li>
              <li>Provide special training for physical development</li>
              <li>Provide special coaching for artistic development</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="col-xl-6 col-lg-6 text-center">
            <Image
              src={mottoBg}
              alt="Motto"
              className="rounded-3 shadow"
              style={{
                maxHeight: "320px",
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motto;
