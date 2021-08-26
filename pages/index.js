/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState } from "react";
export default function App({
  data = [
    { x: 130, y: -130, scale: 1.3 },
    { x: -100, y: -100, scale: 0.9 },
    { x: 0, y: 0, scale: 0.7 },
    { x: 100, y: 100, scale: 0.6 },
    { x: -100, y: 100, scale: 0.8 },
  ],
}) {
  const [s, ss] = useState(data);
  const [t, st] = useState(1);

  return (
    <div className="App" style={{ position: "relative", padding: 200 }}>
      {s.map((x, i) => {
        return (
          <motion.span
            key={x}
            transition={{ duration: t }}
            style={{ position: "absolute" }}
            animate={{ ...x }}
            onClick={() => {
              let temp = data;
              let t;
              st(2);
              t = temp[0];
              temp[0] = temp[i];
              temp[i] = t;
              console.log(temp);
              ss(temp);
            }}
          >
            {i}
            <img
              height="100"
              src="https://uploads.codesandbox.io/uploads/user/9c749c9c-2fd3-4110-a4d4-b71b9325153c/hc5G-user.png"
              alt="cc"
            />
          </motion.span>
        );
      })}
    </div>
  );
}

export async function getStaticProps(context) {
  const s = { ss: "s" };
  return {
    props: { s }, // will be passed to the page component as props
  };
}
