import React from "react";
import styled from "@emotion/styled";

import PageWrapper from "../components/PageWrapper";
import Layout from "../components/layout/GridLayout";

const Content = styled.div({
  gridColumn: "main",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",

  padding: "0 1em"
});

const Portfolio = ({ index }) => {
  return (
    <PageWrapper pageIndex={index}>
      <Content>
        <h2>Hullun pylly</h2>
      </Content>
    </PageWrapper>
  );
};

export default Portfolio;
