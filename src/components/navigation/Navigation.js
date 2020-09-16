import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
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

const Button = styled(motion.button)(
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

const Underline = styled(motion.div)({
  width: "100%",
  height: 8,
  borderRadius: 4,

  position: "absolute",
  bottom: -8
});

const Navigation = ({ location, history }) => {
  return (
    <AnimateSharedLayout>
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
    </AnimateSharedLayout>
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
    <motion.div style={{ position: "relative" }}>
      {isActive && (
        <Underline
          layoutId="underline"
          animate={{ background: color }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      )}
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
    </motion.div>
  );
};

export default withRouter(Navigation);
