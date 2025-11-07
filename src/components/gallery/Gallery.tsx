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
    title: "KG",
   thumbnail:  "/assets/img/gallery/img1.jpg",
    popupImages: ["/assets/img/gallery/img1.jpg"],
    extraImages: [
      "/assets/img/gallery/img33.jpg",
      "/assets/img/gallery/img2.jpg",
      "/assets/img/gallery/img48.jpg",
      "/assets/img/gallery/img14.jpg",
    ],
  },
  {
    title: "School Fest",
     thumbnail:  "/assets/img/gallery/img4.jpg",
    popupImages: [ "/assets/img/gallery/img4.jpg"],
    extraImages: [
      "/assets/img/gallery/img15.jpg",
      "/assets/img/gallery/img6.jpg",
      "/assets/img/gallery/img19.jpg",
      "/assets/img/gallery/img8.jpg",
      "/assets/img/gallery/img17.jpg",
       "/assets/img/gallery/img16.jpg",
    ],
  },

   {
    title: "Celebration",
    thumbnail:  "/assets/img/gallery/img11.jpg",
    popupImages: ["/assets/img/gallery/img11.jpg"],
    extraImages: [
      "/assets/img/gallery/img12.jpg",
      "/assets/img/gallery/img13.jpg",
    ],
  },
  {
    title: "Environment Day",
     thumbnail:  "/assets/img/gallery/img20.jpg",
  popupImages: ["/assets/img/gallery/img20.jpg"],
    extraImages: [
      "/assets/img/gallery/img21.jpg",
    ],
  },
 
  {
    title: "Guides and Scouts",
    thumbnail:  "/assets/img/gallery/img26.jpg",
 popupImages: ["/assets/img/gallery/img26.jpg"],
    extraImages: [
      "/assets/img/gallery/img22.jpg",
      "/assets/img/gallery/img23.jpg",
      "/assets/img/gallery/img31.jpg",
      "/assets/img/gallery/img28.jpg",
    ],
  },
  
  {
    title: "Students Performance",
     thumbnail:  "/assets/img/gallery/img7.jpg",
   popupImages: ["/assets/img/gallery/img7.jpg"],
    extraImages: [
      "/assets/img/gallery/img9.jpg",
      "/assets/img/gallery/img10.jpg",
    ],
  },
 
  {
    title: "PTA Meeting",
     thumbnail:  "/assets/img/gallery/img44.jpg",
 popupImages: ["/assets/img/gallery/img44.jpg"],
    extraImages: [
       "/assets/img/gallery/img45.jpg",
    ],
  },
 
  {
    title: "Reading Day",
     thumbnail:  "/assets/img/gallery/img43.jpg",
   popupImages: ["/assets/img/gallery/img43.jpg"],
    extraImages: [
         "/assets/img/gallery/img42.jpg",
    ],
  },
  {
    title: "School Assembly",
    thumbnail:  "/assets/img/gallery/img37.jpg",
    popupImages: ["/assets/img/gallery/img37.jpg"],
       extraImages: 
       ["/assets/img/gallery/img36.jpg",
            "/assets/img/gallery/img35.jpg",
         "/assets/img/gallery/img32.jpg" ,
       ],
  },
 
  {
    title: "School Team",
     thumbnail:  "/assets/img/gallery/img3.jpg",
    popupImages: ["/assets/img/gallery/img3.jpg"],
    extraImages: [
      "/assets/img/gallery/img24.jpg",
    ],
  },
  {
    title: "Social Awareness",
     thumbnail:  "/assets/img/gallery/img29.jpg",
    popupImages: ["/assets/img/gallery/img29.jpg"],
    extraImages: [
      "/assets/img/gallery/img18.jpg",
    ],
  },
   {
    title: "Staff and members",
     thumbnail:  "/assets/img/gallery/img39.jpg",
    popupImages: ["/assets/img/gallery/img39.jpg"],
    extraImages: [
      "/assets/img/gallery/img40.jpg",
      "/assets/img/gallery/img25.jpg",
      "/assets/img/gallery/img46.jpg",
      "/assets/img/gallery/img47.jpg",
      "/assets/img/gallery/img34.jpg",
    ],
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