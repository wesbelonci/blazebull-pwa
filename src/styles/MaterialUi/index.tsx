import { createTheme } from "@mui/material/styles";

const cssVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"];
    "dark-two": Palette["primary"];
    "dark-three": Palette["primary"];
    "dark-four": Palette["primary"];
    black: Palette["primary"];
    white: Palette["primary"];
    blue: Palette["primary"];
    "lightish-blue": Palette["primary"];
    "light-grey": Palette["primary"];
    "light-grey-two": Palette["primary"];
    "dark-grey": Palette["primary"];
    "white-grey": Palette["primary"];
    "lime-green": Palette["primary"];
    "lime-green-two": Palette["primary"];
    "dark-green": Palette["primary"];
    "weird-green": Palette["primary"];
    red: Palette["primary"];
    "pinkish-red": Palette["primary"];
    "dark-seafoam": Palette["primary"];
    "dark-red": Palette["primary"];
    "dark-separator": Palette["primary"];
    silver: Palette["primary"];
    "dark-text": Palette["primary"];
    "dark-grey-two": Palette["primary"];
    separator: Palette["primary"];
    "separator-two": Palette["primary"];
    "dark-separator-two": Palette["primary"];
    "separator-three": Palette["primary"];
    "background-dark": Palette["primary"];
    "background-two": Palette["primary"];
    "background-three": Palette["primary"];
    "background-four": Palette["primary"];
    "dark-background": Palette["primary"];
    "light-background": Palette["primary"];
    "footer-color": Palette["primary"];
    gold: Palette["primary"];
    bronze: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    dark: PaletteOptions["primary"];
    "dark-two": PaletteOptions["primary"];
    "dark-three": PaletteOptions["primary"];
    "dark-four": PaletteOptions["primary"];
    black: PaletteOptions["primary"];
    white: PaletteOptions["primary"];
    blue: PaletteOptions["primary"];
    "lightish-blue": PaletteOptions["primary"];
    "light-grey": PaletteOptions["primary"];
    "light-grey-two": PaletteOptions["primary"];
    "dark-grey": PaletteOptions["primary"];
    "white-grey": PaletteOptions["primary"];
    "lime-green": PaletteOptions["primary"];
    "lime-green-two": PaletteOptions["primary"];
    "dark-green": PaletteOptions["primary"];
    "weird-green": PaletteOptions["primary"];
    red: PaletteOptions["primary"];
    "pinkish-red": PaletteOptions["primary"];
    "dark-seafoam": PaletteOptions["primary"];
    "dark-red": PaletteOptions["primary"];
    "dark-separator": PaletteOptions["primary"];
    silver: PaletteOptions["primary"];
    "dark-text": PaletteOptions["primary"];
    "dark-grey-two": PaletteOptions["primary"];
    "dark-grey-three": PaletteOptions["primary"];
    separator: PaletteOptions["primary"];
    "separator-two": PaletteOptions["primary"];
    "dark-separator-two": PaletteOptions["primary"];
    "separator-three": PaletteOptions["primary"];
    "background-dark": PaletteOptions["primary"];
    "background-two": PaletteOptions["primary"];
    "background-three": PaletteOptions["primary"];
    "background-four": PaletteOptions["primary"];
    "dark-background": PaletteOptions["primary"];
    "light-background": PaletteOptions["primary"];
    "footer-color": PaletteOptions["primary"];
    gold: PaletteOptions["primary"];
    bronze: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    dark: true;
    "dark-two": true;
    "dark-three": true;
    "dark-four": true;
    black: true;
    white: true;
    blue: true;
    "lightish-blue": true;
    "light-grey": true;
    "light-grey-two": true;
    "dark-grey": true;
    "white-grey": true;
    "lime-green": true;
    "lime-green-two": true;
    "dark-green": true;
    "weird-green": true;
    red: true;
    "pinkish-red": true;
    "dark-seafoam": true;
    "dark-red": true;
    "dark-separator": true;
    silver: true;
    "dark-text": true;
    "dark-grey-two": true;
    "dark-grey-three": true;
    separator: true;
    "separator-two": true;
    "dark-separator-two": true;
    "separator-three": true;
    "background-dark": true;
    "background-two": true;
    "background-three": true;
    "background-four": true;
    "dark-background": true;
    "light-background": true;
    "footer-color": true;
    gold: true;
    bronze: true;
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    dark: true;
    "dark-two": true;
    "dark-three": true;
    "dark-four": true;
    black: true;
    white: true;
    blue: true;
    "lightish-blue": true;
    "light-grey": true;
    "light-grey-two": true;
    "dark-grey": true;
    "white-grey": true;
    "lime-green": true;
    "lime-green-two": true;
    "dark-green": true;
    "weird-green": true;
    red: true;
    "pinkish-red": true;
    "dark-seafoam": true;
    "dark-red": true;
    "dark-separator": true;
    silver: true;
    "dark-text": true;
    "dark-grey-two": true;
    "dark-grey-three": true;
    separator: true;
    "separator-two": true;
    "dark-separator-two": true;
    "separator-three": true;
    "background-dark": true;
    "background-two": true;
    "background-three": true;
    "background-four": true;
    "dark-background": true;
    "light-background": true;
    "footer-color": true;
    gold: true;
    bronze: true;
  }
}

