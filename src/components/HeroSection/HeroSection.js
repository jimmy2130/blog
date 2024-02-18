import React from 'react';
import styled from 'styled-components';
import NavigationBar from '@/components/NavigationBar';
import ShiftBy from '@/components/ShiftBy';
import Wave from './Wave';
import {
	QUERIES,
	CONTENT_MAX_WIDTH,
	CONTENT_BREATHING_ROOM,
} from '@/constants';

function HeroSection({ index = false, title, subtitle }) {
	const NavigationBarHeight = 158;
	const MWW = index ? IndexMaxWidthWrapper : NormalMaxWidthWrapper;
	return (
		<Wrapper
			style={{
				'--minHeight': index ? 'min(90vh, 800px)' : undefined,
				'--padding-bottom': index ? undefined : '60px',
			}}
		>
			<MWW>
				<NavigationBar index={index} />
				<TitleWrapper
					style={{
						'--margin-top': `${(index ? 240 : 190) - NavigationBarHeight}px`,
					}}
				>
					<Title as={index ? 'div' : 'h1'}>{title}</Title>
					<ShiftBy x={index ? 0 : 2}>
						<SubTitle
							style={{
								'--font-size': index
									? 'calc(22 / 16 * 1rem)'
									: 'calc(19 / 16 * 1rem)',
							}}
						>
							{subtitle}
						</SubTitle>
					</ShiftBy>
				</TitleWrapper>
			</MWW>
			{index && (
				<WaveWrapper>
					<Wave />
				</WaveWrapper>
			)}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	background: var(--color-primary-50);
	min-height: var(--minHeight);
	padding-bottom: var(--padding-bottom);
`;

const MaxWidthWrapper = styled.div`
	max-width: calc(var(--max-width) + 2 * var(--breathing-room));
	margin-left: auto;
	margin-right: auto;
	padding-left: var(--breathing-room);
	padding-right: var(--breathing-room);
`;

const IndexMaxWidthWrapper = styled(MaxWidthWrapper)`
	--max-width: 1152px;
	--breathing-room: 60px;

	@media ${QUERIES.tabletAndDown} {
		--breathing-room: clamp(36px, 36px + 0.5 * (100vw - 648px), 60px);
	}

	@media ${QUERIES.phoneAndDown} {
		--breathing-room: clamp(24px, 24px + 0.5 * (100vw - 456px), 36px);
	}
`;

const NormalMaxWidthWrapper = styled(MaxWidthWrapper)`
	--max-width: ${CONTENT_MAX_WIDTH}px;
	--breathing-room: ${CONTENT_BREATHING_ROOM}px;
`;

const TitleWrapper = styled.header`
	color: var(--color-gray-900);
	margin-top: var(--margin-top);

	@media ${QUERIES.phoneAndDown} {
		margin-top: 0px;
	}
`;

const Title = styled.div`
	font-size: calc(44 / 16 * 1rem);
	font-weight: 700;
	line-height: 48px;
	margin-bottom: 16px;

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(36 / 16 * 1rem);
		line-height: 39px;
	}
`;

const SubTitle = styled.div`
	font-size: var(--font-size);
	line-height: 200%;

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(19 / 16 * 1rem);
	}
`;

const WaveWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	/* hide overflow wave */
	overflow: hidden;
`;

export default HeroSection;
