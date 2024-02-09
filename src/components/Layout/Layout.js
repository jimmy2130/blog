import React from 'react';
import styled from 'styled-components';
import HeroSection from '@/components/HeroSection';
import Spacer from '@/components/Spacer';
import Footer from '@/components/Footer';
import { CONTENT_MAX_WIDTH, CONTENT_BREATHING_ROOM } from '@/constants';

function Layout({ title, subtitle, children }) {
	return (
		<Wrapper>
			<HeroSection title={title} subtitle={subtitle} />
			<MainSection>{children}</MainSection>
			<Spacer size={500} axis="vertical" />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.main`
	container: root / inline-size;
`;

export const MainSection = styled.div`
	padding-top: clamp(60px, 100% - 632px, 100px);

	--max-width: ${CONTENT_MAX_WIDTH}px;
	--padding: ${CONTENT_BREATHING_ROOM}px;

	display: grid;
	grid-template-columns:
		1fr
		min(var(--max-width), 100%)
		1fr;

	& > * {
		grid-column: 2;
	}

	padding-left: var(--padding);
	padding-right: var(--padding);
`;

export default Layout;
