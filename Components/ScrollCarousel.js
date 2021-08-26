import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated as a, interpolate } from "react-spring";
import useScrollWidth from "./useScrollWidth";

const ScrollCarousel = ({ children }) => {
  const [output, setOutput] = useState(null);
  const refHeight = useRef(null);
  const refTransform = useRef(null);

  const { scrollWidth } = useScrollWidth(refTransform);

  // the argument is the fps that the hook uses,
  // since react spring interpolates values we can safely reduce this below 60

  const [scrollY, setScrollY] = useState(45);
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));

  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      setScrollY(window.pageYOffset);
      set({ st: scrollY });
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack, true);
    };
  }, [scrollY, set]);

  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({
        xy: [x - window.innerWidth / 2, y - window.innerHeight / 2],
      }),
    []
  );

  const top = refHeight.current ? refHeight.current.offsetTop : 0;
  const width = refHeight.current ? refHeight.current.offsetWidth : 0;
  let elHeight, interpTransform;

  useEffect(() => {
    // we want to set the scrolling element *height* to the value of the *width* of the horizontal content
    // plus some other calculations to convert it from a width to a height value
    elHeight =
      scrollWidth - (window.innerWidth - window.innerHeight) + width * 0.5; // scroll away when final viewport width is 0.5 done

    interpTransform = interpolate([st, xy], (o, xy) => {
      const mouseMoveDepth = 40; // not necessary, but nice to have
      const x = width - (top - o) - width;

      // (width * 0.5) so that it starts moving just slightly before it comes into view
      if (x < -window.innerHeight - width * 0.5) {
        // element is not yet in view, we're currently above it. so don't animate the translate value
        return `translate3d(${window.innerHeight}px, 0, 0)`;
      }

      if (Math.abs(x) > elHeight) {
        // element is not in view, currently below it.
        return `translate3d(${elHeight}px, 0, 0)`;
      }

      // else animate as usual
      return `translate3d(${-x + -xy[0] / mouseMoveDepth}px, ${
        -xy[1] / mouseMoveDepth
      }px, 0)`;
    });

    if (interpTransform) {
      setOutput(
        <div
          onMouseMove={onMouseMove}
          className="scroll-carousel"
          ref={refHeight}
          style={{ height: elHeight }}
        >
          <div className="sticky-box">
            <a.div
              style={{ transform: interpTransform }}
              className="transform-box"
              ref={refTransform}
            >
              {children}
            </a.div>
          </div>
        </div>
      );
    }
  });

  return <>{output}</>;
};

export default ScrollCarousel;
