import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import * as ds from "../design";

const TagStyle = styled(motion.div)({
  borderRadius: 16,

  display: "inline-block",
  padding: "4px 16px",

  p: {
    margin: 0
  }
});

const Tag = ({ label = "SOMETHING" }) => {
  return (
    <TagStyle
      variants={{
        initial: {
          background: ds.colors.lila,
          cursor: "pointer",
          opacity: 0,
          scale: 0.5,
          y: 15
        },
        animate: {
          opacity: 1,
          scale: 1,
          y: 0
        }
      }}
      whileHover={{
        background: ds.colors.amber,
        y: -3
      }}
    >
      <p>{label}</p>
    </TagStyle>
  );
};

export default Tag;
