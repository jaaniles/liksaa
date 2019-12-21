import React, { useState } from "react";
import styled from "@emotion/styled";
import { transparentize } from "polished";
import { motion } from "framer-motion";
import SwipeableViews from "react-swipeable-views";

import PageWrapper from "../components/PageWrapper";
import Campfire from "../components/animated/Campfire";
import DayNight from "../components/animated/DayNight";

import tool from "../assets/tool.svg";
import modern from "../assets/modern.svg";

import * as ds from "../design";

const SlantedCard = styled(motion.div)(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    minWidth: 100,
    maxWidth: 200,
    maxHeight: 200,
    margin: "0 1em",

    transform: "perspective(400px) rotateY(-40deg) rotateX(20deg)",
    background: "linear-gradient(13deg, #340018 2%, #1A0010 56%);",
    boxShadow: `2px 3px 15px ${transparentize(0.45, "#010001")}`,

    img: {
      width: "80%",
      maxWidth: 200,
      height: "auto",
      margin: "0 auto"
    },

    width: "100%",
    height: "auto",
    borderRadius: 20
  },
  props =>
    props.flip && {
      transform: "perspective(400px) rotateY(40deg) rotateX(20deg)"
    },
  props =>
    props.flat && {
      transform: "perspective(400px) rotateY(0deg) rotateX(0deg)"
    },
  props =>
    props.transparent && {
      background: "transparent"
    }
);

const Row = styled.div(
  ds.mq({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: ["1em auto", "1.75em auto", "4em auto"],
    position: "relative",
    flexDirection: "row-reverse",

    overflow: "visible",

    p: {
      maxWidth: "60ch"
    }
  }),
  props =>
    props.flip && {
      flexDirection: "row"
    },
  props =>
    props.small && {
      background: "rgba(255, 255, 255, 0.01)",
      padding: "0em 0.5em",
      fontSize: "0.9em",
      marginLeft: "1em !important",
      marginRight: "1em !important",
      transform: "perspective(400px) rotateY(15deg) rotateX(5deg)"
    }
);

const InfoContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  p: {
    margin: "4px 0px"
  }
});

const View = styled.div({
  padding: "1em",
  position: "relative",
  overflow: "hidden"
});

const Content = styled.div({
  gridColumn: "main",
  color: ds.colors.white
});

const Main = ({ index }) => {
  const [vI, setvI] = useState(0);

  const handleIChange = ev => {
    setvI(ev);
  };

  return (
    <PageWrapper pageIndex={index}>
      <Content>
        <SwipeableViews
          enableMouseEvents
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "85%"
          }}
          index={vI}
          onChangeIndex={handleIChange}
        >
          {viewItems.map((vi, i) => (
            <ViewComponent
              key={i}
              title={vi.title}
              content={vi.content}
              CustomComponent={vi.CustomComponent}
              small={vi.small}
              i={i}
            />
          ))}
        </SwipeableViews>
        <Thumbnails>
          {viewItems.map((v, i) => (
            <Thumbnail
              initial="initial"
              animate={i === vI ? "active" : "initial"}
              whileHover="hover"
              variants={{
                initial: {
                  scale: 1,
                  background: transparentize(1, "#ED3477"),
                  borderRadius: 4,
                  opacity: 0.25
                },
                active: {
                  scale: [1.75, 1.25],
                  background: "#ED3477",
                  borderRadius: 28,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 350,
                    damping: 15
                  }
                },
                hover: {
                  opacity: 0.5,
                  rotate: 90,
                  borderRadius: 28,
                  transition: {
                    borderRadius: {
                      delay: 0.15
                    }
                  }
                }
              }}
              key={i}
              active={i === vI}
              onClick={() => setvI(i)}
            />
          ))}
        </Thumbnails>
      </Content>
    </PageWrapper>
  );
};

const Thumbnails = styled.div({
  display: "flex",
  justifyContent: "center"
});

const Thumbnail = styled(motion.div)({
  width: 18,
  height: 18,
  WebkitTapHighlightColor: "rgba(255, 255, 255, 0)",
  cursor: "pointer",

  border: `2px solid #ED3477`,

  "&:not(:last-of-type)": {
    marginRight: 32
  }
});

const SlantedCardWithImage = ({ img, alt }) => (
  <SlantedCard>
    <img src={img} alt={alt} />
  </SlantedCard>
);

const viewItems = [
  {
    title: "Motion and Movement",
    content: `I enjoy developing pretty things that move. From 3D-animation
    to UI's that dance, creating motion is what excites me.`,
    CustomComponent: (
      <SlantedCard transparent>
        <DayNight />
      </SlantedCard>
    )
  },
  {
    title: (
      <span>
        Digital Napoleon
        <span role="img" aria-label="tool">
          🎖️
        </span>
      </span>
    ),
    content: `I'm a relatively young developer in the grand scheme of
    things. I have grown up with techs like React and thus I have
    been shaped by the modern ways of web development. XML, SAP and all the oldies - the burden of legacy does not
    hinder my work.`,
    CustomComponent: (
      <SlantedCard flip>
        <img src={modern} alt="modern" />
      </SlantedCard>
    )
  },
  {
    small: true,
    title: "You have encountered a campfire",
    content: (
      <span>
        Stay a while and relax -- <span style={{ color: "#ff7844" }}>tap</span>{" "}
        to light it up
      </span>
    ),
    CustomComponent: <Campfire />
  },
  {
    title: (
      <span>
        Favorite tool{" "}
        <span role="img" aria-label="tool">
          🛠️
        </span>{" "}
        in the shed
      </span>
    ),
    content: `For me programming is a means to an end. A way to implement
    something cool. I do enjoy the act of programming itself but
    what excites me the most is result. Rarely do I get bogged
    down by a technical detail as long as the implementation gets
    the job done. Code is a tool which grants me the grand ability to create.
    And oh what a privilege that is.`,
    CustomComponent: <SlantedCardWithImage img={tool} alt="Code is a tool" />
  }
];

const ViewComponent = ({ title, content, CustomComponent, small, i }) => (
  <View>
    <Row small={small} flip={i % 2 === 0}>
      <InfoContent>
        <h3>{title}</h3>
        <p>{content}</p>
      </InfoContent>
      {CustomComponent}
    </Row>
  </View>
);

export default Main;
