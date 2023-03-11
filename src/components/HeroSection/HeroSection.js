import React from 'react';
import styled from 'styled-components';
import NavigationBar from '../NavigationBar';
import MWW from '../MaxWidthWrapper';
import FMWW from '../FluidMaxWidthWrapper';
import Spacer from '../Spacer';
import ShiftBy from '../ShiftBy';
import Wave from './Wave';
import { QUERIES } from '../../constants';

function HeroSection({ index = false, title, subtitle }) {
	const MaxWidthWrapper = index ? MWW : FMWW;
	const NavigationBarHeight = 158;
	return (
		<Wrapper
			style={{
				'--minHeight': index ? 'min(90vh, 800px)' : undefined,
				'--height': index ? undefined : '390px',
			}}
		>
			<NavigationBar index={index} />
			<MaxWidthWrapper>
				<Spacer size={(index ? 240 : 190) - NavigationBarHeight} />
				<TitleWrapper>
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
			</MaxWidthWrapper>
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
	height: var(--height);
`;

const TitleWrapper = styled.header`
	color: var(--color-gray-900);
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
	line-height: 150%;

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
