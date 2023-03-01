import React from 'react';
import styled from 'styled-components';
import NavigationBar from '../NavigationBar';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Spacer from '../Spacer';
import Wave from './Wave';

function HeroSection({ index = false, title, subtitle }) {
	const NavigationBarHeight = 158;
	return (
		<Wrapper
			style={{
				'--minHeight': index ? 'min(90vh, 800px)' : undefined,
				'--height': index ? undefined : '390px',
			}}
		>
			<NavigationBar />
			<MaxWidthWrapper>
				<Spacer size={(index ? 240 : 190) - NavigationBarHeight} />
				<TitleWrapper>
					<Title>{title}</Title>
					<SubTitle>{subtitle}</SubTitle>
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

const TitleWrapper = styled.div`
	color: var(--color-gray-900);
`;

const Title = styled.div`
	font-size: calc(44 / 16 * 1rem);
	font-weight: 700;
	line-height: 48px;
	margin-bottom: 16px;
`;

const SubTitle = styled.div`
	font-size: calc(22 / 16 * 1rem);
	line-height: 150%;
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
