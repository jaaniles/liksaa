import React, { useState, useEffect } from "react";

import Flex from "./layout/Flex";
import Person from "./Person";

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Flex column centered style={{ justifyContent: "flex-start" }}>
      {loading ? (
        <div>
          <p>Loading..</p>
        </div>
      ) : (
        <Person name="Welcome, Ghost!" />
      )}
    </Flex>
  );
};

export default Main;
