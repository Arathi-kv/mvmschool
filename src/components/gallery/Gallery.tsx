"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type GalleryItem = {
  thumbnail: string;
};

const galleryItems: GalleryItem[] = [
  { thumbnail: "/assets/img/gallery/img1.jpg" },
  { thumbnail: "/assets/img/gallery/img2.jpg" },
  { thumbnail: "/assets/img/gallery/img3.jpg" },
  { thumbnail: "/assets/img/gallery/img4.jpg" },
  { thumbnail: "/assets/img/gallery/img5.jpg" },
  { thumbnail: "/assets/img/gallery/img6.jpg" },
  { thumbnail: "/assets/img/gallery/img7.jpg" },
  { thumbnail: "/assets/img/gallery/img8.jpg" },
  { thumbnail: "/assets/img/gallery/img9.jpg" },
  { thumbnail: "/assets/img/gallery/img10.jpg" },
  { thumbnail: "/assets/img/gallery/img11.jpg" },
  { thumbnail: "/assets/img/gallery/img12.jpg" },
  { thumbnail: "/assets/img/gallery/img13.jpg" },
  { thumbnail: "/assets/img/gallery/img14.jpg" },
  { thumbnail: "/assets/img/gallery/img15.jpg" },
  { thumbnail: "/assets/img/gallery/img16.jpg" },
  { thumbnail: "/assets/img/gallery/img17.jpg" },
  { thumbnail: "/assets/img/gallery/img18.jpg" },
  { thumbnail: "/assets/img/gallery/img19.jpg" },
  { thumbnail: "/assets/img/gallery/img20.jpg" },
  { thumbnail: "/assets/img/gallery/img21.jpg" },
  { thumbnail: "/assets/img/gallery/img22.jpg" },
  { thumbnail: "/assets/img/gallery/img23.jpg" },
  { thumbnail: "/assets/img/gallery/img24.jpg" },
  { thumbnail: "/assets/img/gallery/img25.jpg" },
  { thumbnail: "/assets/img/gallery/img26.jpg" },
  { thumbnail: "/assets/img/gallery/img27.jpg" },
  { thumbnail: "/assets/img/gallery/img28.jpg" },
  { thumbnail: "/assets/img/gallery/img29.jpg" },
  { thumbnail: "/assets/img/gallery/img30.jpg" },
  { thumbnail: "/assets/img/gallery/img31.jpg" },
  { thumbnail: "/assets/img/gallery/img32.jpg" },
  { thumbnail: "/assets/img/gallery/img33.jpg" },
  { thumbnail: "/assets/img/gallery/img34.jpg" },
  { thumbnail: "/assets/img/gallery/img35.jpg" },
  { thumbnail: "/assets/img/gallery/img36.jpg" },
  { thumbnail: "/assets/img/gallery/img37.jpg" },
  { thumbnail: "/assets/img/gallery/img38.jpg" },
  { thumbnail: "/assets/img/gallery/img39.jpg" },
  { thumbnail: "/assets/img/gallery/img40.jpg" },
  { thumbnail: "/assets/img/gallery/img41.jpg" },
  { thumbnail: "/assets/img/gallery/img42.jpg" },
  { thumbnail: "/assets/img/gallery/img43.jpg" },
  { thumbnail: "/assets/img/gallery/img44.jpg" },
  { thumbnail: "/assets/img/gallery/img45.jpg" },
  { thumbnail: "/assets/img/gallery/img46.jpg" },
  { thumbnail: "/assets/img/gallery/img47.jpg" },
  { thumbnail: "/assets/img/gallery/img48.jpg" },
  { thumbnail: "/assets/img/gallery/img49.jpg" },
  { thumbnail: "/assets/img/gallery/img50.jpg" },
];

const DEFAULT_RATIO = 4 / 3;

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<{ src: string }[]>([]);

  const handleOpen = (img: string) => {
    setSlides([{ src: img }]); // only one image
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
              onClick={() => handleOpen(item.thumbnail)}
            >
              <div className="thumb-wrapper" style={{ paddingTop }}>
                <img
                  src={safeThumb}
                  alt={`Gallery image ${index + 1}`}
                  className="gallery-thumb"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/img/fallback.jpg";
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          controller={{ closeOnBackdropClick: true }}
          render={{
            buttonPrev: () => null, // hide prev button
            buttonNext: () => null, // hide next button
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
          transform: scale(1.02);
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
