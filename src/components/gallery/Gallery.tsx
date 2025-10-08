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
    title: "Environment Day",
    thumbnail: "/assets/img/gallery/environment-day-thumb.jpg",
    popupImages: ["/assets/img/gallery/environment-day.jpg"],
    extraImages: [
      "/assets/img/gallery/environment-day-2.jpg",
      "/assets/img/gallery/environment-day-3.jpg",
      "/assets/img/gallery/environment-day-4.jpg",
      "/assets/img/gallery/environment-day-5.jpg",
      "/assets/img/gallery/environment-day-6.jpg",
    ],
  },
  {
    title: "1st Day of School",
    thumbnail: "/assets/img/gallery/day-school-thumb.jpg",
    popupImages: ["/assets/img/gallery/day-school-1.jpg"],
    extraImages: [
      "/assets/img/gallery/day-school-2.jpg",
      "/assets/img/gallery/day-school-3.jpg",
      "/assets/img/gallery/day-school-4.jpg",
    ],
  },
  {
    title: "KG",
    thumbnail: "/assets/img/gallery/kg-thumb.jpg",
    popupImages: ["/assets/img/gallery/kg-1.jpg", "/assets/img/gallery/kg-2.jpg"],
  },
  {
    title: "Hand Over the Memento to Students",
    thumbnail: "/assets/img/gallery/memento-thumb.jpg",
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
      "/assets/img/gallery/group-photo-2.jpg",
      "/assets/img/gallery/group-photo-3.jpg",
    ],
  },
  {
    title: "Presentation for Winners",
    thumbnail: "/assets/img/gallery/presentation-thumb.jpg",
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
    title: "Appreciate the Children in Front of Parents",
    thumbnail: "/assets/img/gallery/appreciate-thumb.jpg",
    popupImages: ["/assets/img/gallery/appreciate-1.jpg"],
  },
  {
    title: "Celebration",
    thumbnail: "/assets/img/gallery/celebration-thumb.jpg",
    popupImages: ["/assets/img/gallery/celebration-1.jpg"],
    extraImages: [
      "/assets/img/gallery/celebration-2.jpg",
      "/assets/img/gallery/celebration-3.jpg",
    ],
  },
  {
    title: "Just a Snap with A+ Winners",
    thumbnail: "/assets/img/gallery/a-plus-thumb.jpg",
    popupImages: ["/assets/img/gallery/a-plus-1.jpg"],
  },
  {
    title: "School Structure",
    thumbnail: "/assets/img/gallery/school-structure-thumb.jpg",
    popupImages: ["/assets/img/gallery/structure-1.jpg"],
    extraImages: [
      "/assets/img/gallery/structure-2.jpg",
      "/assets/img/gallery/structure-3.jpg",
    ],
  },
  {
    title: "Inauguration",
    thumbnail: "/assets/img/gallery/inauguration-thumb.jpg",
    popupImages: ["/assets/img/gallery/inauguration-1.jpg"],
  },
];

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
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-item" key={index} onClick={() => handleOpen(item)}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="gallery-thumb"
            />
            <h5 className="gallery-caption">{item.title}</h5>
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          // ✅ Keep default navigation buttons
          toolbar={{
            buttons: [
              // title on top-left
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
              // close button on top-right
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
          padding: 40px 20px;
          text-align: center;
        }

        .gallery-title {
          font-size: 2rem;
          margin-bottom: 20px;
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
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.02);
        }

        .gallery-thumb {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .gallery-caption {
          margin-top: 10px;
          font-weight: normal;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .gallery-thumb {
            height: 200px;
          }
        }

        @media (max-width: 480px) {
          .gallery-thumb {
            height: 150px;
          }
          .gallery-caption {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
