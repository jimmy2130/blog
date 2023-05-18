import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import useTimer from './use-timer.hook';
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

function ThirdDemo() {
	const [running, setRunning] = React.useState(false);
	const [isExpanded, setIsExpanded] = React.useState(true);
	const [mode, setMode] = React.useState('normal');
	const [time, restart] = useTimer(running);
	const convertedTime = convertTime(time);

	function handleStartPause(event) {
		event.preventDefault();
		setRunning(!running);
	}

	function handleRestart(event) {
		event.preventDefault();
		restart();
	}

	function handleExpandCollapse(event) {
		event.preventDefault();
		setIsExpanded(!isExpanded);
	}

	function handleToggle(event) {
		event.preventDefault();
		setMode(mode === 'normal' ? 'absolute' : 'normal');
	}

	return (
		<Wrapper>
			<Board>
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
									style={{
										'--left': LEFT[id],
										'--top': TOP[id],
										'--mobile-left': MOBILE_LEFT[id],
										'--pos': NUM_POS[id],
									}}
								>
									<Digit key={id} />
								</DigitWrapper>
							);
						})}
					</AbsoluteTimer>
				</TimerWrapper>
			</Board>
			<ButtonGroup>
				<ExpandCollapse onClick={handleExpandCollapse}>
					{isExpanded ? '收合' : '展開'}
				</ExpandCollapse>
				<Toggle onClick={handleToggle} disabled={isExpanded}>
					切換
				</Toggle>
				<StartPause onClick={handleStartPause}>
					{running ? (
						<Icon id="pause" color="var(--color-gray-900)" />
					) : (
						<Icon id="play" color="var(--color-gray-900)" />
					)}
				</StartPause>
				<Restart onClick={handleRestart}>
					<Icon id="refresh-ccw" color="var(--color-gray-900)" />
				</Restart>
			</ButtonGroup>
		</Wrapper>
	);
}

const Wrapper = styled.form`
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 60px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;

	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);
`;

const Board = styled.div`
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
	/* border: solid; */
`;

const ButtonGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	color: var(--color-gray-900);

	@media ${QUERIES.phoneAndDown} {
		gap: 8px;
	}
`;

const CustomButton = styled(UnstyledButton)`
	background: var(--color-primary-100);
	border-radius: 4px;
	padding: 8px 12px;
	border: 2px solid var(--color-primary-100);

	&:hover {
		border: 2px solid var(--color-primary-200);
	}

	&:disabled {
		background: var(--color-gray-200);
		border: 2px solid var(--color-gray-200);
		cursor: not-allowed;
	}
`;

const ExpandCollapse = styled(CustomButton)``;
const Toggle = styled(CustomButton)``;
const StartPause = styled(CustomButton)``;
const Restart = styled(CustomButton)``;

export default ThirdDemo;

function convertTime(time) {
	let second = time % 60;
	let minute = ((time - second) / 60).toString().padStart(2, '0').split('');
	second = second.toString().padStart(2, '0').split('');
	return [...minute, ':', ...second].map((t, i) => ({ id: i, digit: t }));
}
