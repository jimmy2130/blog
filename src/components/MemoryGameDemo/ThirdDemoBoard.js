import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants';
import {
	DigitZero,
	DigitOne,
	DigitTwo,
	DigitThree,
	DigitFour,
	DigitFive,
	DigitSix,
	DigitSeven,
	DigitEight,
	DigitNine,
	Colon,
} from './Digits';
import { convertTime } from './Demo.helpers';

const DIGITS = {
	0: DigitZero,
	1: DigitOne,
	2: DigitTwo,
	3: DigitThree,
	4: DigitFour,
	5: DigitFive,
	6: DigitSix,
	7: DigitSeven,
	8: DigitEight,
	9: DigitNine,
	':': Colon,
};

const LEFT = ['-2px', '23px', '36px', '49px', '74px'];
const TOP = ['0px', '0px', '5px', '0px', '0px'];
const MOBILE_LEFT = ['0px', '23px', '31px', '38px', '61px'];
const NUM_POS = ['end', 'start', 'center', 'end', 'start'];

function ThirdDemoBoard({ running, mode, isExpanded, time }) {
	const convertedTime = convertTime(time);
	return (
		<Wrapper>
			<TimerWrapper
				style={{
					'--move': isExpanded ? '-80px' : '0px',
					'--opacity': isExpanded === true || mode === 'normal' ? 1 : 0,
				}}
			>
				<Title>正常模式</Title>
				<NormalTimer>
					{convertedTime.map(({ id, digit }) => {
						let Digit = DIGITS[digit];
						return <Digit key={id} />;
					})}
				</NormalTimer>
			</TimerWrapper>
			<TimerWrapper
				style={{
					'--move': isExpanded ? '80px' : '0px',
					'--opacity': isExpanded === true || mode === 'absolute' ? 1 : 0,
				}}
			>
				<Title>Absolute模式</Title>
				<AbsoluteTimer>
					{convertedTime.map(({ id, digit }) => {
						let Digit = DIGITS[digit];
						return (
							<DigitWrapper
								key={id}
								style={{
									'--left': LEFT[id],
									'--top': TOP[id],
									'--mobile-left': MOBILE_LEFT[id],
									'--pos': NUM_POS[id],
								}}
							>
								<Digit />
							</DigitWrapper>
						);
					})}
				</AbsoluteTimer>
			</TimerWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	/* On mobile, prevent TimerWrapper from causing scrollburglar */
	overflow: hidden;
	background: var(--color-gray-100);
	border-radius: 32px;
	padding-top: 32px;
	padding-bottom: 32px;

	width: 350px;
	min-height: 150px;

	@media ${QUERIES.phoneAndDown} {
		width: 300px;
	}
`;

const TimerWrapper = styled.div`
	position: absolute;
	left: 0;
	right: 0;

	display: flex;
	flex-direction: column;
	align-items: center;

	transform: translateX(var(--move));
	opacity: var(--opacity);
	transition: transform 500ms, opacity 500ms;
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

	@media ${QUERIES.phoneAndDown} {
		transform: translateX(calc(var(--move) / 80 * 68));
	}
`;

const NormalTimer = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 2px;
`;

const Title = styled.div`
	margin-bottom: 24px;
	font-weight: 700;
`;

const AbsoluteTimer = styled.div`
	position: relative;
	width: 96px;
`;

const DigitWrapper = styled.span`
	position: absolute;
	top: var(--top);
	left: var(--left);
	width: 24px;
	display: grid;
	place-content: center var(--pos);
`;

export default ThirdDemoBoard;
