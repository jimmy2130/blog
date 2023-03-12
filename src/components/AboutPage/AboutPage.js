import React from 'react';
import styled from 'styled-components';
import HeroSection from '../HeroSection';
import FluidMaxWidthWrapper from '../FluidMaxWidthWrapper';
import Spacer from '../Spacer';
import Footer from '../Footer';

function AboutPage({ children }) {
	return (
		<>
			<HeroSection
				title="關於我"
				subtitle="關於我的介紹，包含了學歷、程式學習經歷，和工作經歷"
			/>
			<MainSection>
				<FluidMaxWidthWrapper>{children}</FluidMaxWidthWrapper>
			</MainSection>
			<Spacer size={500} axis="vertical" />
			<Footer />
		</>
	);
}

const MainSection = styled.main`
	padding-top: clamp(60px, 100% - 632px, 160px);
`;

export default AboutPage;
