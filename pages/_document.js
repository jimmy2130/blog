import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { COLORS } from '../src/constants'

const MagicScriptTag = () => {
  let codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem('color-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';

    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.

    if (hasPersistedPreference) {
      return persistedColorPreference;
    }

    // If they haven't been explicit, let's check the media
    // query

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';

    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }

    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.

    return 'light';
  }

    const colorMode = getInitialColorMode();
    const root = document.documentElement;

    root.style.setProperty(
      '--color-gray-100',
      colorMode === 'light' ? '${COLORS.light.gray[100]}' : '${COLORS.dark.gray[100]}'
    );
    root.style.setProperty(
      '--color-gray-200',
      colorMode === 'light' ? '${COLORS.light.gray[200]}' : '${COLORS.dark.gray[200]}'
    );
    root.style.setProperty(
      '--color-gray-300',
      colorMode === 'light' ? '${COLORS.light.gray[300]}' : '${COLORS.dark.gray[300]}'
    );
    root.style.setProperty(
      '--color-gray-400',
      colorMode === 'light' ? '${COLORS.light.gray[400]}' : '${COLORS.dark.gray[400]}'
    );
    root.style.setProperty(
      '--color-gray-500',
      colorMode === 'light' ? '${COLORS.light.gray[500]}' : '${COLORS.dark.gray[500]}'
    );
    root.style.setProperty(
      '--color-gray-600',
      colorMode === 'light' ? '${COLORS.light.gray[600]}' : '${COLORS.dark.gray[600]}'
    );
    root.style.setProperty(
      '--color-gray-700',
      colorMode === 'light' ? '${COLORS.light.gray[700]}' : '${COLORS.dark.gray[700]}'
    );
    root.style.setProperty(
      '--color-gray-800',
      colorMode === 'light' ? '${COLORS.light.gray[800]}' : '${COLORS.dark.gray[800]}'
    );
    root.style.setProperty(
      '--color-gray-900',
      colorMode === 'light' ? '${COLORS.light.gray[900]}' : '${COLORS.dark.gray[900]}'
    );
    root.style.setProperty(
      '--color-gray-1000',
      colorMode === 'light' ? '${COLORS.light.gray[1000]}' : '${COLORS.dark.gray[1000]}'
    );

    root.style.setProperty('--initial-color-mode', colorMode);
})()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="zh-TW">
        <Head />
        <body>
          <MagicScriptTag/>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
