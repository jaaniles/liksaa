import React from "react";

import Background from "./animated/Background";
import Campfire from "./animated/Campfire";
import Flex from "./layout/Flex";

const Main = () => (
  <>
    <Flex column centered>
      <h1>MAIN</h1>
      <div>
        <Campfire />
      </div>
    </Flex>
    <Background />
  </>
);

export default Main;
