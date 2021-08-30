import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener("scroll", () => {
    const offsetTop = -ref.current.offsetTop;
    setTranslateX(offsetTop);
  });
};

export default ({ children }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const useStyle = makeStyles((theme) => ({
    TallOuterContainer: {
      height: `${dynamicHeight}px`,
      position: "relative",
      width: "100%",
    },
    StickyInnerContainer: {
      position: "sticky",
      top: 0,
      height: "100vh",
      width: "100%",
      overflowX: "hidden",
    },
    HorizontalTranslateContainer: {
      transform: `translateX(${translateX}px)`,
      position: "absolute",
      height: " 100%",
      willChange: "transform",
    },
  }));
  const classes = useStyle();

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <div className={classes.TallOuterContainer}>
      <div className={classes.StickyInnerContainer} ref={containerRef}>
        <div
          div
          className={classes.HorizontalTranslateContainer}
          ref={objectRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
