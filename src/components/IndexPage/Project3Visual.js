import React from 'react';
import styled from 'styled-components';
import UnstyledButton from '@/components/UnstyledButton';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import VisuallyHidden from '@/components/VisuallyHidden';
import Staff from './Staff';
import { QUERIES } from '@/constants';

const TAB_CHANGE_PERIOD = 700;

function Project3Visual() {
	const {
		handleClick,
		animationState,
		internalPause,
		focusedTab,
		turns,
		lastAnimatedRef,
	} = useAnimation();

	return (
		<Wrapper>
			<TransparentCover>
				<Button onClick={handleClick}>
					{animationState === 'play' || animationState === 'resume' ? (
						<PauseButton />
					) : (
						<PlayButton />
					)}
					<VisuallyHidden>
						{animationState === 'play' || animationState === 'resume'
							? '暫停'
							: '開始'}
						動畫
					</VisuallyHidden>
				</Button>
			</TransparentCover>
			<svg
				width="700"
				viewBox="0 0 700 402"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				key={turns}
			>
				<rect width="700" height="401.17" rx="8" fill="var(--color-gray-10)" />
				<path
					d="M49.123 65.498H536.351C538.56 65.498 540.351 67.2889 540.351 69.498V401.171H49.123V65.498Z"
					fill="var(--color-gray-100)"
				/>
				<path
					d="M581.287 69.498C581.287 67.2889 583.077 65.498 585.287 65.498H700V393.171C700 397.589 696.418 401.171 692 401.171H581.287V69.498Z"
					fill="var(--color-gray-100)"
				/>
				<rect
					x="245.614"
					y="90.0586"
					width="98.2456"
					height="16.3743"
					rx="2"
					fill="var(--color-gray-400)"
				/>
				<path
					d="M49.123 53.123C49.123 50.9139 50.9139 49.123 53.123 49.123H110.62C112.829 49.123 114.62 50.9139 114.62 53.123V65.4973H49.123V53.123Z"
					fill={
						focusedTab === 'left'
							? 'var(--color-gray-600)'
							: 'var(--color-gray-300)'
					}
				/>
				<path
					d="M122.807 53.123C122.807 50.9139 124.598 49.123 126.807 49.123H184.304C186.513 49.123 188.304 50.9139 188.304 53.123V65.4973H122.807V53.123Z"
					fill={
						focusedTab === 'right'
							? 'var(--color-gray-600)'
							: 'var(--color-gray-300)'
					}
				/>
				<Staff
					x="98.2456"
					y="151.463"
					width="417.544"
					height="16.3743"
					rx="2"
					fill="var(--color-gray-400)"
					animationState={animationState}
					internalPause={internalPause}
					order={0}
				/>
				<Staff
					x="98.2456"
					y="192.398"
					width="417.544"
					height="16.3743"
					rx="2"
					fill="var(--color-gray-400)"
					animationState={animationState}
					internalPause={internalPause}
					order={1}
				/>
				<Staff
					x="98.2456"
					y="249.707"
					width="417.544"
					height="16.3743"
					rx="2"
					fill="var(--color-gray-400)"
					animationState={animationState}
					internalPause={internalPause}
					order={2}
				/>
				<Staff
					x="98.2456"
					y="290.643"
					width="417.544"
					height="16.3743"
					rx="2"
					fill="var(--color-gray-400)"
					animationState={animationState}
					internalPause={internalPause}
					order={3}
				/>
				<Staff
					x="98.2456"
					y="347.953"
					width="417.544"
					height="16.3743"
					rx="2"
					fill="var(--color-gray-400)"
					animationState={animationState}
					internalPause={internalPause}
					order={4}
				/>
				<Staff
					d="M98.2456 390.889C98.2456 389.784 99.141 388.889 100.246 388.889H513.789C514.894 388.889 515.789 389.784 515.789 390.889V401.169H98.2456V390.889Z"
					fill="var(--color-gray-400)"
					animationState={animationState}
					internalPause={internalPause}
					order={5}
					ref={lastAnimatedRef}
				/>
				<path
					d="M630.409 116.619C630.409 115.515 631.305 114.619 632.409 114.619H700V130.993H632.409C631.305 130.993 630.409 130.098 630.409 128.993V116.619Z"
					fill="var(--color-gray-400)"
				/>
				<path
					d="M630.409 157.555C630.409 156.45 631.305 155.555 632.409 155.555H700V171.929H632.409C631.305 171.929 630.409 171.034 630.409 169.929V157.555Z"
					fill="var(--color-gray-400)"
				/>
				<path
					d="M630.409 214.865C630.409 213.761 631.305 212.865 632.409 212.865H700V229.24H632.409C631.305 229.24 630.409 228.344 630.409 227.24V214.865Z"
					fill="var(--color-gray-400)"
				/>
				<path
					d="M630.409 255.801C630.409 254.696 631.305 253.801 632.409 253.801H700V270.175H632.409C631.305 270.175 630.409 269.28 630.409 268.175V255.801Z"
					fill="var(--color-gray-400)"
				/>

				<rect
					x="450.292"
					y="90.0586"
					width="65.4971"
					height="4.09357"
					rx="1"
					fill="var(--color-gray-300)"
				/>
				<rect
					x="474.854"
					y="98.2461"
					width="40.9357"
					height="4.09357"
					rx="1"
					fill="var(--color-gray-300)"
				/>
				<rect
					x="466.667"
					y="106.434"
					width="49.1228"
					height="4.09357"
					rx="1"
					fill="var(--color-gray-300)"
				/>
				<rect
					x="458.479"
					y="114.619"
					width="57.3099"
					height="4.09357"
					rx="1"
					fill="var(--color-gray-300)"
				/>
				<rect
					x="73.6841"
					y="114.619"
					width="81.8713"
					height="4.09357"
					rx="1"
					fill="var(--color-gray-300)"
				/>
				<rect
					x="73.6841"
					y="106.434"
					width="57.3099"
					height="4.09357"
					rx="1"
					fill="var(--color-gray-300)"
				/>
				<rect
					x="73.6841"
					y="151.463"
					width="8.18713"
					height="59.3567"
					rx="2"
					fill="var(--color-gray-400)"
				/>
				<rect
					x="605.848"
					y="114.619"
					width="8.18713"
					height="59.3567"
					rx="2"
					fill="var(--color-gray-400)"
				/>
				<rect
					x="605.848"
					y="212.865"
					width="8.18713"
					height="59.3567"
					rx="2"
					fill="var(--color-gray-400)"
				/>
				<rect
					x="73.6841"
					y="249.707"
					width="8.18713"
					height="59.3567"
					rx="2"
					fill="var(--color-gray-400)"
				/>
				<path
					d="M73.6843 349.953C73.6843 348.849 74.5798 347.953 75.6843 347.953H79.8715C80.976 347.953 81.8715 348.849 81.8715 349.953V401.169H73.6843V349.953Z"
					fill="var(--color-gray-400)"
				/>
			</svg>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
`;

const TransparentCover = styled.div`
	--inset: 24px;
	position: absolute;
	inset: var(--inset);
	display: grid;
	place-content: end;
	/* create a scroll container for button to stick */
	overflow: visible;

	@media ${QUERIES.phoneAndDown} {
		--inset: 8px;
	}
`;

const Button = styled(UnstyledButton)`
	position: sticky;
	right: var(--inset);

	&:hover circle {
		fill: var(--color-primary-400);
	}

	@media ${QUERIES.phoneAndDown} {
		transform: scale(0.9);
	}
`;

function useAnimation() {
	const [animationState, setAnimationState] = React.useState('end');
	const [turns, setTurns] = React.useState(0);
	const [focusedTab, setFocusedTab] = React.useState('right');
	const internalPause = focusedTab === 'left';
	const lastAnimatedRef = React.useRef();

	React.useEffect(() => {
		const node = lastAnimatedRef.current;
		function handleAnimationEnd() {
			setAnimationState('end');
			setFocusedTab('right');
		}
		node.addEventListener('animationend', handleAnimationEnd);
		return () => {
			node.removeEventListener('animationend', handleAnimationEnd);
		};
	});

	React.useEffect(() => {
		if (animationState === 'paused' || animationState === 'end') return;
		function changeTab() {
			setFocusedTab(focusedTab === 'right' ? 'left' : 'right');
		}
		const timeoutId = window.setTimeout(changeTab, TAB_CHANGE_PERIOD);
		return () => window.clearTimeout(timeoutId);
	}, [focusedTab, animationState]);

	function handleClick() {
		if (animationState === 'end') {
			setAnimationState('play');
			setTurns(turns + 1);
		} else if (animationState === 'play' || animationState === 'resume') {
			setAnimationState('paused');
		} else if (animationState === 'paused') {
			setAnimationState('resume');
		}
	}

	return {
		handleClick,
		animationState,
		internalPause,
		focusedTab,
		lastAnimatedRef,
		turns,
	};
}

export default Project3Visual;
