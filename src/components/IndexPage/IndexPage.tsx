import React from 'react';
import styled from 'styled-components';
import HeroSection from '@/components/HeroSection';
import ProjectShowCase from './ProjectShowcase';
import Spacer from '@/components/Spacer';
import Footer from '@/components/Footer';
import { QUERIES } from '@/constants';
import { DATA } from './project-data';

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
				{DATA.map(({ id, ...delegated }) => (
					<ProjectShowCase key={id} {...delegated} />
				))}
			</MainSection>
			<Spacer size={500} axis="vertical" />
			<Footer />
		</>
	);
}

const MainSection = styled.main`
	padding-top: 180px;
	padding-bottom: 180px;

	display: flex;
	flex-direction: column;
	gap: 180px;

	@media ${QUERIES.tabletAndDown} {
		padding-top: 80px;
		padding-bottom: 80px;
		gap: 120px;
	}

	@media ${QUERIES.phoneAndDown} {
		padding-top: 52px;
		padding-bottom: 52px;
		gap: 72px;
	}
`;

export default IndexPage;
