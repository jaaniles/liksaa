import React from "react";
import styled from "@emotion/styled";

import Flex from "./Flex";

const TagsContainer = styled(Flex)({
  flexWrap: "wrap",

  "> div": {
    marginTop: 4,
    marginBottom: 4
  },
  "> *:not(:last-of-type)": {
    marginRight: 8
  }
});

const TagsLayout = ({ children }) => {
  return (
    <TagsContainer
      row
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      {children}
    </TagsContainer>
  );
};

export default TagsLayout;
