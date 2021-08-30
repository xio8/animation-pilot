import React from "react";
import ReactDOM from "react-dom";

import { makeStyles } from "@material-ui/core/styles";

import HorizontalScroll from "./HoriScroll";

const useStyle = makeStyles((theme) => ({
  BumperSection: {
    textAlign: "center",
    padding: "128px 16px",
    backgroundColor: "#efefef",
  },
  HorizontalSection: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
  },
  CardsContainer: {
    position: "relative",
    height: "100%",
    padding: "0 0 0 150px",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  SampleCard: {
    position: "relative",
    height: "300px",
    width: "500px",
    backgroundColor: "#111f30",
    marginRight: "75px",
    flexShrink: 0,
  },
}));

const SampleCards = React.memo(() =>
  Array(8)
    .fill(0)
    .map((_e, i) => (
      <div key={`sampleCard-${i}`} className={useStyle().SampleCard} />
    ))
);

const App = () => {
  const classes = useStyle();

  return (
    <div>
      <div className={classes.BumperSection}>
        <h2>Scroll down to reach the horizontal scroll section</h2>
      </div>
      <div className={classes.HorizontalSection}>
        <HorizontalScroll>
          <div className={classes.CardsContainer}>
            <SampleCards />
          </div>
        </HorizontalScroll>
      </div>
      <div className={classes.BumperSection}>
        <h2>You have left the horizontal horizontal scroll section</h2>
      </div>
    </div>
  );
};

export default App;
