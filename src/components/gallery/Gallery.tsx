"use client";
import Link from "next/link";
import React from "react";
import ModalImage from "react-modal-image";

const Service = () => {
  const services = [
    { title: "Environment Day", src: "/assets/img/gallery/environment-day.jpg" },
    { title: "1st day of school", src: "/assets/img/gallery/first-day-school.jpg" },
    { title: "KG", src: "/assets/img/gallery/kg.jpg" },
    { title: "Hand over the memento to students", src: "/assets/img/gallery/memento-students.jpg" },
    { title: "Group photo with MVM hero's", src: "/assets/img/gallery/mvm-hero.jpg" },
    { title: "Presentation for winners", src: "/assets/img/gallery/presentaion-winner.jpg" },
    { title: "Appreciate the children's in front of their parents", src: "/assets/img/gallery/parents.jpg" },
    { title: "Celebration", src: "/assets/img/gallery/celebration.jpg" },
    { title: "Just a snap with A+ winners", src: "/assets/img/gallery/a-plus-winner.jpg" },
    { title: "School structure", src: "/assets/img/gallery/school-struct.jpg" },
    { title: "Inauguration", src: "/assets/img/gallery/inaguration.jpg" },
  ];

  return (
    <div className="it-service-2__area grey-bg pt-120 pb-90">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-service-2__item p-relative fix">
                <div className="it-service-2__thumb fix p-relative">
                  {/* 👇 Popup Image on click */}
                  <ModalImage
                    small={service.src}
                    large={service.src}
                    alt={service.title}
                    hideDownload={true}
                    hideZoom={true}
                  />
                </div>
                <div className="it-service-2__wrapper fix">
                  <div className="it-service-2__content-box text-center">
                    <div className="it-service-2__top">
                      <Link href="/service-details">
                        <h5 className="it-service-2__title-sm">{service.title}</h5>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
