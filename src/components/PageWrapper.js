import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { withRouter } from "react-router";

import Layout from "./layout/GridLayout";

const variants = {
  initial: {
    x: 100,
    opacity: 0
  },
  enter: {
    x: 0,
    opacity: 1
  },
  exit: {
    opacity: 0
  },

  up: {
    y: -200
  },
  down: {
    y: 200
  },
  left: {
    x: -200
  },
  right: {
    x: 200
  }
};

const Wrapper = styled(motion.div)({
  maxHeight: "85vh",
  overflow: "auto"
});

const PageWrapper = ({ children, pageIndex, location, history }) => {
  return (
    <Wrapper
      variants={variants}
      initial="initial"
      animate="enter"
      exit={"exit"}
    >
      <Layout>{children}</Layout>
    </Wrapper>
  );
};
export default withRouter(PageWrapper);
