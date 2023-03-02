import React from 'react';
import styled from 'styled-components';
import HeroSection from '../HeroSection';
import ProjectShowCase from '../ProjectShowcase';
import Spacer from '../Spacer';
import Footer from '../Footer';
import { QUERIES } from '../../constants';

function IndexPage() {
	return (
		<>
			<HeroSection
				index={true}
				title={
					<>
						這裡，正在捕捉
						<br />
						成長的痕跡...
					</>
				}
				subtitle="前端網頁作品集與製作歷程紀錄"
			/>
			<MainSection>
				<ProjectShowCase />
			</MainSection>
			<Spacer size={700} />
			<Footer />
		</>
	);
}

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

export default IndexPage;
