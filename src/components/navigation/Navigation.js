import React from "react";
import styled from "@emotion/styled";
import { withRouter } from "react-router";

import Flex from "../layout/Flex";

import * as ds from "../../design";

const sitemap = [
  {
    url: "/",
    label: "Index",
    color: ds.colors.lila
  },
  {
    url: "/example",
    label: "Example 1",
    color: ds.colors.amber
  },
  {
    url: "/example2",
    label: "Example 2",
    color: ds.colors.secondary
  }
];

const NavigationContainer = styled(Flex)({
  color: ds.colors.white,
  padding: 8,
  width: "100%"
});

const Button = styled.button(
  {
    background: "none",
    border: "none",
    outline: "none",
    color: ds.colors.white,
    fontSize: ds.sizes.xxl,

    p: {
      zIndex: 1
    }
  },
  props => props.color && props.isActive && { color: props.color }
);

const Underline = styled.div({
  width: "100%",
  height: 8,
  borderRadius: 4,

  position: "absolute",
  bottom: -8
});

const Navigation = ({ location, history }) => {
  return (
    <NavigationContainer row>
      {sitemap.map((s, i) => (
        <NavigationButton
          key={i}
          isActive={location.pathname === s.url}
          location={location}
          history={history}
          label={s.label}
          url={s.url}
          color={s.color}
        />
      ))}
    </NavigationContainer>
  );
};

const NavigationButton = ({
  isActive = false,
  history,
  url = "/",
  label = "Index",
  color
}) => {
  const navigateTo = (url = "/") => {
    history.push(url);
  };

  return (
    <div style={{ position: "relative" }}>
      {isActive && <Underline />}
      <Button
        isActive={isActive}
        onClick={() => navigateTo(url)}
        color={color}
        initial="initial"
        animate={isActive ? "active" : "initial"}
        variants={{
          initial: {
            scale: 0.5
          },
          active: {
            scale: 1
          }
        }}
      >
        {label}
      </Button>
    </div>
  );
};

export default withRouter(Navigation);
