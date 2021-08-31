import { makeStyles } from "@material-ui/core/styles";
import River from "../Components/Riverflow";
import { useState, useEffect } from "react";
import HoriSection from "../Components/HoriScrollIndex";
const useStyles = makeStyles((theme) => ({
  c0: { transform: "translate(130px,-130px)", transition: "transform 2s" },
  c1: { transform: "translate(-100px, -100px)", transition: "transform 2s" },
  c2: { transform: "translate(0px, 0px)", transition: "transform 2s" },
  c3: { transform: "translate(100px, 100px)", transition: "transform 2s" },
  c4: { transform: "translate(-100px, 100px)", transition: "transform 2s" },
}));
export default function App({}) {
  const classes = useStyles();

  const [s, ss] = useState([
    classes.c0,
    classes.c1,
    classes.c2,
    classes.c3,
    classes.c4,
  ]);
  const [a, sa] = useState(0);

  function change(i) {
    sa(i);
  }

  useEffect(() => {
    let temp = [classes.c0, classes.c1, classes.c2, classes.c3, classes.c4];
    let t;
    t = temp[0];
    temp[0] = temp[a];
    temp[a] = t;
    console.log(a);

    ss(temp);
  }, [a]);

  return (
    <>
      <div className="App" style={{ position: "relative", padding: 200 }}>
        {[0, 1, 2, 3, 4].map((x, i) => {
          return (
            <div
              key={i * i}
              id={i}
              style={{ position: "absolute" }}
              className={s[i]}
              onClick={() => {
                change(i);
              }}
            >
              {i}
              <img
                height="100"
                src={
                  "https://uploads.codesandbox.io/uploads/user/2559df5f-382a-4254-8815-3d91b4ca89b2/Anww-user.png"
                }
                alt="12"
              />
            </div>
          );
        })}
      </div>
      <div>
        <HoriSection />
        <div>
          <River />
        </div>
      </div>
    </>
  );
}
