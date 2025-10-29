"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type GalleryItem = {
  title: string;
  thumbnail: string;
  popupImages: string[];
  extraImages?: string[];
};

const galleryItems: GalleryItem[] = [
  {
    title: "1st Day of School",
    thumbnail: "/assets/img/gallery/dayschool.jpg",
    popupImages: ["/assets/img/gallery/dayschool.jpg"],
    extraImages: [
      "/assets/img/gallery/day-school-2.jpg",
      "/assets/img/gallery/day-school-3.jpg",
      "/assets/img/gallery/day-school-4.jpg",
    ],
  },
  {
    title: "School Fest",
    thumbnail: "/assets/img/gallery/schoolfest.jpg",
    popupImages: ["/assets/img/gallery/schoolfest.jpg"],
    extraImages: [
      "/assets/img/gallery/schoolfest-2.jpg",
      "/assets/img/gallery/schoolfest-3.jpg",
      "/assets/img/gallery/schoolfest-4.jpg",
      "/assets/img/gallery/schoolfest-5.jpg",
      "/assets/img/gallery/schoolfest-6.jpg",
    ],
  },
  {
    title: "KG",
    thumbnail: "/assets/img/gallery/kgthumb.jpg",
    popupImages: ["/assets/img/gallery/kg-1.jpg"],
    extraImages: [
      "/assets/img/gallery/kg-2.jpg",
      "/assets/img/gallery/kg-3.jpg",
      "/assets/img/gallery/kg-4.jpg",
      "/assets/img/gallery/kg-5.jpg",
      "/assets/img/gallery/kg-6.jpg",
    ],
  },
  {
    title: "Environment Day",
    thumbnail: "/assets/img/gallery/environmentdaythumb.jpg",
    popupImages: ["/assets/img/gallery/environment-day1.jpg"],
    extraImages: [
      "/assets/img/gallery/environment-day-2.jpg",
      "/assets/img/gallery/environment-day-3.jpg",
      "/assets/img/gallery/environment-day-4.jpg",
      "/assets/img/gallery/environment-day-5.jpg",
      "/assets/img/gallery/environment-day-6.jpg",
    ],
  },
  {
    title: "Celebration",
    thumbnail: "/assets/img/gallery/celebrationthumb.jpg",
    popupImages: ["/assets/img/gallery/celebrationthumb.jpg"],
    extraImages: [
      "/assets/img/gallery/celebration-1.jpg",
      "/assets/img/gallery/celebration-2.jpg",
      "/assets/img/gallery/celebration-3.jpg",
    ],
  },
  {
    title: "Guides and Scouts",
    thumbnail: "/assets/img/gallery/guidesthumb.jpg",
    popupImages: ["/assets/img/gallery/guidesthumb.jpg"],
    extraImages: [
      "/assets/img/gallery/guides-1.jpg",
      "/assets/img/gallery/guides-2.jpg",
      "/assets/img/gallery/guides-3.jpg",
      "/assets/img/gallery/guides-4.jpg",
    ],
  },
  {
    title: "Hand Over the Memento to Students",
    thumbnail: "/assets/img/gallery/mementothumb.jpg",
    popupImages: ["/assets/img/gallery/memento-1.jpg"],
    extraImages: [
      "/assets/img/gallery/memento-2.jpg",
      "/assets/img/gallery/memento-3.jpg",
      "/assets/img/gallery/memento-4.jpg",
    ],
  },
  {
    title: "Group Photo with MVM Hero's",
    thumbnail: "/assets/img/gallery/group-photo-thumb.jpg",
    popupImages: ["/assets/img/gallery/group-photo-1.jpg"],
    extraImages: [
     "/assets/img/gallery/memento-3.jpg",
      "/assets/img/gallery/memento-4.jpg",
    ],
  },
  {
    title: "Students Performance",
    thumbnail: "/assets/img/gallery/studentsperform.jpg",
    popupImages: ["/assets/img/gallery/studentsPerform.jpg"],
    extraImages: [
      "/assets/img/gallery/studentsperform-1.jpg",
      "/assets/img/gallery/studentsperform-2.jpg",
    ],
  },
  {
    title: "Presentation for Winners",
    thumbnail: "/assets/img/gallery/presentationthumb.jpg",
    popupImages: ["/assets/img/gallery/presentation-1.jpg"],
    extraImages: [
      "/assets/img/gallery/presentation-2.jpg",
      "/assets/img/gallery/presentation-3.jpg",
      "/assets/img/gallery/presentation-4.jpg",
      "/assets/img/gallery/presentation-5.jpg",
      "/assets/img/gallery/presentation-6.jpg",
      "/assets/img/gallery/presentation-7.jpg",
    ],
  },
  {
    title: "PTA Meeting",
    thumbnail: "/assets/img/gallery/ptathumb.jpg",
    popupImages: ["/assets/img/gallery/ptathumb.jpg"],
    extraImages: [
      "/assets/img/gallery/pta-2.jpg",
      "/assets/img/gallery/pta-1.jpg",
    ],
  },
  {
    title: "Just a Snap with A+ Winners",
    thumbnail: "/assets/img/gallery/aplusthumb.jpg",
    popupImages: ["/assets/img/gallery/a-plus-1.jpg"],
  },
  {
    title: "Reading Day",
    thumbnail: "/assets/img/gallery/readingday.jpg",
    popupImages: ["/assets/img/gallery/readingday.jpg"],
    extraImages: [
      "/assets/img/gallery/readingday-1.jpg",
    ],
  },
  {
    title: "School Assembly",
    thumbnail: "/assets/img/gallery/assembly.jpg",
    popupImages: ["/assets/img/gallery/assembly.jpg"],
    extraImages: ["/assets/img/gallery/assembly1.jpg"],
  },
  {
    title: "School Structure",
    thumbnail: "/assets/img/gallery/schoolstructurethumb.jpg",
    popupImages: ["/assets/img/gallery/schoolstructurethumb.jpg"],
    extraImages: [
      "/assets/img/gallery/structure-1.jpg",
      "/assets/img/gallery/structure-2.jpg",
      "/assets/img/gallery/structure-3.jpg",
    ],
  },
  {
    title: "Inauguration",
    thumbnail: "/assets/img/gallery/inaugurationthumb.jpg",
    popupImages: ["/assets/img/gallery/inauguration-1.jpg"],
  },
];

