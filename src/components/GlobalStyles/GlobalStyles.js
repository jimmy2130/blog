import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body, #root, #__next {
  height: 100%;
  scroll-behavior: smooth;
}
body {
  line-height: 1.6;
  font-family: 'Roboto', 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}

* {
  --shadow-color: 0deg 0% 73%;
	--shadow-elevation-medium: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
		0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
		2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
		5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
}

`;

export default GlobalStyles;
