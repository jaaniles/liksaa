import React from "react";
import styled from "@emotion/styled";
import { motion, useCycle } from "framer-motion";
import { transparentize } from "polished";

import { mq } from "../../design";

const yellow = "#F5BF42";
const yellow2 = "#ffc000";
const orange = "#b33700";

const Container = styled(motion.div)({
  margin: "4em 2em",
  position: "relative",

  width: 120,
  height: 120
});

const Flame = styled(motion.div)({
  position: "absolute",
  left: "50%",
  width: 65,
  height: 65,

  boxShadow: `1px 12px 50px ${transparentize(0.1, orange)}`
});

const Logs = styled.div(
  mq({
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    height: ["10%", "10%", "17%"],

    "&::after, &::before": {
      background: "#612E25",
      transform: "translate(-50%, -50%) rotate(-17deg)",
      position: "absolute",
      content: "''",
      top: "50%",
      left: "50%",
      height: "100%",
      width: "100%",
      borderRadius: 5
    },

    "&::before": {
      background: "#70392F",
      transform: "translate(-50%, -50%) rotate(17deg)"
    }
  })
);

const flameVariants = {
  initial: {
    rotate: 45,
    x: "-50%",
    scale: 0,
    bottom: 0
  },
  animate: custom => ({
    scale: [0, 1, 0],
    y: [0, -20, -100],
    borderRadius: [10, 10, 20],
    x: ["-50%", "-50%", "-20%"],
    background: [yellow, yellow2, orange],
    transition: {
      delay: custom || 0,
      repeatDelay: 0,
      duration: 2.5,
      loop: Infinity
    }
  })
};

const AnimatedCampfire = () => {
  return (
    <Container initial="initial" animate="animate">
      <>
        <Flame variants={flameVariants} />
        <Flame variants={flameVariants} custom={1} />
        <Flame variants={flameVariants} custom={0.5} />
      </>
      <Logs />
    </Container>
  );
};

export default AnimatedCampfire;
