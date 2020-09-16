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
  return <TagsContainer row>{children}</TagsContainer>;
};

export default TagsLayout;
