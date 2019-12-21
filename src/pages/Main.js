import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import PageWrapper from "../components/PageWrapper";

import naama from "../assets/naama.png";
import silhouette from "../assets/noun_silhouette.png";
import fraktioLogo from "../assets/fraktio.svg";

import * as ds from "../design";

const Content = styled.div({
  gridColumn: "main",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",

  padding: "0 1em"
});

const Avatar = styled(motion.div)(
  ds.mq({
    width: 350,
    height: 350,
    position: "fixed",
    maskImage: `url(${silhouette})`,
    maskSize: "100% 100%",
    bottom: ["0%", "0%", "5%", "7%"],
    background: `linear-gradient(220deg, #1D1115 0%, #1D1115 100%)`,
    opacity: 0.1
  })
);

const Title = styled(motion.h2)(
  ds.mq({
    position: "absolute",
    fontSize: ["2em", "2em", "2.5em"],

    right: ["0%", "5%", "15%", "27%"],

    bottom: ["8%", "8%", "5%"],
    color: "#BCBCBC",
    textAlign: "right",

    img: {
      width: 35,
      verticalAlign: "middle"
    },

    a: {
      color: "white",
      textDecoration: "none"
    },

    padding: "0.25em 0.35em",
    zIndex: 10,
    margin: 0,
    span: {
      fontSize: "0.55em"
    }
  })
);

const Main = ({ index }) => {
  return (
    <PageWrapper pageIndex={index}>
      <Content>
        {/*<IntroductionSequence />*/}
        <Title
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={{
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1,
              transition: {
                transform: {
                  delay: 2.5
                }
              }
            },
            hover: {
              transform: "perspective(400px) rotateY(0deg)"
            }
          }}
        >
          Jaani <br />
          <motion.span
            variants={{
              hover: { borderBottom: "3px solid #EF3D23", color: "#EF3D23" }
            }}
          >
            <img src={fraktioLogo} alt="Fraktio logo" />{" "}
            <a href="http://www.fraktio.fi">fraktio</a>
          </motion.span>
        </Title>
        <Avatar
          variants={avatarVariants}
          whileHover="hover"
          initial="initial"
          animate="breathe"
        ></Avatar>
      </Content>
    </PageWrapper>
  );
};

const avatarVariants = {
  initial: {
    opacity: 0
  },
  breathe: {
    opacity: [0, 1],
    scale: [1, 1.05],
    transition: {
      opacity: {
        delay: 1,
        duration: 1
      },
      duration: 10,
      yoyo: Infinity,
      ease: "backInOut"
    }
  },
  hover: {
    opacity: 1
  }
};

export default Main;
