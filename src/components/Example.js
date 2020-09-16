import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

import Flex from "./layout/Flex";

import * as ds from "../design";

const Message = styled(motion.li)({
  borderRadius: 8,
  background: ds.colors.lila,

  padding: "4px 16px",

  margin: "8px 0"
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
    <Flex
      column
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{
        exit: {
          opacity: 0,
          x: -50
        },
        enter: {
          opacity: 1,
          x: 0
        }
      }}
      style={{ justifyContent: "flex-start" }}
    >
      <div>
        <h1 style={{ letterSpacing: 5 }}>SHOUTBOARD</h1>
        <Button
          whileHover={{ opacity: 0.8 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 1, scale: 1 }}
          onClick={addMessage}
        >
          Tell me something
        </Button>
      </div>
      <motion.ul style={{ listStyle: "none", width: "100%" }}>
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <Message
              layout
              key={m.id}
              onClick={() => deleteMessage(i)}
              exit="exit"
              initial="initial"
              animate="animate"
              variants={{
                exit: {
                  y: -10,
                  opacity: 0
                },
                initial: {
                  x: 10,
                  opacity: 0,
                  scale: 0
                },
                animate: {
                  x: 0,
                  opacity: 1,
                  scale: 1
                }
              }}
            >
              {m.text}
            </Message>
          ))}
        </AnimatePresence>
      </motion.ul>
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

const Button = styled(motion.button)({
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
