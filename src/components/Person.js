import React from "react";
import styled from "@emotion/styled";
import {
  Ghost,
  Backpack,
  Browser,
  Chocolate,
  Cat,
  CreditCard,
  File,
  IceCream,
  Mug,
  Planet,
  SpeechBubble
} from "react-kawaii";

import Flex from "./layout/Flex";

import * as ds from "../design";

const PersonContainer = styled(Flex)({
  marginTop: ds.scale(2),
  margin: "0 auto"
});

const Avatar = styled(Flex)({
  border: `1px solid ${ds.colors.black}`,
  borderRadius: "100%",

  width: 120,
  height: 120
});

const getShape = shape => {
  switch (shape) {
    case "ghost":
      return <Ghost size={80} />;
    case "backpack":
      return <Backpack size={80} />;
    case "browser":
      return <Browser size={80} />;
    case "chocolate":
      return <Chocolate size={80} />;
    case "cat":
      return <Cat size={80} />;
    case "creditCard":
      return <CreditCard size={80} />;
    case "file":
      return <File size={80} />;
    case "iceCream":
      return <IceCream size={80} />;
    case "mug":
      return <Mug size={80} />;
    case "planet":
      return <Planet size={80} />;
    case "speechBubble":
      return <SpeechBubble size={80} />;
    default:
      return <Ghost size={80} />;
  }
};

const Person = ({ name = "Ghostie", shape = "Ghost", children, ...rest }) => {
  return (
    <PersonContainer column centered {...rest}>
      <Avatar column centered>
        <Flex column centered>
          {getShape(shape.toLowerCase())}
        </Flex>
      </Avatar>
      <h2 style={{ textAlign: "center" }}>{name}</h2>
      {children}
    </PersonContainer>
  );
};

export default Person;
