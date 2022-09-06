import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  gridArea: "content",
  width: "100%",
  height: "100%",
  backgroundColor: theme.palette["background-dark"].main,
  // padding: "15px 20px;",
  overflowX: "hidden",
  overFlowY: "scroll",
}));