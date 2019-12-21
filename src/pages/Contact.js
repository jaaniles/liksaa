import React from "react";
import styled from "@emotion/styled";

import PageWrapper from "../components/PageWrapper";

import { ReactComponent as Proof } from "../assets/svg/proof.svg";

const Content = styled.div({
  gridColumn: "main",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",

  padding: "0 1em",

  color: "hotpink",

  a: {
    color: "white"
  }
});

const Contact = ({ index }) => {
  return (
    <PageWrapper pageIndex={index}>
      <Content>
        <Proof />
        <p>
          GitHub{" "}
          <a
            href="http://github.com/jaaniles"
            target="_blank"
            rel="noopener noreferrer"
          >
            jaaniles
          </a>
        </p>
        <p>
          LinkedIn{" "}
          <a
            href="https://www.linkedin.com/in/jaanileskinen"
            target="_blank"
            rel="noopener noreferrer"
          >
            jaani leskinen
          </a>
        </p>
      </Content>
    </PageWrapper>
  );
};

export default Contact;
