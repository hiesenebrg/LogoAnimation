import React, { useEffect, useRef } from "react";
import "./index.css";

const ImageAnimation = () => {
  const parentRef = useRef(null);

  useEffect(() => {
    const parentDiv = parentRef.current;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold to suit your needs
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          parentDiv.classList.add("animate");
          observer.disconnect(); // Disconnect the observer once the animation is triggered
        }
      });
    }, options);

    observer.observe(parentDiv);

    return () => {
      if (parentDiv) {
        observer.unobserve(parentDiv);
      }
    };
  }, []);

  return (
    <div className="parent" ref={parentRef}>
      <div className="first-image">
        <img id="img1" src="./assets/logo-N.svg" alt="" />
      </div>
      <div className="second-image">
        <img id="img1" src="./assets/logo-N.svg" alt="" />
      </div>
      <div className="third-image">
        <img id="img3" src="./assets/logo-three.svg" alt="" />
      </div>
    </div>
  );
};

export default ImageAnimation;
