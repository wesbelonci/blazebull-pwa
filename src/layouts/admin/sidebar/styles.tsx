import { styled } from "@mui/system";

export const Container = styled("nav")(({ theme }) => ({
  gridArea: "sidebar",
  display: "flex",
  width: "100%",
  maxWidth: 280,
  height: "100%",
  backgroundColor: theme.palette["background-dark"].main,
  position: "relative",
  flexDirection: "column",

  borderRightColor: theme.palette["separator"].main,
  borderRightWidth: 1,
  borderRightStyle: "solid",

  justifyContent: "flex-start",
  alignItems: "flex-start",
  transition: "all 200ms ease-in",

  zIndex: 9999,

  "@media (min-width: 0) and (max-width: 991.98px)": {
    visibility: "hidden",
    position: "fixed",
    transition: "all 200ms ease-out",
    width: 0,

    "&.show": {
      position: "fixed",
      visibility: "visible",
      width: "280",
      zIndex: 999,
    },
  },

  "&.show": {
    width: "0px",
    visibility: "hidden",
    transform: "translateX(-280px)",
  },
}));

export const LogoContent = styled("div")(({ theme }) => ({
  display: "flex",
  width: "280px",
  height: "70px",
  objectFit: "cover",
  padding: "10px 30px",
  margin: "0 auto",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  "&::before": {
    content: '""',
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    height: "2px",
    width: "100%",
    margin: "0 auto",
    position: "absolute",
    bottom: "0",
    zIndex: 999,
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: "30%",
}));

export const Menu = styled("ul")(({ theme }) => ({
  width: "100%",
  height: "auto",
  padding: "10px 0px",
  overflowY: "scroll",

  "&::-webkit-scrollbar": {
    width: 4,
  },

  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette["background-dark"].main,
    borderRadius: "20px",
    border: "3px solid transparent",
  },
}));

export const ContainerMenuItem = styled("li")(({ theme }) => ({
  marginBottom: "15px",
}));

export const ItemLink = styled("a")(({ theme }) => ({
  display: "flex",
  padding: "10px 20px",
  cursor: "pointer",
  borderRadius: "5px",
  transition: "all 200ms ease-in",
  alignItems: "center",

  color: theme.palette["light-grey"].main,
  fontWeight: 400,
  position: "relative",

  svg: {
    marginRight: 15,
  },

  img: {
    marginRight: 15,
    width: 25,
    height: 25,
  },

  span: {
    svg: {
      display: "flex",
      height: "100%",
      alignItems: "center",
      position: "absolute",
      right: 0,
      top: 0,
      marginRight: "30px",
    },
  },

  "&:hover": {
    color: theme.palette["white"].main,

    "&::before": {
      content: '""',
      width: "3px",
      height: "100%",
      left: 0,
      position: "absolute",
      backgroundColor: theme.palette["white"].main,
      borderRadius: "10px",
      transition: "all 500ms ease-in",
    },
  },

  "&.show": {
    "&::before": {
      content: '""',
      width: "3px",
      height: "100%",
      left: 0,
      position: "absolute",
      backgroundColor: theme.palette["white"].main,
      borderRadius: "10px",
      // transition: "all 500ms ease-in",
    },
  },
}));

export const SidebarLabel = styled("span")(({ theme }) => ({
  marginLeft: "16px",
}));

// export const DropdownLink = styled(Link)`
//   height: 60px;
//   padding-left: 25px;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   color: ${(props) => props.theme.colors.white};
//   position: relative;

//   &:hover {
//     /* background-color: rgba(255, 255, 255, 0.1); */
//     background-color: rgba(0, 0, 0, 0.1);

//     &::before {
//       content: "";
//       width: 3px;
//       height: 100%;
//       left: 0;
//       position: absolute;
//       background-color: ${(props) => props.theme.colors.white};
//       border-radius: 10px;
//       transition: all 500ms ease-in;
//     }
//   }
// `;
