import React from "react";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

import * as ds from "./design";


function App() {
  return (
    <ThemeProvider theme={ds}>
      <h1>Hello</h1>
    </ThemeProvider>
  );
}

const globalStyles = {
  html: {
    height: "100%",
    background: "#333333"
  },
  body: {
    fontFamily: "IBM Plex Sans Condensed, sans-serif",
    padding: 0,
    margin: 0,
    width: "100%",
    display: "flex",
    background: "linear-gradient(24deg, #010A13 0%, #000206 52%);",
    color: ds.colors.black,

    textShadow: "1px 1px 1px rgba(0,0,0,0.004)",
    textRendering: "optimizeLegibility !important",
    WebkitFontSmoothing: "antialiased !important",
    fontSize: "calc(13px + .35vw)",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto"
  },
  p: {
    opacity: 0.65
  },
  "h1, h2, h3, h4": {
    fontFamily: "IBM Plex Serif, serif"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  small: {
    color: ds.colors.grey
  },
  button: {
    fontFamily: "Verdana"
  },
  h4: {
    ...ds.headings.h4
  },
  "#root": {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    width: "100%"
  }
};

export default App;
