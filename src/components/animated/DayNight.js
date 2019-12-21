import React from "react";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { transparentize } from "polished";

import * as ds from "../../design";

const orange = "#b33700";

const WorldCircle = styled(motion.div)({
  width: 125,
  height: 125,
  borderRadius: "25%",

  position: "relative",
  overflow: "hidden",

  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end"
});

const Waterline = styled(motion.div)({
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "40%",

  borderRadius: "10%",

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

  boxShadow: `inset -6px 2px 0 0px #727272`,

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

const DayNight = () => {
  const ctrls = useAnimation();

  const handleCycle = async () => {
    await ctrls.start("night");
    await ctrls.start("day");
    handleCycle();
  };

  handleCycle();

  return (
    <WorldCircle
      initial="initial"
      animate={ctrls}
      variants={{
        initial: {
          background: "linear-gradient(to bottom, #BE4405, #F6C60C)"
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
      <Waterline
        variants={{
          initial: {
            background:
              "linear-gradient(90deg, #31556D 0%, #31556D 21%, #31556D 53%, #31556D 82%, #31556D 100%)"
          },
          day: {
            background:
              "linear-gradient(90deg, #6D9697 0%, #6D9697 21%, rgba(255,207,145,0.71) 53%, #6D9697 82%, #6D9697 100%)",
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
            y: 95,
            x: -150
          },
          day: {
            x: -36,
            y: -30,
            transition: {
              yoyo: 1,
              duration: 3,
              repeatDelay: 2
            }
          }
        }}
      />
      <Moon
        variants={{
          initial: {
            y: -77,
            x: 100
          },
          night: {
            x: -20,
            y: -55,
            transition: {
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
  );
};

export default DayNight;
