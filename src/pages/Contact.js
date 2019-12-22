import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { ReactComponent as Instagram } from "../assets/svg/instagram.svg";
import { ReactComponent as Github } from "../assets/svg/github-logo.svg";
import { ReactComponent as Linkedin } from "../assets/svg/linkedin.svg";

import PageWrapper from "../components/PageWrapper";

const Content = styled.div({
  gridColumn: "main",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",

  padding: "0 1em",

  a: {
    color: "white"
  }
});

const Row = styled(motion.div)({
  display: "flex",
  marginTop: "auto",

  paddingBottom: "2em",

  "> div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",

    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: 16,
    padding: "0.5em",

    "&:not(:last-of-type)": {
      marginRight: "2em"
    },

    svg: {
      width: 55,
      height: 55
    }
  }
});

const itemVariants = {
  initial: {
    scale: 0,
    perspective: 400,
    rotateY: -35,
    rotateX: 20,
    filter: "grayscale(100)"
  },
  animate: {
    scale: 1,
    filter: "grayscale(0)"
  },
  tap: {
    rotateY: -395,
    rotateX: 380,
    scale: 1
  },
  hover: {
    rotateY: 0,
    rotateX: 0,
    y: -10,
    scale: 0.95
  }
};

const Contact = ({ index }) => {
  return (
    <PageWrapper pageIndex={index}>
      <Content>
        <Row
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: { staggerChildren: 0.07, delayChildren: 1 }
            }
          }}
        >
          <motion.div whileHover="hover" whileTap="tap" variants={itemVariants}>
            <a
              href="http://instagram.com/jaaniles"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </motion.div>
          <motion.div whileHover="hover" whileTap="tap" variants={itemVariants}>
            <a
              href="http://github.com/jaaniles"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </motion.div>
          <motion.div whileHover="hover" whileTap="tap" variants={itemVariants}>
            <a
              href="https://www.linkedin.com/in/jaanileskinen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </motion.div>
        </Row>
      </Content>
    </PageWrapper>
  );
};

export default Contact;
