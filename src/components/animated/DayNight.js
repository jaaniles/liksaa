import React from "react";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { transparentize } from "polished";
import VisbilitySensor from "react-visibility-sensor";

import * as ds from "../../design";

const orange = "#b33700";

const WorldCircle = styled(motion.div)({
  width: 125,
  height: 125,
  borderRadius: "50%",

  position: "relative",
  overflow: "hidden",

  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end"
});

const Waterline = styled(motion.div)({
  position: "absolute",
  bottom: -5,
  width: "100%",
  height: "40%",

  zIndex: 1
});

const Sun = styled(motion.div)({
  position: "absolute",

  width: 48,
  height: 48,
  background: "#F2EF88",
  borderRadius: "50%",

  boxShadow: `1px 12px 55px 5px ${orange}`
});

const Moon = styled(motion.div)({
  position: "absolute",
  zIndex: 2,
  width: 40,
  height: 40,
  background: "#D9D8D0",
  borderRadius: "50%",

  boxShadow: `inset -4px 2px 0 0px #727272`,

  "> div": {
    content: "''",
    position: "absolute",
    background: "#b9b8b0",
    borderRadius: "50%",
    boxShadow: "inset 2px -2px 0 0px #535457",
    width: "30%",
    height: "30%",
    top: "20%",
    left: "20%",

    "&:nth-of-type(2)": {
      width: "18%",
      height: "18%",
      top: "35%",
      left: "60%"
    },
    "&:nth-of-type(3)": {
      width: "15%",
      height: "15%",
      top: "65%",
      left: "42%"
    }
  }
});

const Stars = styled(motion.div)({
  position: "absolute",
  width: "100%",
  height: "100%",

  "> div": {
    position: "absolute",
    background: "#FFF",

    borderRadius: "50%",
    boxShadow: "0 0 8px rgba(255, 255, 255, 1)",
    overflow: "hidden",
    width: "0.8%",
    height: "0.8%",

    top: "30%",
    left: "25%",

    "&:nth-of-type(2)": {
      top: "10%",
      left: "50%"
    },
    "&:nth-of-type(3)": {
      top: "51%",
      left: "42%"
    },
    "&:nht-of-type(4)": {
      top: "22%",
      left: "80%"
    }
  }
});

const starVariants = {
  initial: {
    y: -100,
    x: 100,
    opacity: 0
  },
  night: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      yoyo: 1,
      duration: 2,
      repeatDelay: 3
    }
  }
};

const DayNight = () => {
  const ctrls = useAnimation();

  const handleCycle = async () => {
    await ctrls.start("night");
    await ctrls.start("day");

    handleCycle();
  };

  const onVisibilityChange = isVisible => {
    if (!isVisible) {
      ctrls.start("initial");
    } else {
      handleCycle();
    }
  };

  return (
    <VisbilitySensor onChange={onVisibilityChange}>
      <WorldCircle
        initial="initial"
        animate={ctrls}
        variants={{
          initial: {
            background: "linear-gradient(to bottom, #0B1624, #121D3A)"
          },
          day: {
            boxShadow: `1px 12px 25px 15px ${transparentize(
              0.85,
              ds.colors.romantic
            )}`,
            background: "linear-gradient(to bottom, #BE4405, #F6C60C)"
          },
          night: {
            boxShadow: `1px 12px 50px 10px ${transparentize(
              0.85,
              ds.colors.sweet
            )}`,
            background: "linear-gradient(to bottom, #0B1624, #121D3A)"
          }
        }}
      >
        <Stars variants={starVariants}>
          <div />
          <div />
          <div />
          <div />
        </Stars>
        <Waterline
          variants={{
            initial: {
              background:
                "linear-gradient(90deg, #31556D 0%, #31556D 21%, #6E9CB7 53%, #31556D 82%, #31556D 100%)"
            },
            day: {
              background: `linear-gradient(90deg, #6D9697 0%, #6D9697 21%, ${transparentize(
                0.3,
                "#FFCF91"
              )} 53%, #6D9697 82%, #6D9697 100%)`,
              transition: {
                background: {
                  ease: "anticipate",
                  times: [0, 0.9],
                  yoyo: 1,
                  duration: 3,
                  repeatDelay: 2
                },
                yoyo: 1,
                duration: 3,
                repeatDelay: 2
              }
            },
            night: {
              background:
                "linear-gradient(105deg, #31556D 0%, #31556D 35%, #9BB1CF 53%, #31556D 82%, #31556D 100%)",

              transition: {
                background: {
                  ease: "anticipate",
                  times: [0, 0.9],
                  yoyo: 1,
                  duration: 3,
                  repeatDelay: 2
                }
              }
            }
          }}
        />
        <Sun
          variants={{
            initial: {
              y: 60,
              x: -110
            },
            day: {
              x: -36,
              y: -28,
              transition: {
                yoyo: 1,
                duration: 2,
                repeatDelay: 2
              }
            }
          }}
        />
        <Moon
          variants={{
            initial: {
              y: -90,
              x: 50
            },
            night: {
              x: -20,
              y: -58,
              transition: {
                ease: "anticipate",
                yoyo: 1,
                duration: 3,
                repeatDelay: 2
              }
            }
          }}
        >
          <div />
          <div />
          <div />
        </Moon>
      </WorldCircle>
    </VisbilitySensor>
  );
};

export default DayNight;
