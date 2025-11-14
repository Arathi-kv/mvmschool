"use client";

import { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import ScrollToTop from "@/components/common/scroll-to-top";
import AppDownloadSidebar from "@/components/appdownloadsidebar/AppDownloadSidebar";

const Wrapper = ({ children }: any) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}
      <ScrollToTop />
      <AppDownloadSidebar /> {/* Fixed sidebar */}
    </>
  );
};

export default Wrapper;
