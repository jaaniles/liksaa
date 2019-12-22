import React from "react";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LastLocationProvider } from "react-router-last-location";

import Navigation from "./components/navigation/Navigation";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Fun from "./pages/Fun";

import webdevIcon from "./assets/webdev.svg";
import contactIcon from "./assets/contact.svg";

import * as ds from "./design";

export const sitemap = [
  {
    name: "webdev",
    url: "/fun",
    Component: Fun,
    icon: webdevIcon,
    pos: "left"
  },
  { name: "Jaani", url: "/", Component: Main, pos: "mid" },
  {
    name: "proof",
    url: "/proof",
    Component: Contact,
    icon: contactIcon,
    pos: "right"
  }
];

const ContainApp = styled.div({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",

  "> div": {
    ":first-of-type": {
      height: "85%"
    },
    ":last-of-type": {
      width: "95%",
      display: "flex",
      flex: 1,
      margin: "1em 0.5em"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={ds}>
      <Router>
        <LastLocationProvider>
          <Global styles={[globalStyles]} />
          <ContainApp>
            <Route
              render={({ location }) => {
                return (
                  <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                      {sitemap.map((p, i) => (
                        <Route
                          key={p.name}
                          exact
                          path={p.url}
                          render={props => <p.Component {...props} index={i} />}
                        />
                      ))}
                    </Switch>
                  </AnimatePresence>
                );
              }}
            />
            <Navigation />
          </ContainApp>
        </LastLocationProvider>
      </Router>
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
