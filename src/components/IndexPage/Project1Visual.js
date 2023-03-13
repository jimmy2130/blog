import React from 'react';
import styled from 'styled-components';
import StaticElement from './StaticElement';

function Project1Visual() {
	const [on, setOn] = React.useState(false);
	function toggle() {
		setOn(!on);
	}
	function handleKeyDown(event) {
		if (event.code === 'Enter') {
			event.stopPropagation();
			toggle();
		} else if (event.code === 'Space') {
			event.stopPropagation();
			event.preventDefault();
			toggle();
		}
	}

	return (
		<svg
			width="700"
			viewBox="0 0 700 402"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="700" height="401.17" rx="8" fill="var(--color-gray-100)" />
			<path
				d="M0 7.99999C0 3.58171 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V36.8421H0V7.99999Z"
				fill="var(--color-gray-300)"
			/>
			<BackButton
				x="32.7485"
				y="61.4043"
				width="221.053"
				height="24.5614"
				rx="2"
				fill="var(--color-gray-300)"
				style={{
					'--origin-x': 'calc(32.7485px + 221.053px / 2)',
					'--origin-y': 'calc(61.4043px + 24.5614px / 2)',
					'--target-x': 'calc(36px + 64px / 2)',
					'--target-y': 'calc(74px + 19px / 2)',
					'--origin-width': '221.053',
					'--origin-height': '24.5614',
					'--target-width': '64',
					'--target-height': '19',
					...moveAnimation(on),
				}}
			/>
			<PrimaryImage
				tabIndex={0}
				x="32.7485"
				y="110.525"
				width="133.041"
				height={81.87 + 4}
				rx="4"
				fill="var(--color-primary-500)"
				style={{
					'--origin-x': 'calc(32.7485px + 133.041px / 2)',
					'--origin-y': 'calc(110.525px + (81.87px + 4px) / 2)',
					'--target-x': 'calc(36px + 251px / 2)',
					'--target-y': 'calc(133px + 162px / 2)',
					'--origin-width': '133.041',
					'--origin-height': 'calc(81.87 + 4)',
					'--target-width': '251',
					'--target-height': '162',
					...moveAnimation(on),
				}}
				onClick={toggle}
				onKeyDown={handleKeyDown}
				role="button"
				aria-pressed={on}
				aria-label={'觸發動畫'}
			/>
			<StaticElement
				d="M32.75 192H165.79V270C165.79 272.209 163.999 274 161.79 274H36.75C34.5409 274 32.75 272.209 32.75 270V192Z"
				fill="var(--color-gray-300)"
				action="hide"
				on={on}
				style={backgroundUnderImageAnimation(on)}
			/>
			<StaticElement
				d="M32.7485 311.018C32.7485 308.808 34.5394 307.018 36.7485 307.018H161.789C163.999 307.018 165.789 308.808 165.789 311.018V401.17H32.7485V311.018Z"
				fill="var(--color-gray-300)"
				action="hide"
				on={on}
			/>
			<StaticElement
				d="M198.538 311.018C198.538 308.808 200.329 307.018 202.538 307.018H327.579C329.788 307.018 331.579 308.808 331.579 311.018V401.17H198.538V311.018Z"
				fill="var(--color-gray-300)"
				action="hide"
				on={on}
			/>
			<StaticElement
				d="M366.374 311.018C366.374 308.808 368.165 307.018 370.374 307.018H495.415C497.624 307.018 499.415 308.808 499.415 311.018V401.17H366.374V311.018Z"
				fill="var(--color-gray-300)"
				action="hide"
				on={on}
			/>
			<StaticElement
				d="M534.21 311.018C534.21 308.808 536.001 307.018 538.21 307.018H663.251C665.461 307.018 667.251 308.808 667.251 311.018V401.17H534.21V311.018Z"
				fill="var(--color-gray-300)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="198.538"
				y="110.525"
				width="133.041"
				height="163.743"
				rx="4"
				fill="var(--color-gray-300)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="366.374"
				y="110.525"
				width="133.041"
				height="163.743"
				rx="4"
				fill="var(--color-gray-300)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="534.21"
				y="110.525"
				width="133.041"
				height="163.743"
				rx="4"
				fill="var(--color-gray-300)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="569.006"
				y="61.4043"
				width="98.2456"
				height="24.5614"
				rx="2"
				fill="var(--color-gray-300)"
				action="hide"
				on={on}
			/>
			<StaticElement
				d="M198.538 114.525C198.538 112.316 200.329 110.525 202.538 110.525H327.579C329.788 110.525 331.579 112.316 331.579 114.525V192.397H198.538V114.525Z"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				d="M366.374 114.525C366.374 112.316 368.165 110.525 370.374 110.525H495.415C497.624 110.525 499.415 112.316 499.415 114.525V192.397H366.374V114.525Z"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				d="M534.21 114.525C534.21 112.316 536.001 110.525 538.21 110.525H663.251C665.461 110.525 667.251 112.316 667.251 114.525V192.397H534.21V114.525Z"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				d="M32.7485 311.018C32.7485 308.808 34.5394 307.018 36.7485 307.018H161.789C163.999 307.018 165.789 308.808 165.789 311.018V388.889H32.7485V311.018Z"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				d="M198.538 311.018C198.538 308.808 200.329 307.018 202.538 307.018H327.579C329.788 307.018 331.579 308.808 331.579 311.018V388.889H198.538V311.018Z"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				d="M366.374 311.018C366.374 308.808 368.165 307.018 370.374 307.018H495.415C497.624 307.018 499.415 308.808 499.415 311.018V388.889H366.374V311.018Z"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				d="M534.21 311.018C534.21 308.808 536.001 307.018 538.21 307.018H663.251C665.461 307.018 667.251 308.808 667.251 311.018V388.889H534.21V311.018Z"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="546.491"
				y="204.678"
				width="40.9357"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-600)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="546.491"
				y="225.146"
				width="65.4971"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="546.491"
				y="237.426"
				width="49.1228"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="546.491"
				y="249.707"
				width="81.8713"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="378.655"
				y="204.678"
				width="40.9357"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-600)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="378.655"
				y="225.146"
				width="65.4971"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="378.655"
				y="237.426"
				width="49.1228"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="378.655"
				y="249.707"
				width="81.8713"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="210.819"
				y="204.678"
				width="40.9357"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-600)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="210.819"
				y="225.146"
				width="65.4971"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="210.819"
				y="237.426"
				width="49.1228"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<StaticElement
				x="210.819"
				y="249.707"
				width="81.8713"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
			/>
			<Title
				x="45.0293"
				y="204.678"
				width="40.9357"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-600)"
				style={{
					'--origin-x': 'calc(45.0293px + 40.9357px / 2)',
					'--origin-y': 'calc(204.678px + 8.18713px / 2)',
					'--target-x': 'calc(398px + 69px / 2)',
					'--target-y': 'calc(133px + 11px / 2)',
					'--origin-width': '40.9357',
					'--origin-height': '8.18713',
					'--target-width': '69',
					'--target-height': '11',
					...moveAnimation(on),
				}}
			/>
			<StaticElement
				x="45.0293"
				y="225.146"
				width="65.4971"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
				style={textUnderImageAnimation(on)}
			/>
			<StaticElement
				x="45.0293"
				y="237.426"
				width="49.1228"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
				style={textUnderImageAnimation(on)}
			/>
			<StaticElement
				x="45.0293"
				y="249.707"
				width="81.8713"
				height="8.18713"
				rx="1"
				fill="var(--color-gray-400)"
				action="hide"
				on={on}
				style={textUnderImageAnimation(on)}
			/>
			<StaticElement
				x="398"
				y="164"
				width="115"
				height="8"
				rx="1"
				fill="var(--color-gray-300)"
				action="show"
				on={on}
				style={detailTextAnimation(0, on)}
			/>
			<StaticElement
				x="398"
				y="180"
				width="78"
				height="8"
				rx="1"
				fill="var(--color-gray-300)"
				action="show"
				on={on}
				style={detailTextAnimation(1, on)}
			/>
			<StaticElement
				x="398"
				y="196"
				width="57"
				height="8"
				rx="1"
				fill="var(--color-gray-300)"
				action="show"
				on={on}
				style={detailTextAnimation(2, on)}
			/>
			<StaticElement
				x="398"
				y="212"
				width="89"
				height="8"
				rx="1"
				fill="var(--color-gray-300)"
				action="show"
				on={on}
				style={detailTextAnimation(3, on)}
			/>
			<StaticElement
				x="398"
				y="228"
				width="70"
				height="8"
				rx="1"
				fill="var(--color-gray-300)"
				action="show"
				on={on}
				style={detailTextAnimation(4, on)}
			/>
			<StaticElement
				x="569"
				y="164"
				width="71"
				height="8"
				rx="1"
				fill="var(--color-gray-300)"
				action="show"
				on={on}
				style={detailTextAnimation(5, on)}
			/>
			<StaticElement
				x="569"
				y="180"
				width="88"
				height="8"
				rx="1"
				fill="var(--color-gray-300)"
				action="show"
				on={on}
				style={detailTextAnimation(6, on)}
			/>
			<StaticElement
				x="569"
				y="196"
				width="94"
				height="8"
				rx="1"
				fill="var(--color-gray-300)"
				action="show"
				on={on}
				style={detailTextAnimation(7, on)}
			/>
			<StaticElement
				x="398"
				y="271"
				width="266"
				height="8"
				rx="1"
				fill="var(--color-gray-300)"
				action="show"
				on={on}
				style={detailTextAnimation(12, on)}
			/>
			<StaticElement
				x="398"
				y="287"
				width="171"
				height="8"
				rx="1"
				fill="var(--color-gray-300)"
				action="show"
				on={on}
				style={detailTextAnimation(13, on)}
			/>
		</svg>
	);
}

