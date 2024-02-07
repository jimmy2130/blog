import React from 'react';
import styled from 'styled-components';
import HeroSection from '@/components/HeroSection';
import FluidMaxWidthWrapper from '@/components/FluidMaxWidthWrapper';
import Spacer from '@/components/Spacer';
import Footer from '@/components/Footer';

function Layout({ title, subtitle, children }) {
	return (
		<>
			<HeroSection title={title} subtitle={subtitle} />
			<MainSection>
				<FluidMaxWidthWrapper>{children}</FluidMaxWidthWrapper>
			</MainSection>
			<Spacer size={500} axis="vertical" />
			<Footer />
		</>
	);
}

const MainSection = styled.main`
	padding-top: clamp(60px, 100% - 632px, 100px);
`;

export default Layout;
