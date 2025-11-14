"use client";
import React, { useState, useEffect } from "react";

const AppDownloadSidebar = () => {
  // Track window width for responsive styles
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // mobile breakpoint
    };

    handleResize(); // check on first load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sidebar style
  const sidebarStyle: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1050,
  };

  // Icon style (desktop + mobile size)
  const imgStyle: React.CSSProperties = {
    height: isMobile ? "30px" : "46px", //  mobile size
    width: "auto",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  };

  const imgHover = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = "scale(1.1)";
  };

  const imgHoverOut = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div style={sidebarStyle}>
      <a
        href="https://play.google.com/store/apps/details?id=info.passdaily_new.mvmrhss&pli=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/img/playstoreicon.png"
          alt="Get it on Google Play"
          style={imgStyle}
          onMouseEnter={imgHover}
          onMouseLeave={imgHoverOut}
        />
      </a>

      <a
        href="https://apps.apple.com/us/app/mvmr-higher-secondary-school/id6747276941"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/img/appstoreicon.png"
          alt="Download on the App Store"
          style={imgStyle}
          onMouseEnter={imgHover}
          onMouseLeave={imgHoverOut}
        />
      </a>
    </div>
  );
};

export default AppDownloadSidebar;
