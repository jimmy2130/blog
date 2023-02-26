import GlobalStyles from '../src/components/GlobalStyles';
import ThemeProvider from '../src/components/ThemeProvider';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head />
			<GlobalStyles />
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
