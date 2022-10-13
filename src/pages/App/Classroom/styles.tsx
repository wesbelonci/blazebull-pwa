import { styled } from "@mui/system";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  alignItems: "center",
  width: "100%",
  heiht: "auto",
  flexDirection: "column",
  overflow: "hidden",
  overflowY: "hidden",
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette["background-dark"].main,
  width: "100%",
  height: "auto",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  overflowX: "hidden",
  overflowY: "hidden",
}));

export const Course = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: 15,
}));

export const CurrentClass = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  width: "100%",
}));

export const Watching = styled("div")(({ theme }) => ({
  display: "block",
  padding: "56.25% 0 0 0",
  position: "relative",
  zIndex: 100,
  width: "100%",

  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    zIndex: 999,
  },
}));

export const Button = styled("button")(({ theme }) => ({
  display: "flex",
  width: "300px",
  height: 50,
  marginTop: 10,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  position: "relative",
  bottom: 0,
  left: 0,
  cursor: "pointer",
  borderRadius: "0.563rem",
  backgroundColor: "transparent",
  padding: "11px, 10px, 11px, 10px",
  border: `1px solid ${theme.palette["lime-green"].main}`,
  color: theme.palette["lime-green"].main,

  "&:hover": {
    // backgroundColor: theme.palette["dark-red"].main,
  },
}));

export const ModuleAndCourses = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: 20,
  position: "relative",
  flexDirection: "column",
  width: "100%",
  // paddingLeft: theme.spacing(1.8),
  // paddingRight: theme.spacing(1.8),

  h2: {
    fontSize: 20,
    // fontWeight: 700,
    color: theme.palette["white"].main,
    // marginBottom: 10,
  },
}));

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))<{ background: string }>(({ theme, background }) => ({
  border: `1px solid ${theme.palette[""]}`,
  backgroundImage: ` linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",

  "&.Mui-expanded": {
    backgroundImage: `linear-gradient(180deg, #0F1923 0%, rgba(15, 25, 35, 0) 66.15%), linear-gradient(180deg, rgba(15, 25, 35, 0) 40.63%, #0F1923 100%), url(${background})`,
    paddingBottom: theme.spacing(4),
  },

  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  // backgroundColor: "rgba(0,0,0, 0.8)",
  color: theme.palette["white"].main,
  flexDirection: "row",
  // paddingTop: theme.spacing(1),
  // paddingBottom: theme.spacing(1),
  height: 60,

  "&.Mui-expanded": {
    backgroundColor: "rgba(0,0,0, 0)",
  },

  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(90deg)",
    color: theme.palette["white"].main,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(-90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  display: "flex",
  padding: "0 0 0 0",
  flexDirection: "column",
  paddingTop: theme.spacing(0),
  paddingBottom: theme.spacing(1),
}));
