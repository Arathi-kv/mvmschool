"use client"
import useSticky from "@/hooks/use-sticky";
import React, { useState, useEffect } from "react"; 

type style_type = {
  style?: boolean
}
const ScrollToTop = ({style}: style_type) => {
  const { sticky }: { sticky: boolean } = useSticky();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>

   
   <button onClick={scrollTop} className={`scroll-top scroll-to-target ${sticky && "open"}`} data-target="html">
        <i className="far fa-angle-double-up"></i>
    </button>

    </>
  );
};

export default ScrollToTop;
