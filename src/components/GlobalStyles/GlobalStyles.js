import { createGlobalStyle } from 'styled-components'
import { COLORS } from '../../constants'

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.6;
  font-family: 'Roboto', 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

html {
  --color-white: ${COLORS.white};
  --color-primary: ${COLORS.primary};
  --color-primary-light: ${COLORS.primaryLight};
  --color-primary-dark: ${COLORS.primaryDark};
  --color-secondary: ${COLORS.secondary};
  --color-overlay: ${COLORS.overlay};

  --syntax-background-light-blue: hsl(213deg 92% 85%);
  --syntax-background-light-gray: hsl(24deg 20% 95%);
  --syntax-black: hsl(0deg 0% 0%);
  --syntax-slategray: hsl(210deg 13% 50%);
  --syntax-gray: hsl(0deg 0% 60%);
  --syntax-tag: hsl(327deg 100% 30%);
  --syntax-selector: hsl(80deg 100% 30%);
  --syntax-operator: hsl(33deg 45% 42%);
  --syntax-keyword: hsl(198deg 100% 33%);
  --syntax-function: hsl(348deg 68% 58%);
  --syntax-regex: hsl(39deg 100% 47%);

}

html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html, body, #root {
  height: 100%;
}

#__next {
  height: 100%;
}


`;

export default GlobalStyles;
