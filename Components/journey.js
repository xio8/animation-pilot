import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    padding: "60px 30px 30px 80px",
    background: "#F2F2F2",
    width: "150vw",
  },
  TopDiv: {
    "& p": {
      maxWidth: "500px",
    },
  },
  BottomDiv: {
    display: "flex",
  },
  div1: {
    width: "400px",
    marginRight: "300px",
  },
  div2: {
    width: "400px",
    marginRight: "300px",
    "&:last-child": {
      marginRight: "0px",
    },
  },
}));

const journey = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerWrapper}>
      <div className={classes.container}>
        <div className={classes.TopDiv}>
          <p>Our Journey</p>
          <h3>How did we get here ?</h3>
          <p>
            Our journey toward becoming largest backup data platform had humble
            beginings humble
          </p>
        </div>
        <div className={classes.BottomDiv}>
          <div className={classes.div1}>
            <h4>2012</h4>
            <h3>Data Migration gave us a HeadStart</h3>
            <p>
              Say goodbye to obsolete and passive backup services. With SysCloud
              backup, automatically inspect backup archives for ransomware,
              phishing, and compliance risks with an option to restore from safe
              snapshots.
            </p>
          </div>
          <div className={classes.div2}>
            <h1>02</h1>
            <h3>Why Should You Consider SysCloud for Cloud Backup?</h3>
            <p>
              Say goodbye to obsolete and passive backup services. With SysCloud
              backup, automatically inspect backup archives for ransomware,
              phishing, and compliance risks
            </p>
          </div>
          <div className={classes.div2}>
            <h1>03</h1>
            <h3>Why Should You Consider SysCloud for Cloud Backup?</h3>
            <p>
              Say goodbye to obsolete and passive backup services. With SysCloud
              backup, automatically inspect backup archives for ransomware,
              phishing, and compliance risks
            </p>
          </div>
          <div className={classes.div2}>
            <h1>04</h1>
            <h3>Why Should You Consider SysCloud for Cloud Backup?</h3>
            <p>
              Say goodbye to obsolete and passive backup services. With SysCloud
              backup, automatically inspect backup archives for ransomware,
              phishing, and compliance risks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default journey;
