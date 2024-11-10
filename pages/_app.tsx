import GlobalStyles from '@/components/GlobalStyles';
import ThemeProvider from '@/components/ThemeProvider';
import React from 'react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<React.StrictMode>
			<GlobalStyles />
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</React.StrictMode>
	);
}
