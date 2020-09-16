import React from "react";
import { motion } from "framer-motion";

import Flex from "./layout/Flex";
import Person from "./Person";
import TagLayout from "./layout/TagLayout";
import Tag from "./Tag";

const Example2 = () => (
  <Flex
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
    column
    centered
  >
    <h1>Example 2</h1>
    <Person name="Laikku" shape="browser" />
    <TagLayout>
      <Tag label="Some" />
      <Tag label="React" />
      <Tag label="Animations" />
    </TagLayout>
  </Flex>
);

export default Example2;
