import React from "react";
import styled from "@emotion/styled";

import * as ds from "../design";

const TagStyle = styled.div({
  borderRadius: 16,
  background: ds.colors.lila,

  display: "inline-block",
  padding: "4px 16px",

  p: {
    margin: 0
  }
});

const Tag = ({ label = "SOMETHING" }) => {
  return (
    <TagStyle>
      <p>{label}</p>
    </TagStyle>
  );
};

export default Tag;
