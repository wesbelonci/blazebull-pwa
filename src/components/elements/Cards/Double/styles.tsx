import { styled } from "@mui/system";

type EntryTypeProps = {
  type?: "analyzing" | "entry" | "win" | "loss" | "gale";
};

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  //height: "auto",
  height: 150,
  marginTop: 10,
  position: "relative",
  //paddingLeft: theme.spacing(0.5),
  //paddingRight: theme.spacing(0.5),
}));

type ContentProps = {
  type: "analyzing" | "entry" | "win" | "loss" | "gale";
  position: number;
};

export const Content = styled("div")<ContentProps>(
  ({ theme, type, position }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    //width: "100%",
    width:
      position === 1
        ? "100%"
        : position === 2
        ? "98%"
        : position === 3
        ? "94%"
        : "90%",
    margin: "0 auto",
    height: 100,
    flexDirection: "column",
    backgroundColor: theme.palette["background-four"].main,
    borderRadius: 15,
    borderLeftWidth: 15,
    borderLeftColor:
      type === "win"
        ? theme.palette["lime-green"].main
        : type === "loss"
        ? theme.palette["red"].main
        : type === "entry"
        ? theme.palette["lightish-blue"].main
        : type === "gale"
        ? theme.palette["bronze"].main
        : theme.palette["gold"].main,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    position: "absolute",
    top: position === 1 ? 0 : position === 2 ? 15 : position === 3 ? 30 : 45,
    //top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex:
      position === 1 ? 40 : position === 2 ? 30 : position === 3 ? 20 : 10,
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)",
    transition: "all 200ms ease-out",
  })
);

export const Title = styled("div")<EntryTypeProps>(({ theme, type }) => ({
  fontSize: 16,
  fontWeight: 700,
  color:
    type === "win"
      ? theme.palette["lime-green"].main
      : type === "loss"
      ? theme.palette["red"].main
      : type === "entry"
      ? theme.palette["lightish-blue"].main
      : type === "gale"
      ? theme.palette["bronze"].main
      : theme.palette["gold"].main,
}));

export const HelpTitle = styled("div")<EntryTypeProps>(({ theme, type }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  fontSize: 10,
  fontWeight: 700,
  color:
    type === "win"
      ? theme.palette["lime-green"].main
      : type === "loss"
      ? theme.palette["red"].main
      : type === "entry"
      ? theme.palette["lightish-blue"].main
      : type === "gale"
      ? theme.palette["bronze"].main
      : theme.palette["gold"].main,

  svg: {
    marginRight: 6,
  },
}));

type TextProps = {
  color?: "red" | "black" | "white";
};

export const Text = styled("div")<TextProps>(({ theme, color }) => ({
  fontSize: 16,
  //fontWeight: 700,
  // color: theme.palette["white"].main,
  marginRight: 4,

  color:
    color === "red"
      ? theme.palette["red"].main
      : color === "black"
      ? theme.palette["black"].main
      : color === "white"
      ? theme.palette["white"].main
      : theme.palette["white"].main,
}));
