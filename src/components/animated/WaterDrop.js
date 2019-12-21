import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { transparentise, transparentize } from "polished";

import * as ds from "../../design";

const Frame = styled(motion.div)({
  width: "100%",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end"
});

const Drip = styled(motion.div)({
  position: "relative",
  width: 10,
  height: 10,
  background: ds.colors.periwinkle,
  borderRadius: 20,

  "&::before": {
    content: "''",
    position: "absolute",
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderBottom: `15px solid ${ds.colors.periwinkle}`,
    top: -11
  }
});

const Ripple = styled(motion.div)({
  width: "80%",
  height: "55%",

  margin: "0 auto",

  border: `2px solid ${ds.colors.periwinkle}`,
  borderRadius: "100%",

  "&::after": {
    position: "absolute",
    top: "25%",
    left: "52%",
    transform: "translate(-50%)",
    content: "''",
    width: "50%",
    height: "50%",
    border: `1px solid ${(transparentize(0.9), ds.colors.periwinkle)}`,
    borderRadius: "100%"
  }
});

const WaterDrop = () => {
  return (
    <Frame initial="initial" animate="animate">
      <Drip
        variants={{
          initial: {
            top: "-23%",
            opacity: 1
          },
          animate: {
            top: "35%",
            opacity: [0, 1, 1, 0],
            transition: {
              opacity: {
                times: [0, 0.89, 0.9, 1],
                duration: 2.5,
                loop: Infinity,
                repeatDelay: 3
              },
              ease: [1, 0, 0.91, 0.19],
              duration: 2.5,
              loop: Infinity,
              repeatDelay: 3
            }
          }
        }}
      />
      <Ripple
        variants={{
          initial: {
            scale: 0,
            opacity: 0,
            perspective: 400
          },
          animate: {
            scale: 1,
            opacity: [0, 1, 0],
            transition: {
              ease: "linear",
              delay: 2.1,
              duration: 3,
              loop: Infinity,
              repeatDelay: 2.5
            }
          }
        }}
      />
    </Frame>
  );
};

export default WaterDrop;
