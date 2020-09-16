import React from "react";
import styled from "@emotion/styled";

import Flex from "./Flex";

const PersonContainer = styled(Flex)({});

const PersonLayout = ({ children }) => {
  return <PersonContainer column>{children}</PersonContainer>;
};

export default PersonLayout;
