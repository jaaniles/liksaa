import React from "react";

import Flex from "./layout/Flex";
import Person from "./Person";
import TagLayout from "./layout/TagLayout";
import Tag from "./Tag";

const Example2 = () => (
  <Flex column centered>
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
