import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { transparentize } from "polished";

const PageOverlay = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",

  overflow: "hidden",

  zIndex: 0,

  "> *": {
    pointerEvents: "auto",
    zIndex: 15
  }
});

const Shape = styled(motion.div)(props => ({
  width: props.size || 20,
  height: props.size || 20,

  position: "absolute",
  left: props.pos || 0,
  bottom: 0,
  display: "block",
  listStyle: "none",
  background: props.background || transparentize(0.9, "#FEA159"),

  borderRadius: props.radius || 0
}));

const createRandom = () => ({
  left: `${randomInt(-5, 105)}%`,
  size: `${randomInt(10, 18)}px`,
  radius: `${randomInt(0, 8)}px`,
  background: `${
    randomInt(0, 100) > 50
      ? transparentize(0.8, "#BE3E61")
      : transparentize(0.8, "#FEA159")
  }`
});

const createRandomTiming = i => ({
  duration: 35 + randomInt(0, 20),
  delay: i % 2 === 0 ? i + randomInt(2, 5) : i / i + randomInt(0.5, 1.5)
});

const SHAPE_AMOUNT = 15;
const shapes = [...Array(SHAPE_AMOUNT).keys()].map(() => createRandom());

const AnimatedBackground = () => {
  return (
    <PageOverlay>
      {shapes.map((s, i) => (
        <Shape
          size={s.size}
          pos={s.left}
          radius={s.radius}
          background={s.background}
          key={i}
          initial="initial"
          animate="live"
          whileTap="tap"
          variants={{
            initial: {
              y: 35,
              rotate: 0
            },
            live: {
              y: -1920,
              rotate: 900,
              scale: [1.2, 1, 0.35, 1, 0],
              transition: {
                ease: [0.25, 0.46, 0.45, 0.94],
                ...createRandomTiming(i),
                loop: Infinity
              }
            },
            tap: {
              scale: 2,
              rotate: -720,
              transition: {
                flip: Infinity,
                duration: 2,
                repeatDelay: 2
              }
            }
          }}
        />
      ))}
    </PageOverlay>
  );
};

export default AnimatedBackground;

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
