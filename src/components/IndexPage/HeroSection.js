import React from 'react';
import styled from 'styled-components';
import NavigationBar from '../NavigationBar';
import VisuallyHidden from '../VisuallyHidden';
import Wave from './Wave';

function HeroSection() {
	return (
		<Wrapper>
			<MaxWidthWrapper>
				<NavigationBar />
				<VisuallyHidden as={'div'}>
					<h1>JimmyJim's Blog</h1>
				</VisuallyHidden>
				<TitleWrapper>
					<Title>
						這裡，正在捕捉
						<br />
						成長的痕跡...
					</Title>
					<SubTitle>前端網頁作品集與製作歷程紀錄</SubTitle>
				</TitleWrapper>
			</MaxWidthWrapper>
			<WaveWrapper>
				<Wave />
			</WaveWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	background: var(--color-primary-50);
	min-height: min(90vh, 800px);
`;

const MaxWidthWrapper = styled.div`
	--max-width: 1152px;
	--padding: 60px;

	max-width: calc(var(--max-width) + 2 * var(--padding));
	margin-left: auto;
	margin-right: auto;
	padding-left: var(--padding);
	padding-right: var(--padding);
`;

const TitleWrapper = styled.div`
	position: absolute;
	top: 240px;
	color: var(--color-gray-900);
`;

const Title = styled.p`
	font-size: calc(44 / 16 * 1rem);
	font-weight: 700;
	line-height: 48px;
	margin-bottom: 16px;
`;

const SubTitle = styled.p`
	font-size: calc(22 / 16 * 1rem);
	line-height: 150%;
`;

const WaveWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;

	overflow: hidden;
`;

export default HeroSection;