// Update the Button's color prop options
declare module "@mui/material/InputBase" {
  interface InputBasePropsColorOverrides {
    dark: true;
    "dark-two": true;
    "dark-three": true;
    "dark-four": true;
    black: true;
    white: true;
    blue: true;
    "lightish-blue": true;
    "light-grey": true;
    "light-grey-two": true;
    "dark-grey": true;
    "white-grey": true;
    "lime-green": true;
    "lime-green-two": true;
    "dark-green": true;
    "weird-green": true;
    red: true;
    "pinkish-red": true;
    "dark-seafoam": true;
    "dark-red": true;
    "dark-separator": true;
    silver: true;
    "dark-text": true;
    "dark-grey-two": true;
    "dark-grey-three": true;
    separator: true;
    "separator-two": true;
    "dark-separator-two": true;
    "separator-three": true;
    "background-dark": true;
    "background-two": true;
    "background-three": true;
    "background-four": true;
    "dark-background": true;
    "light-background": true;
    "footer-color": true;
    gold: true;
    bronze: true;
  }
}

// Update the Button's color prop options
declare module "@mui/material/Checkbox" {
  interface CheckboxPropsColorOverrides {
    dark: true;
    "dark-two": true;
    "dark-three": true;
    "dark-four": true;
    black: true;
    white: true;
    blue: true;
    "lightish-blue": true;
    "light-grey": true;
    "light-grey-two": true;
    "dark-grey": true;
    "white-grey": true;
    "lime-green": true;
    "lime-green-two": true;
    "dark-green": true;
    "weird-green": true;
    red: true;
    "pinkish-red": true;
    "dark-seafoam": true;
    "dark-red": true;
    "dark-separator": true;
    silver: true;
    "dark-text": true;
    "dark-grey-two": true;
    "dark-grey-three": true;
    separator: true;
    "separator-two": true;
    "dark-separator-two": true;
    "separator-three": true;
    "background-dark": true;
    "background-two": true;
    "background-three": true;
    "background-four": true;
    "dark-background": true;
    "light-background": true;
    "footer-color": true;
    gold: true;
    bronze: true;
  }
}

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: cssVar("--dark"),
    },
    secondary: {
      main: cssVar("--red"),
    },
    dark: {
      main: cssVar("--dark"),
    },
    "dark-two": {
      main: cssVar("--dark-two"),
    },
    "dark-three": {
      main: cssVar("--dark-three"),
    },
    "dark-four": {
      main: cssVar("--dark-four"),
    },
    black: {
      main: cssVar("--black"),
    },
    white: {
      main: cssVar("--white"),
    },
    blue: {
      main: cssVar("--blue-blue"),
    },
    "lightish-blue": {
      main: cssVar("--lightish-blue"),
    },
    "light-grey": {
      main: cssVar("--light-grey"),
    },
    "light-grey-two": {
      main: cssVar("--light-grey-two"),
    },
    "dark-grey": {
      main: cssVar("--dark-grey"),
    },
    "dark-grey-three": {
      main: cssVar("--dark-grey-three"),
    },
    "white-grey": {
      main: cssVar("--white-grey"),
    },
    "lime-green": {
      main: cssVar("--lime-green"),
    },
    "lime-green-two": {
      main: cssVar("--lime-green-two"),
    },
    "dark-green": {
      main: cssVar("--dark-green"),
    },
    "weird-green": {
      main: cssVar("--weird-green"),
    },
    red: {
      main: cssVar("--red"),
    },
    "pinkish-red": {
      main: cssVar("--pinkish-red"),
    },
    "dark-seafoam": {
      main: cssVar("--dark-seafoam"),
    },
    "dark-red": {
      main: cssVar("--dark-red"),
    },
    "dark-separator": {
      main: cssVar("--dark-separator"),
    },
    silver: {
      main: cssVar("--silver"),
    },
    "dark-text": {
      main: cssVar("--dark-text"),
    },
    "dark-grey-two": {
      main: cssVar("--dark-grey-two"),
    },
    separator: {
      main: cssVar("--separator"),
    },
    "separator-two": {
      main: cssVar("--separator-two"),
    },
    "dark-separator-two": {
      main: cssVar("--dark-separator-two"),
    },
    "separator-three": {
      main: cssVar("--separator-three"),
    },
    "background-dark": {
      main: cssVar("--background"),
    },
    "background-two": {
      main: cssVar("--ackground-two"),
    },
    "background-three": {
      main: cssVar("--background-three"),
    },
    "background-four": {
      main: cssVar("--background-four"),
    },
    "dark-background": {
      main: cssVar("--dark-background"),
    },
    "light-background": {
      main: cssVar("--light-background"),
    },
    "footer-color": {
      main: cssVar("--footer-color"),
    },
    gold: {
      main: cssVar("--gold"),
    },
    bronze: {
      main: cssVar("--bronze"),
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },
});

export { defaultTheme };
