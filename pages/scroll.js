import React from "react";
import ScrollCarousel from "../Components/ScrollCarousel";
import Journey from "../Components/journey";

const Scroll = () => {
  return (
    <div className="container">
      <div
        className="padding-block"
        // just setting arbitrary values to simulate real content above and below the component
        style={{ height: "90vh", background: "gold" }}
      >
        <h2>Content above</h2>
      </div>
      {/* <ScrollCarousel>
        <div className="box">
          <img
            src="https://picsum.photos/720/540/?image=88"
            alt=""
            className="img"
          />
        </div>
        <div className="box">
          <img
            src="https://picsum.photos/720/540/?image=472"
            alt=""
            className="img"
          />
        </div>
        <div className="box box--narrower">
          <img
            src="https://picsum.photos/720/540/?image=512"
            alt=""
            className="img"
          />
        </div>
        <div className="box">
          <img
            src="https://picsum.photos/720/540/?image=472"
            alt=""
            className="img"
          />
        </div>
      </ScrollCarousel> */}
      <ScrollCarousel>
        <Journey />
      </ScrollCarousel>

      <div
        className="padding-block"
        style={{ height: "103vh", background: "gold" }}
      >
        <h2>Content below</h2>
      </div>
    </div>
  );
};

export default Scroll;
