import React, { useState } from "react";
import styled from "@emotion/styled";

import Flex from "./layout/Flex";
import Person from "./Person";

import * as ds from "../design";

const MessageStyle = styled.li({
  borderRadius: 12,
  background: ds.colors.lila,
  borderBottomLeftRadius: 0,

  padding: "4px 16px",

  margin: "8px 0",

  display: "flex",
  flexWrap: "nowrap",
  "> *:first-child": {
    marginRight: 8
  }
});

const Example = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = () => {
    setMessages([
      ...messages,
      {
        id: Math.floor(Date.now() / 10000) + randomInt(1, 10000000),
        text: texts[randomInt(0, texts.length - 1)]
      }
    ]);
  };

  const deleteMessage = id => {
    setMessages(messages.filter((m, i) => id !== i));
  };

  return (
    <Flex column style={{ justifyContent: "flex-start" }}>
      <Flex column centered>
        <Person name="Chocolate Dragon" shape="chocolate" />
      </Flex>
      <div style={{ padding: 32 }}>
        <Button onClick={addMessage}>Shout</Button>
      </div>
      <ul
        style={{
          listStyle: "none",
          width: "80%",
          height: "100%"
        }}
      >
        {messages.map((m, i) => (
          <MessageStyle key={m.id} onClick={() => deleteMessage(i)}>
            {m.text}
          </MessageStyle>
        ))}
      </ul>
    </Flex>
  );
};

export default Example;

const texts = [
  "Hippopotomonstrosesquippedaliophobia is the fear of long words.",
  "“Jay” was slang for “foolish person.” So when a pedestrian ignored street signs, he was a “jaywalker.”",
  "Viking men wore makeup.",
  "A newborn giant panda is about the size of a stick of butter.",
  "There are 293 ways to make change for a U.S. dollar.",
  "Before he sang lead vocals for Black Sabbath, Ozzy Osbourne worked in a slaughterhouse.",
  "In the 18th century, wealthy British landowners hired ornamental hermits to live in their gardens."
];

const Button = styled.button({
  background: ds.colors.red,
  border: "none",
  borderRadius: 8,
  outline: "none",
  color: "white",
  textTransform: "uppercase",

  fontSize: ds.sizes.m,
  padding: "4px 16px",
  margin: "0 auto",
  cursor: "pointer"
});

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
