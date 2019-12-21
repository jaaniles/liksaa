import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import { sitemap } from "../../App";

const NavigationWrapper = styled(motion.div)({
  position: "relative",
  borderRadius: 25,
  maxHeight: 80,
  maxWidth: 500,
  background: "linear-gradient(180deg, #1C1115 16%, #231123 100%);",

  fontWeight: 600
});

const NavigationItemsContainer = styled(motion.div)({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "[l] 1fr [mid] 1fr [r] 1fr",
  gridTemplateRows: "1fr 4px"
});

const NaviButton = styled(motion.div)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  cursor: "pointer",

  WebkitTapHighlightColor: "rgba(255, 255, 255, 0)",

  a: {
    color: "white",
    textDecoration: "none",
    position: "relative",

    img: {
      width: 25,
      marginRight: 8,
      verticalAlign: "middle"
    }
  },

  margin: "0 auto"
});

const CenterButton = styled(NaviButton)({
  width: 82,
  boxShadow: "0px 15px 28px 20px rgba(234, 51, 128, 0.25)",

  a: {
    background: "transparent",
    color: "white"
  }
});

const Navigation = ({ location, history }) => {
  const navigateTo = url => {
    history.push(url);
  };

  return (
    <NavigationWrapper
      initial="initial"
      animate="animate"
      variants={{
        initial: { y: 50, scale: 0 },
        animate: {
          scale: 1,
          y: [0, 2, -2, 0],
          transition: {
            delay: 0.5,
            scale: {
              duration: 0.25
            },
            duration: 5,
            yoyo: Infinity,
            staggerChildren: 0.25,
            delayChildren: 0.8
          }
        }
      }}
    >
      <NavigationItemsContainer>
        <Indicator
          variants={indicatorVariants}
          initial="initial"
          animate={getLocIndex(location)}
        />
        {sitemap.map((s, i) =>
          i === 1 ? (
            <CenterBtn key={i} s={s} navigateTo={navigateTo} />
          ) : (
            <NaviButton
              key={i}
              variants={naviBtnVariants}
              whileHover="hover"
              whileTap="hover"
            >
              <Link to={s.url}>
                <img src={s.icon} alt="alt" />
                {s.name}
              </Link>
            </NaviButton>
          )
        )}
      </NavigationItemsContainer>
    </NavigationWrapper>
  );
};

const getLocIndex = location => {
  return sitemap.find(s => s.url === location.pathname).pos;
};

const CenterBtn = ({ s, navigateTo }) => (
  <CenterButton
    initial="initial"
    animate="animate"
    whileHover="hover"
    whileTap="hover"
    variants={blobBtnVariants}
    onClick={() => navigateTo(s.url)}
  >
    <Link to={s.url}>{s.name}</Link>
  </CenterButton>
);

const indicatorVariants = {
  initial: {
    height: 4,
    left: "0%"
  },
  left: {
    left: "8%"
  },
  mid: {
    left: "40%"
  },
  right: {
    left: "75%"
  }
};

const Indicator = styled(motion.div)({
  borderRadius: 8,
  width: "20%",
  background: "#F23468",

  position: "absolute",
  bottom: 0,

  gridRow: 2
});

const naviBtnVariants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  hover: {
    scale: 1.2,
    opacity: 0.8
  }
};

const blobBtnVariants = {
  initial: {
    borderRadius: "0% 0% 0% 0%",
    background: "linear-gradient(180deg, #EA3380 16%, #FC3744 100%)"
  },
  animate: {
    borderRadius: [
      "73% 28% 67% 23% / 19% 99% 24% 34%",
      "13% 43% 22% 80% / 28% 19% 55% 80%",
      "80% 22% 50% 80% / 80% 80% 80% 20%"
    ],
    background: [
      "linear-gradient(180deg, #FC3744 38%, #EA3380 100%)",
      "linear-gradient(180deg, #EA3380 16%, #FC3744 100%)"
    ],
    y: ["-20px", "-26px", "-16px", "-23px"],
    x: ["-2px", "3px", "0px", "3px"],
    scale: 1,
    transition: {
      y: {
        duration: 10
      },
      duration: 5,
      yoyo: Infinity
    }
  },
  hover: {
    scale: 1.1
  }
};

export default withRouter(Navigation);
