import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  width: "256px",
  height: "auto",
  backgroundColor: theme.palette["background-dark"].main,
  position: "absolute",
  top: "calc(100% + 25px)",
  // top: 20,
  right: 0,
  borderRadius: "6px",

  boxShadow: "rgb(0 0 0 / 60%) 0px 5px 20px",
  transition: "opacity 0.2s ease 0s, visibility 0.2s ease 0s",
  opacity: 0,
  visibility: "hidden",

  "&.show": {
    opacity: 1,
    visibility: "visible",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: "-8px",
    right: "19px",
    width: "0px",
    height: "0px",
    borderStyle: "solid",
    borderWidth: "0px 8px 8px",
    borderColor: `transparent transparent ${theme.palette["dark-separator"].main}`,
  },
}));

export const Link = styled("a")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  alignItems: "center",
  flexDirection: "row-reverse",
  fontSize: "16px",
  color: "rgb(225, 225, 230)",
  padding: "12px 24px",
  transition: "background 0.2s ease 0s",
  cursor: "pointer",
  background: "trasparent",
  border: "none",
  textDecoration: "none",

  span: {
    marginLeft: "24px",
  },

  svg: {
    color: theme.palette["white"].main,
  },

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.125)",
  },
}));
