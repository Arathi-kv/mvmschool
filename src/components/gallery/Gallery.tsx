"use client";
import React, { useState, useEffect } from "react";
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
    title: "Assembly",
    thumbnail: "/assets/img/gallery/img37.jpg",
    popupImages: ["/assets/img/gallery/img37.jpg"],
    extraImages: ["/assets/img/gallery/img36.jpg", "/assets/img/gallery/img26.jpg"],
  },
  {
    title: "Independence Day",
    thumbnail: "/assets/img/gallery/img43.jpg",
    popupImages: ["/assets/img/gallery/img43.jpg"],
  },
  {
    title: "JRC",
    thumbnail: "/assets/img/gallery/img35.jpg",
    popupImages: ["/assets/img/gallery/img35.jpg"],
    extraImages: ["/assets/img/gallery/img29.jpg", "/assets/img/gallery/img22.jpg"],
  },
  {
    title: "Parents Meet",
    thumbnail: "/assets/img/gallery/img45.jpg",
    popupImages: ["/assets/img/gallery/img45.jpg"],
    extraImages: ["/assets/img/gallery/img44.jpg"],
  },
  {
    title: "School Parliament ",
    thumbnail: "/assets/img/gallery/img3.jpg",
    popupImages: ["/assets/img/gallery/img3.jpg"],
  },
  {
    title: "Scout and Guide",
    thumbnail: "/assets/img/gallery/img23.jpg",
    popupImages: ["/assets/img/gallery/img23.jpg"],
    extraImages: ["/assets/img/gallery/img31.jpg"],
  },
  {
    title: "World Environment Day",
    thumbnail: "/assets/img/gallery/img20.jpg",
    popupImages: ["/assets/img/gallery/img20.jpg"],
    extraImages: ["/assets/img/gallery/img21.jpg"],
  },
  {
    title: "Youth Festival ",
    thumbnail: "/assets/img/gallery/img5.jpg",
    popupImages: ["/assets/img/gallery/img5.jpg"],
    extraImages: [
      "/assets/img/gallery/img6.jpg",
      "/assets/img/gallery/img4.jpg",
      "/assets/img/gallery/img7.jpg",
      "/assets/img/gallery/img13.jpg",
      "/assets/img/gallery/img9.jpg",
      "/assets/img/gallery/img10.jpg",
      "/assets/img/gallery/img18.jpg",
      "/assets/img/gallery/img19.jpg",
      "/assets/img/gallery/img8.jpg",
      "/assets/img/gallery/img17.jpg",
      "/assets/img/gallery/img16.jpg",
      "/assets/img/gallery/img15.jpg",
      "/assets/img/gallery/img25.jpg",
    ],
  },
];

const DEFAULT_RATIO = 4 / 3;

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<{ src: string }[]>([]);
  const [title, setTitle] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpen = (item: GalleryItem) => {
    setTitle(item.title);
    const allImages = [...item.popupImages, ...(item.extraImages || [])].map(
      (img) => ({ src: img })
    );
    setSlides(allImages);
    setOpen(true);
  };

  return (
    <div
      className="gallery-container"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        paddingLeft: isMobile ? "15px" : "0px", // ✅ Real visible space on mobile
        paddingRight: isMobile ? "15px" : "0px",
      }}
    >
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