const DEFAULT_RATIO = 4 / 3;

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<{ src: string }[]>([]);
  const [title, setTitle] = useState("");

  const handleOpen = (item: GalleryItem) => {
    setTitle(item.title);
    const allImages = [...item.popupImages, ...(item.extraImages || [])].map(
      (img) => ({ src: img })
    );
    setSlides(allImages);
    setOpen(true);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryItems.map((item, index) => {
          const ratio = DEFAULT_RATIO;
          const paddingTop = `${100 / ratio}%`;
          const safeThumb = item.thumbnail.replace(/\s/g, "%20");

          return (
            <div
              className="gallery-item"
              key={index}
              onClick={() => handleOpen(item)}
            >
              <div className="thumb-wrapper" style={{ paddingTop }}>
                <img
                  src={safeThumb}
                  alt={item.title}
                  className="gallery-thumb"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/img/fallback.jpg";
                  }}
                />
              </div>
              <h5 className="gallery-caption">{item.title}</h5>
            </div>
          );
        })}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          toolbar={{
            buttons: [
              <div
                key="custom-title"
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "30px",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                  pointerEvents: "none",
                }}
              >
                {title}
              </div>,
              <button
                key="close-btn"
                onClick={() => setOpen(false)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "25px",
                  background: "rgba(0,0,0,0.6)",
                  border: "none",
                  color: "white",
                  fontSize: "24px",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  lineHeight: "40px",
                  textAlign: "center",
                }}
                aria-label="Close"
              >
                ✕
              </button>,
            ],
          }}
        />
      )}

      <style jsx>{`
        .gallery-container {
          padding: 60px 0;
        }

        .gallery-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          max-width: 1200px;
          margin: 0 auto;
        }

        .gallery-item {
          cursor: pointer;
          overflow: visible;
          border-radius: 10px;
          transition: transform 0.2s ease;
        }

        .gallery-item:hover {
          transform: scale(1.01);
        }

        .thumb-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #f5f5f5;
          border-radius: 10px;
        }

        .gallery-thumb {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gallery-caption {
          margin-top: 10px;
          font-weight: normal;
          font-size: 1rem;
          text-align: center;
        }

        @media (max-width: 768px) {
          .thumb-wrapper {
            min-height: 140px;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
