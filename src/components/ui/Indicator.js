import styled from "@emotion/styled";
import { motion } from "framer-motion";

import * as ds from "../../design";

const Indicator = styled(motion.div)(
  {
    width: 0,
    height: 0,
    borderTop: `10px solid transparent`,
    borderBottom: `10px solid transparent`,

    borderLeft: `10px solid ${ds.colors.white}`
  },
  ({ color }) =>
    color && {
      borderLeftColor: color
    }
);

export default Indicator;
