import React from "react";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Flex from "./components/layout/Flex";
import Navigation from "./components/navigation/Navigation";

import Main from "./components/Main";
import Example from "./components/Example";
import Example2 from "./components/Example2";
import Background from "./components/animated/Background";

import * as ds from "./design";

export const sitemap = [
  {
    url: "/",
    label: "Main",
    color: ds.colors.lila,
    Component: Main
  },
  {
    url: "/example",
    label: "Example 1",
    color: ds.colors.amber,
    Component: Example
  },
  {
    url: "/example2",
    label: "Example 2",
    color: ds.colors.secondary,
    Component: Example2
  }
];

const MainContainer = styled(Flex)({
  justifyContent: "flex-start",
  width: "100%",
  minHeight: "100%",

  background: "linear-gradient(62deg, #2A243F 75%, #A02A47 100%)",
  paddingTop: 32,

  "> div:first-of-type ": {
    minHeight: 600
  }
});

function App() {
  return (
    <>
      <Global styles={[globalStyles]} />

      <Router>
        <Global styles={[globalStyles]} />
        <Router>
          <MainContainer column centered>
            <Route
              render={({ location }) => {
                return (
                  <Switch location={location} key={location.pathname}>
                    {sitemap.map((p, i) => (
                      <Route
                        key={i}
                        exact
                        path={p.url}
                        render={props => <p.Component {...props} index={i} />}
                      />
                    ))}
                  </Switch>
                );
              }}
            />
            <Navigation />
            <Background />
          </MainContainer>
        </Router>
      </Router>
    </>
  );
}

const globalStyles = {
  html: {
    height: "100%"
  },
  body: {
    fontFamily: "Raleway, sans-serif",
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
  button: {
    fontFamily: "Raleway, sans-serif"
  },
  "h1, h2, h3, h4": {
    fontFamily: "Kumbh Sans"
  },
  "#root": {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    width: "100%"
  }
};

export default App;
