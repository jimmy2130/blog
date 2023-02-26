import GlobalStyles from '../src/components/GlobalStyles';
import ThemeProvider from '../src/components/ThemeProvider';
import Head from 'next/head';
import styled from 'styled-components';

export default function App({ Component, pageProps }) {
	return (
		<Wrapper>
			<Head />
			<GlobalStyles />
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100%;
`;
