import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import HorizontalScroll from "../Components/horizontal-scroll";
import Journey from "../Components/journey";

const useStyles = makeStyles(() => ({
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
    flexflow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

const scroll = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.BumperSection}>
        <h2>Scroll down to reach the horizontal scroll section</h2>
      </div>
      <div className={classes.HorizontalSection}>
        <HorizontalScroll>
          <div className={classes.CardsContainer}>
            <Journey />
          </div>
        </HorizontalScroll>
      </div>
      <div className={classes.BumperSection}>
        <h2>You have left the horizontal horizontal scroll section</h2>
      </div>
    </div>
  );
};

export default scroll;
