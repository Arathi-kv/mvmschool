"use client"


import { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import ScrollToTop from "@/components/common/scroll-to-top";



const Wrapper = ({ children }: any) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {children}
      <ScrollToTop />

    </>
  );
};

export default Wrapper;