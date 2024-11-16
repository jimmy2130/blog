import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { COLORS } from '@/constants';

function setColorsByTheme() {
	let colors: string | typeof COLORS = '🌈';

	const mql = window.matchMedia('(prefers-color-scheme: dark)');
	const prefersDarkFromMQ = mql.matches;
	const persistedPreference = localStorage.getItem('color-mode');

	let colorMode: 'light' | 'dark' = 'light';

	const hasUsedToggle = typeof persistedPreference === 'string';

	if (hasUsedToggle) {
		if (persistedPreference === 'light' || persistedPreference === 'dark') {
			colorMode = persistedPreference;
		}
	} else {
		colorMode = prefersDarkFromMQ ? 'dark' : 'light';
	}

	if (typeof colors === 'string') {
		return;
	}

	let root = document.documentElement;
	root.style.setProperty('--initial-color-mode', colorMode);
	const colorEntries = Object.entries(colors[colorMode]['color']);
	const syntaxEntries = Object.entries(colors[colorMode]['syntax']);
	for (let i = 0; i < colorEntries.length; i++) {
		const [key, value] = colorEntries[i];
		if (typeof value === 'string') {
			root.style.setProperty(`--color-${key}`, value);
		}
	}
	for (let i = 0; i < syntaxEntries.length; i++) {
		const [key, value] = syntaxEntries[i];
		if (typeof value === 'string') {
			root.style.setProperty(`--syntax-${key}`, value);
		}
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
	static async getInitialProps(ctx: DocumentContext) {
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
