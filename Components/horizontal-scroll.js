import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  OuterContainer: {
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
    position: "absolute",
    height: "100%",
    willChange: "transform",
  },
}));

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
  const classes = useStyles();
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

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
    <div
      className={classes.OuterContainer}
      style={{ height: `${dynamicHeight}px` }}
    >
      <div className={classes.StickyInnerContainer} ref={containerRef}>
        <div
          className={classes.HorizontalTranslateContainer}
          style={{ transform: `translateX(${translateX}px)` }}
          ref={objectRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
