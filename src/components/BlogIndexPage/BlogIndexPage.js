import React from 'react';
import styled from 'styled-components';
import HeroSection from '../HeroSection';
import FluidMaxWidthWrapper from '../FluidMaxWidthWrapper';
import Link from '../Link';
import Spacer from '../Spacer';
import Footer from '../Footer';
import { QUERIES } from '../../constants';

function BlogIndexPage({ data }) {
	return (
		<>
			<HeroSection
				title="所有文章"
				subtitle="包含了作品背後的製作說明，以及我有興趣的各種主題"
			/>
			<MainSection>
				<FluidMaxWidthWrapper>
					<ContentWrapper>
						{data.map(({ id, title, description }) => (
							<Row key={id} href="#">
								<Title>{title}</Title>
								<Description>{description}</Description>
							</Row>
						))}
					</ContentWrapper>
				</FluidMaxWidthWrapper>
			</MainSection>
			<Spacer size={600} axis="vertical" />
			<Footer />
		</>
	);
}

const MainSection = styled.main`
	padding-top: clamp(60px, 100% - 632px, 160px);
`;

const ContentWrapper = styled.div`
	max-width: 70ch;
	display: flex;
	flex-direction: column;
	gap: 100px;

	@media ${QUERIES.phoneAndDown} {
		gap: 60px;
	}
`;

const Row = styled(Link)`
	&:hover {
		text-decoration: none;
	}
`;

const Title = styled.h2`
	font-size: calc(25 / 16 * 1rem);
	color: var(--color-gray-900);

	margin-top: 60px;
	margin-bottom: 16px;

	&:first-child {
		margin-top: 0;
	}

	${Row}:hover & {
		text-decoration: underline;
		text-underline-offset: 4px;
	}
`;

const Description = styled.p`
	margin-bottom: 8px;
	font-size: calc(19 / 16 * 1rem);
	line-height: 200%;
	color: var(--color-gray-900);
`;

export default BlogIndexPage;
