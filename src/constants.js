export const COLORS = {
  light: {
    color: {
      'gray-100': 'hsl(210deg 36% 96%)',
      'gray-200': 'hsl(212deg 33% 89%)',
      'gray-300': 'hsl(210deg 31% 80%)',
      'gray-400': 'hsl(211deg 27% 70%)',
      'gray-500': 'hsl(209deg 23% 60%)',
      'gray-600': 'hsl(210deg 22% 49%)',
      'gray-700': 'hsl(209deg 28% 39%)',
      'gray-800': 'hsl(209deg 34% 30%)',
      'gray-900': 'hsl(211deg 39% 23%)',
      'gray-1000': 'hsl(209deg 61% 16%)',
      'primary': 'hsl(166deg 72% 28%)',
      'secondary': 'hsl(205deg 76% 39%)',
      'footer-background': 'hsl(209deg 61% 16%)',
    },
    syntax: {
      'background-light-blue': 'hsl(213deg 92% 85%)',
      'background-light-gray': 'hsl(24deg 20% 95%)',
      'black': 'hsl(0deg 0% 0%)',
      'slategray': 'hsl(210deg 13% 50%)',
      'gray': 'hsl(0deg 0% 60%)',
      'tag': 'hsl(327deg 100% 30%)',
      'selector': 'hsl(80deg 100% 30%)',
      'operator': 'hsl(33deg 45% 42%)',
      'keyword': 'hsl(198deg 100% 33%)',
      'function': 'hsl(348deg 68% 58%)',
      'regex': 'hsl(39deg 100% 47%)',
    },
  },
  dark: {
    color: {
      'gray-100': 'hsl(209deg 61% 16%)',
      'gray-200': 'hsl(211deg 39% 23%)',
      'gray-300': 'hsl(209deg 34% 30%)',
      'gray-400': 'hsl(209deg 28% 39%)',
      'gray-500': 'hsl(210deg 22% 49%)',
      'gray-600': 'hsl(209deg 23% 60%)',
      'gray-700': 'hsl(211deg 27% 70%)',
      'gray-800': 'hsl(210deg 31% 80%)',
      'gray-900': 'hsl(212deg 33% 89%)',
      'gray-1000': 'hsl(210deg 36% 96%)',
      'primary': 'hsl(166deg 72% 28%)',
      'secondary': 'hsl(205deg 76% 39%)',
      'footer-background': 'hsl(209deg 61% 16%)',
    },
    syntax: {
      'background-light-blue': 'hsl(213deg 92% 85%)',
      'background-light-gray': 'hsl(24deg 20% 95%)',
      'black': 'hsl(0deg 0% 0%)',
      'slategray': 'hsl(210deg 13% 50%)',
      'gray': 'hsl(0deg 0% 60%)',
      'tag': 'hsl(327deg 100% 30%)',
      'selector': 'hsl(80deg 100% 30%)',
      'operator': 'hsl(33deg 45% 42%)',
      'keyword': 'hsl(198deg 100% 33%)',
      'function': 'hsl(348deg 68% 58%)',
      'regex': 'hsl(39deg 100% 47%)',
    }
  }
}

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