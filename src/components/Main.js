import React from "react";

import Background from "./animated/Background";
import Campfire from "./animated/Campfire";
import Flex from "./layout/Flex";
import Person from "./Person";

const Main = () => (
  <>
    <Flex column centered style={{ justifyContent: "flex-start" }}>
      <Person name="Jaani" />
      <div>
        <Campfire />
      </div>
    </Flex>
    <Background />
  </>
);

export default Main;
