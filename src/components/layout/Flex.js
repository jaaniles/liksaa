import styled from "@emotion/styled";

export const Layout = styled.div(
  {
    display: "flex"
  },
  ({ horizontal, column }) =>
    horizontal && column
      ? {
          alignItems: "center"
        }
      : {
          justifyContent: "center"
        },
  ({ vertical, column }) =>
    vertical && column
      ? {
          justifyContent: "center"
        }
      : {
          alignItems: "center"
        },

  ({ column }) =>
    column && {
      flexDirection: "column"
    },
  ({ centered }) =>
    centered && { alignItems: "center", justifyContent: "center" }
);

export default Layout;
