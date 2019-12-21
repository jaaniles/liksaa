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
  const [lit, cycleLitness] = useCycle(false, true);

  return (
    <Container
      initial="initial"
      animate="animate"
      onClick={() => cycleLitness()}
    >
      {lit ? (
        <>
          <Flame variants={flameVariants} />
          <Flame variants={flameVariants} custom={1} />
          <Flame variants={flameVariants} custom={0.5} />
        </>
      ) : (
        <SmokeOrigin initial="initial" animate="animate">
          {[...Array(howManyPuffs).keys()].map((p, i) => (
            <SmokePuff
              key={i}
              variants={smokeVariants}
              custom={{
                i,
                l: i % 2 === 0 ? "l" : "r"
              }}
            />
          ))}
        </SmokeOrigin>
      )}
      <Logs />
    </Container>
  );
};

const smokeVariants = {
  initial: {
    scale: 0,
    opacity: 0
  },
  animate: custom => ({
    scale: [0, 0.5 + custom.i * 0.01, 0],
    opacity: [0, 0.8, 0],
    y: [0, -150 + custom.i * 0.02],
    scaleY: [1, 1 - custom.i * 0.01, 0],
    x: ["-50%", custom.l === "l" ? "-80%" : "80%"],
    rotate: custom.l === "l" ? -20 : 20,
    transition: {
      duration: 4 + custom.i * 0.1,
      delay: custom.i * 0.5,
      repeatDelay: custom.i * 0.5,
      loop: Infinity
    }
  })
};

const SmokeOrigin = styled(motion.div)({
  background: "linear-gradient(3deg, rgba(66,39,39,0.99) 0%, #202020 47%)",
  width: 15,
  height: 15,
  borderRadius: 5,

  zIndex: 8,

  left: "50%",
  transform: "translateX(-50%)",

  position: "absolute",
  bottom: 10
});
const howManyPuffs = 8;
const SmokePuff = styled(motion.div)({
  position: "absolute",
  bottom: 0,
  left: "50%",

  width: 22,
  height: 30,
  background: "#5C5C5C",
  borderRadius: "8px 8px 8px 8px / 4px 5px 16px 22px"
});

export default AnimatedCampfire;
