export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(210deg 36% 96%)',
    200: 'hsl(212deg 33% 89%)',
    300: 'hsl(210deg 31% 80%)',
    400: 'hsl(211deg 27% 70%)',
    500: 'hsl(209deg 23% 60%)',
    600: 'hsl(210deg 22% 49%)',
    700: 'hsl(209deg 28% 39%)',
    800: 'hsl(209deg 34% 30%)',
    900: 'hsl(211deg 39% 23%)',
    1000: 'hsl(209deg 61% 16%)',
  },
  primary: 'hsl(166deg 72% 28%)',
  primaryLight: 'hsl(158deg 58% 62%)',
  primaryDark: 'hsl(170deg 97% 15%)',
  secondary: 'hsl(205deg 76% 39%)',
  overlay: 'hsl(0deg 0% 0% / 0.55)',
};

const BREAKPOINTS = {
  laptopMax: 1300,
  tabletMax: 950,
  phoneMax: 600,
}

export const QUERIES = {
  'latopAndDown': `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
  'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  'phoneAndDown': `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
}