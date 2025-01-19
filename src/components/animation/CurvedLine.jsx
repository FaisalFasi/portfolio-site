import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const CurvedLine = () => {
  const lineRef = useRef(null);
  const currentPath = useLocation();

  useEffect(() => {
    if (currentPath.pathname === "/") {
      // GSAP animation to draw the line
      gsap.fromTo(
        lineRef.current,
        { strokeDasharray: 400, strokeDashoffset: 400 },
        { strokeDashoffset: 0, duration: 2, ease: "power2.out" }
      );
    }
  }, [location.pathname]);

  return (
    <svg
      className="svg-line"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 50" // Match the path dimensions
    >
      <path
        ref={lineRef}
        // d="M 0 50 C 100 -20, 300 120, 500 50 S 700 -20, 800 50"
        // d="M 0 50 C 150 0, 300 100, 450 50 S 600 0, 800 50"
        d="M 0 20 C 200 60, 300 -10, 500 20 S 700 30, 800 40"
        // d="M 0 50 C 100 -30, 400 130, 800 50 S 800 0, 800 50"
        // d="M 0 40 C 450 -40, 300 90,120 30 S 800 40"
        // d="M 0 30 C 600 20, 100 80, 100 -30"
        //   d="M 50 50 C 100 50, 40 20, 100 40 S 0 -40, 300 50"
        //   d="M 0 25 Q -50 0 300 25" // Adjusted to be vertically centered
        stroke="#5fc094"
        strokeWidth="6"
        fill="transparent"
      />
    </svg>
  );
};

export default CurvedLine;
