import styled from "@emotion/styled";
import { motion } from "framer-motion";

import * as ds from "../../design";

const Handwritten = styled(motion.h1)({
  fontFamily: "Sacramento",
  fontWeight: 600,
  color: ds.colors.sweet,
  margin: `0 0 auto 0`
});

export default Handwritten;
