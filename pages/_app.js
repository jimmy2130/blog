import GlobalStyles from '../src/components/GlobalStyles';
import ThemeProvider from '../src/components/ThemeProvider';
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }) {
	return (
		<React.StrictMode>
			<Head />
			<GlobalStyles />
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</React.StrictMode>
	);
}
