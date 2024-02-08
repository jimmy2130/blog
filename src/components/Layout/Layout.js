import React from 'react';
import styled from 'styled-components';
import HeroSection from '@/components/HeroSection';
import Spacer from '@/components/Spacer';
import Footer from '@/components/Footer';
import { CONTENT_MAX_WIDTH } from '@/constants';

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

	display: grid;
	grid-template-columns:
		1fr
		min(var(--max-width), 100%)
		1fr;

	& > * {
		grid-column: 2;
	}

	--breathing-room: clamp(24px, 100% - var(--max-width), 60px);
	padding-left: var(--breathing-room);
	padding-right: var(--breathing-room);
`;

export default Layout;
