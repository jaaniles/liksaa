import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { transparentize } from "polished";

import * as ds from "../../design";

const textContent = [
  {
    text: "Beep.."
  },
  {
    text: "Boop..."
  },
  {
    text: "You died"
  },
  {
    text: "Gotcha!"
  }
];

const Container = styled.div({
  color: ds.colors.fire,
  fontSize: "2.5em",
  fontWeight: 500,

  textShadow: `1px 12px 65px ${transparentize(0, ds.colors.fire)}`,

  fontFamily: "IBM Plex Serif, serif"
});

const IntroductionSequence = () => {
  const [ivalOn, setIval] = useState(false);
  const [stage, cycle] = useCycle(0, 1, 2, 3);

  useEffect(() => {
    startCycle();
  });

  const startCycle = async () => {
    if (ivalOn) return;
    setIval(true);
    setInterval(() => {
      cycle();
    }, 6000);
  };

  const t = textContent[stage];

  return (
    <Container>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={tVariants}
          key={t.text}
        >
          {t.text.split("").map((c, i) => (
            <motion.span variants={cVariants} key={i}>
              {c}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

const cVariants = {
  initial: {
    opacity: 0,
    y: -10,
    scale: 0,
    transformOrigin: "left center"
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {}
  }
};

const tVariants = {
  initial: {
    opacity: 0,
    transition: {
      staggerChildren: 0.07
    }
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.125
    }
  },
  exit: {
    opacity: 0,
    scale: 0
  }
};

export default IntroductionSequence;
