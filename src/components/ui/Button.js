import styled from "@emotion/styled";
import { motion } from "framer-motion";

import * as ds from "../../design";

const Button = styled(motion.button)(
  {
    outline: "none",
    background: "transparent",

    fontSize: 16,
    margin: `4px 0`,
    padding: `8px 0`,
    border: `1px solid ${ds.colors.sweet}`,
    width: "100%",
    color: ds.colors.sweet,

    transition: "all 100ms ease-in-out",
    "&:active": {
      transform: "scale(1.05)",
      opacity: 0.8
    }
  },
  props =>
    props.solid && {
      border: "none",
      background: ds.colors.sweet,
      color: ds.colors.white
    },
  props =>
    props.big && {
      padding: `16px 0`,
      margin: "8px 0"
    },
  props =>
    props.fade && {
      opacity: 0.5
    }
);

export default Button;
