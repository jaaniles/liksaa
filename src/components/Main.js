import React from "react";
import { motion } from "framer-motion";

import Background from "./animated/Background";
import Campfire from "./animated/Campfire";
import Flex from "./layout/Flex";

const Main = () => (
  <>
    <Flex
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{
        exit: {
          opacity: 0,
          x: -50,
          transition: {
            when: "afterChildren",
            staggerChildren: 0.5
          }
        },
        enter: {
          opacity: 1,
          x: 0
        }
      }}
      column
      centered
    >
      <motion.h1
        variants={{
          exit: {
            opacity: 0
          },
          enter: {
            opacity: 1
          }
        }}
      >
        MAIN
      </motion.h1>
      <motion.div
        variants={{
          exit: {
            opacity: 0,
            transition: {
              duration: 1
            }
          },
          enter: {
            opacity: 1
          }
        }}
      >
        <Campfire />
      </motion.div>
    </Flex>
    <Background />
  </>
);

export default Main;
