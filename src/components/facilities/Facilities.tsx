"use client";

import React from "react";
import Image from "next/image";

const facilities = [
  {
    title: "ACTIVITIES",
    description: `Admissions are granted in classes VI, VII, VIII & IX through an all India level entrance examination. Admission to class XI is based on the availability of seats. The selection criteria include class 10 Board Examination result and performance in the school's internal admission procedure. The applicant should not have completed eleven/twelve/thirteen/fourteen/sixteen years on 1st January of the year in which admission is sought for these classes.`,
    image: "/assets/img/facilities/activitiesimg.jpg",
  },
  {
    title: "COMPUTER LAB / SMART ROOM",
    description: `Well equipped computer lab provides the necessary aid in learning various subjects. Facilities are available to all students from 3rd standard to 12th standard. In high school section IT classes are functioning based on programme scheduled by “IT @ school”.`,
    image: "/assets/img/facilities/comlabImg.jpg",
  },
  {
    title: "LIBRARY",
    description: `The school maintains a well-stocked library with over 5000 books. The library subscribes to various periodicals and newspapers.`,
    image: "/assets/img/facilities/libraryimg.jpg",
  },
  {
    title: "PRAYER HALL / MASJID",
    description: `A well-furnished Prayer Hall/Masjid functions in the campus to provide training in Islamic subjects. Eminent scholars give moral classes for the students.`,
    image: "/assets/img/facilities/prayerimg.jpg",
  },
  {
    title: "TRANSPORTATIONS",
    description: `The school provides bus service facilities to pick up and drop students at designated locations. The bus routes are already specified, therefore parents for whom the routes are inconvenient are advised to bring and collect their children.`,
    image: "/assets/img/facilities/transportimg.jpg",
  },
  {
    title: "CLUB ACTIVITIES",
    description: `Various educational clubs such as social club, mathematics club, science club, language club, and nature club are smoothly functioning in our school.`,
    image: "/assets/img/facilities/clubimg.jpg",
  },
  {
    title: "HOSTEL",
    description: `Separate hostels for both boys and girls are functioning in the campus. Special coaching programmes are arranged for hostel students for physical, cultural, and moral development.`,
    image: "/assets/img/facilities/hostelimg.jpg",
  },
  {
    title: "UNIFORM",
    description: `Students are required to wear the prescribed school uniform that represents discipline and unity among the pupils.`,
    image: "/assets/img/facilities/uniformimg.jpg",
  },
  {
    title: "SCHOOL STORE",
    description: `The school maintains a full-fledged store for students. The store provides all textbooks, notebooks, uniform materials, and other stationery items.`,
    image: "/assets/img/facilities/schoolstoreimg.jpg",
  },
  {
    title: "SCIENCE LABORATORIES",
    description: `Various well-equipped Physics, Chemistry, Biology, and Mathematics laboratories provide hands-on learning experiences.`,
    image: "/assets/img/facilities/sciencelabimg.jpg",
  },
  {
    title: "SPORTS / PLAY GROUNDS",
    description: `M.V.M.R.H.S.S provides a spacious playground for our students to engage in sports and games.`,
    image: "/assets/img/facilities/sportsimg.jpg",
  },
];

const Facilities = () => {
  return (
    <div className="it-facilities__area py-5">
      <div className="container">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="row align-items-center mb-5"
            style={{
              borderRadius: "8px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
              padding: "40px 30px",
              marginBottom: "40px",
            }}
          >
            {/* Text Section */}
            <div
              className={`col-xl-6 col-lg-6 mb-4 mb-lg-0 ${
                index % 2 !== 0 ? "order-lg-2" : ""
              }`}
            >
              <div className="text-center text-lg-start">
                <h2
                  style={{
                    fontWeight: "700",
                    color: "#0A1F44",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                  }}
                >
                  {facility.title}
                </h2>
                <p
                  style={{
                    color: "#555",
                    lineHeight: "1.8",
                    fontSize: "16px",
                    textAlign: "justify",
                  }}
                >
                  {facility.description}
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div
              className={`col-xl-6 col-lg-6 text-center ${
                index % 2 !== 0 ? "order-lg-1" : ""
              }`}
            >
              <Image
                src={facility.image}
                alt={facility.title}
                width={600}
                height={400}
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
        ))}
      </div>
    </div>
  );
};

export default Facilities;
