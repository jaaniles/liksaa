import React from "react";

import Flex from "./layout/Flex";
import Person from "./Person";

const Main = () => (
  <Flex column centered style={{ justifyContent: "flex-start" }}>
    <Person name="Welcome, Ghost!" />
  </Flex>
);

export default Main;
