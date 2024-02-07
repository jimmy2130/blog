import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { COLORS } from '@/constants';

function setColorsByTheme() {
	const colors = '🌈';

	const mql = window.matchMedia('(prefers-color-scheme: dark)');
	const prefersDarkFromMQ = mql.matches;
	const persistedPreference = localStorage.getItem('color-mode');

	let colorMode = 'light';

	const hasUsedToggle = typeof persistedPreference === 'string';

	if (hasUsedToggle) {
		colorMode = persistedPreference;
	} else {
		colorMode = prefersDarkFromMQ ? 'dark' : 'light';
	}

	let root = document.documentElement;
	root.style.setProperty('--initial-color-mode', colorMode);

	const colorKeys = Object.keys(colors[colorMode]['color']);
	const syntaxKeys = Object.keys(colors[colorMode]['syntax']);
	for (let i = 0; i < colorKeys.length; i++) {
		root.style.setProperty(
			`--color-${colorKeys[i]}`,
			colors[colorMode]['color'][colorKeys[i]],
		);
	}
	for (let i = 0; i < syntaxKeys.length; i++) {
		root.style.setProperty(
			`--syntax-${syntaxKeys[i]}`,
			colors[colorMode]['syntax'][syntaxKeys[i]],
		);
	}
}

const MagicScriptTag = () => {
	// Replace that rainbow string with our COLORS object.
	// We need to stringify it as JSON so that it isn't
	// inserted as [object Object].
	const functionString = String(setColorsByTheme).replace(
		"'🌈'",
		JSON.stringify(COLORS),
	);
	// Wrap it in an IIFE
	let codeToRunOnClient = `(${functionString})()`;
	// eslint-disable-next-line react/no-danger
	return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="zh-TW">
				<Head>
					<meta name="author" content="JimmyJim" />
					<meta
						name="description"
						content="JimmyJim的前端網頁作品集與製作歷程紀錄"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Roboto:wght@400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<MagicScriptTag />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
