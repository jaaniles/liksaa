import React from "react";

import Flex from "./layout/Flex";
import Person from "./Person";
import TagLayout from "./layout/TagLayout";
import Tag from "./Tag";

const Example2 = () => (
  <Flex column style={{ justifyContent: "flex-start" }}>
    <Person name="Nakkivene" shape="file" />
    <TagLayout>
      <Tag label="Some" />
      <Tag label="React" />
      <Tag label="Animations" />
    </TagLayout>
  </Flex>
);

export default Example2;
