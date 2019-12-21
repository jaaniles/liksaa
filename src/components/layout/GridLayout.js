import styled from "@emotion/styled";
import { motion } from "framer-motion";

import * as ds from "../../design";

const GridLayout = styled(motion.div)({
  display: "grid",
  gridTemplateColumns: ds.grid.columns,
  position: "relative",
  height: "100%"
});

export default GridLayout;
