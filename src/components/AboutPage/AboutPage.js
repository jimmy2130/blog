import React from 'react';
import styled from 'styled-components';
import HeroSection from '../HeroSection';
import MWW from '../MaxWidthWrapper';
import Spacer from '../Spacer';
import Footer from '../Footer';
import { QUERIES } from '../../constants';

function AboutPage({ children }) {
	return (
		<>
			<HeroSection
				title="關於我"
				subtitle="關於我的介紹，包含了學歷、程式學習經歷，和工作經歷"
			/>
			<MainSection>
				<MaxWidthWrapper>{children}</MaxWidthWrapper>
			</MainSection>
			<Spacer size={500} axis="vertical" />
			<Footer />
		</>
	);
}

const MaxWidthWrapper = styled(MWW)`
	--max-width: 70ch;
`;

const MainSection = styled.main`
	padding-top: 180px;
	padding-bottom: 180px;

	@media ${QUERIES.tabletAndDown} {
		padding-top: 80px;
		padding-bottom: 80px;
	}

	@media ${QUERIES.phoneAndDown} {
		padding-top: 52px;
		padding-bottom: 52px;
	}
`;

export default AboutPage;