const BackButton = styled.rect`
	transform: var(--translate) var(--scale);
	transform-origin: var(--origin-x) var(--origin-y);
	transition: transform 300ms;
`;

const PrimaryImage = styled.rect`
	outline-offset: 12px;
	transform: var(--translate) var(--scale);
	transform-origin: var(--origin-x) var(--origin-y);
	transition: transform 300ms;
	cursor: pointer;
	&:focus:not(:focus-visible) {
		outline: none;
	}
`;

const Title = styled.rect`
	transform: var(--translate) var(--scale);
	transform-origin: var(--origin-x) var(--origin-y);
	transition: transform 300ms;
`;

function moveAnimation(on) {
	return {
		'--translate': on
			? 'translate(calc(var(--target-x) - var(--origin-x)), calc(var(--target-y) - var(--origin-y)))'
			: 'translate(0px, 0px)',
		'--scale': on
			? 'scale(calc(var(--target-width) / var(--origin-width)), calc(var(--target-height) / var(--origin-height)))'
			: 'scale(1)',
	};
}

function backgroundUnderImageAnimation(on) {
	return {
		transition: on ? 'opacity 100ms' : 'opacity 700ms',
		transitionDelay: on ? '0ms' : '300ms',
	};
}

function textUnderImageAnimation(on) {
	return {
		transition: on ? 'opacity 100ms' : 'opacity 900ms',
		transitionDelay: on ? '0ms' : '700ms',
	};
}

function detailTextAnimation(order, on) {
	return {
		transition: on ? 'opacity 300ms' : 'opacity 100ms',
		transitionDelay: on ? `calc(300ms + ${order * 50}ms)` : '0ms',
	};
}

export default Project1Visual;
