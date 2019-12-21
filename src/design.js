import { modularScale } from "polished";
import facepaint from "facepaint";

/*  
  mobile: 320,
  tablet: 768,
  desktop: 1024,
*/
const breakpoints = [360, 768, 1024];

export const mq = facepaint(
  breakpoints.map(bp => `@media(min-width: ${bp}px)`)
);

export const scale = number => modularScale(number).replace("em", "rem");

export const colors = {
  white: "#FFFFFF",
  black: "#111111",

  // Main palette
  nightsky: "#1B1F3A",
  burgy: "#53354A",
  blaze: "#a64942",
  orange: "#ff7844",

  // -----------------

  liquorice: "#19181A",
  puke: "#CEBC81",
  darkchoc: "#45344E",
  bee: "#FAED26",
  primary: "#040C48",
  secondary: "#AE476D",
  periwinkle: "#bfd8ff",
  malibu: "#80b1ff",
  fire: "#b33700",
  romantic: "#ffd3bf",
  amber: "#ffc000",
  gold: "#b38600",
  salomie: "#ffe080",
  offwhite: "#ffefbf",
  sweet: "#3E407C",

  background: {
    blue0: "#040C48"
  }
};

export const theme = {
  background: colors.white,
  backgroundGradient: "linear-gradient(180deg, #E6513D 1%, #FF7844 100%);",
  accent: colors.blaze
};

export const grid = {
  columns:
    "[full-start] minmax(0, 1fr) [main-start] minmax(320px, 1140px) [main-end] minmax(0, 1fr) [full-end]"
};

export const type = {
  color: {
    primary: "#3D3D3D",
    secondary: colors.white,
    grey: "#4A4A4A",
    tertiary: "#5A5A5A",
    interactive: "#990AE3",
    blue: "#09586B"
  }
};

export const sizes = {
  s: 12,
  accent: 14,
  default: 16,
  m: 20,
  xm: 22,
  l: 24,
  xl: 32,
  xll: 40,
  xxl: 48
};

export const shadows = {
  small: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  medium: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
};

export const headings = {
  h1: {},

  h2: {
    fontSize: sizes.m
  },

  h3: {},

  h4: {
    fontSize: sizes.m,
    fontWeight: 400,
    margin: 0
  }
};
