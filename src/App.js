import React from "react";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";

import Flex from "./components/layout/Flex";
import Navigation from "./components/navigation/Navigation";

import Main from "./components/Main";
import Example from "./components/Example";
import Example2 from "./components/Example2";

import * as ds from "./design";

const MainContainer = styled(Flex)({
  justifyContent: "flex-start",
  width: "100%",
  minHeight: "100%",

  background:
    "linear-gradient(9.1deg, rgba(165, 159, 182, 0.88) -88.65%, rgba(61, 42, 120, 0.94) 58%)",

  "> div:first-of-type ": {
    minHeight: 600
  }
});

function App() {
  return (
    <ThemeProvider theme={ds}>
      <Global styles={[globalStyles]} />

      <Router>
        <LastLocationProvider>
          <Global styles={[globalStyles]} />
          <MainContainer column centered>
            <Router>
              <Route
                render={({ location }) => {
                  return (
                    <AnimatePresence exitBeforeEnter>
                      <Switch location={location} key={location.pathname}>
                        <Route key="index" exact path="/" component={Main} />
                        <Route
                          key="example"
                          exact
                          path="/example"
                          component={Example}
                        />
                        <Route
                          key="example2"
                          exact
                          path="/example2"
                          component={Example2}
                        />
                      </Switch>
                    </AnimatePresence>
                  );
                }}
              />
              <Navigation />
            </Router>
          </MainContainer>
        </LastLocationProvider>
      </Router>
    </ThemeProvider>
  );
}

const globalStyles = {
  html: {
    height: "100%"
  },
  body: {
    fontFamily: "IBM Plex Sans Condensed, sans-serif",
    padding: 0,
    margin: 0,
    width: "100%",
    display: "flex",

    textShadow: "1px 1px 1px rgba(0,0,0,0.004)",
    textRendering: "optimizeLegibility !important",
    WebkitFontSmoothing: "antialiased !important",
    fontSize: "calc(13px + .35vw)",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    color: ds.colors.white
  },
  "h1, h2, h3, h4, button, p": {
    fontFamily: "IBM Plex Serif, serif"
  },
  "#root": {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    width: "100%"
  }
};

export default App;
