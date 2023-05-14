import React from 'react';
import styled, { keyframes } from 'styled-components';
import IndexPageDemo from './IndexPageDemo';
import DetailPageDemo from './DetailPageDemo';
import { HOVER_COLOR, ACTIVE_COLOR } from './constants';

// url: '/'
// interact: browserBack, browserForward, title, websiteBack
// width: number
// colorMode: dark, light

const COUNTRIES = [
	{ name: 'belgium', region: 'Europe' },
	{ name: 'france', region: 'Europe' },
	{ name: 'germany', region: 'Europe' },
	{ name: 'guinea', region: 'Africa' },
];

function RestApiDemo({
	url,
	interaction = undefined,
	width = 700,
	colorMode = 'light',
}) {
	const { name, id } = url;
	const parsedUrl = new URL(name, 'http://www.example.com');
	const searchParams = parsedUrl.searchParams;
	const path = parsedUrl.pathname;
	const q = searchParams.get('q');
	const filter = searchParams.get('filter');

	let countries = COUNTRIES;
	if (filter) {
		countries = countries.filter(country => country.region === filter);
	}
	if (q) {
		countries = countries.filter(country =>
			country.name.includes(q.toLowerCase()),
		);
	}
	countries = countries.map(country => country.name);

	return (
		<Wrapper
			width="700"
			viewBox="0 0 700 458"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Background
				width={width}
				height="458"
				rx="32"
				fill={
					colorMode === 'light'
						? 'var(--light-background-color)'
						: 'var(--dark-background-color)'
				}
			/>
			<NavBar
				d={`M0 32C0 14.3269 14.3269 0 32 0H${width - (700 - 668)}C${
					width - (700 - 685.673)
				} 0 ${width - (700 - 700)} 14.3269 ${width - (700 - 700)} 32V54H0V32Z`}
				fill={
					colorMode === 'light'
						? 'var(--light-text-color)'
						: 'var(--dark-text-color)'
				}
			/>
			<Url
				x="193"
				y="16"
				width={width - (700 - 475)}
				height="22"
				rx="4"
				fill={
					colorMode === 'light'
						? 'var(--light-background-color)'
						: 'var(--dark-background-color)'
				}
			/>
			<BrowserBack
				d="M33 30.2321C31.6667 29.4622 31.6667 27.5377 33 26.7679L51.75 15.9426C53.0833 15.1728 54.75 16.1351 54.75 17.6747V39.3253C54.75 40.8649 53.0833 41.8272 51.75 41.0574L33 30.2321Z"
				interaction={interaction}
				key={`${id}-browser-back`}
				style={{
					'--elem-background':
						colorMode === 'light'
							? 'var(--light-background-color)'
							: 'var(--dark-background-color)',
				}}
				fill={
					interaction === 'browserBackHover'
						? 'var(--hover-color)'
						: 'var(--elem-background)'
				}
			/>
			<BrowserForward
				d="M101 30.2321C102.333 29.4622 102.333 27.5377 101 26.7679L82.25 15.9426C80.9167 15.1728 79.25 16.1351 79.25 17.6747V39.3253C79.25 40.8649 80.9167 41.8272 82.25 41.0574L101 30.2321Z"
				interaction={interaction}
				key={`${id}-browser-forward`}
				style={{
					'--elem-background':
						colorMode === 'light'
							? 'var(--light-background-color)'
							: 'var(--dark-background-color)',
				}}
				fill={
					interaction === 'browserForwardHover'
						? 'var(--hover-color)'
						: 'var(--elem-background)'
				}
			/>
			<Title
				x="32"
				y="106"
				width="106"
				height="12"
				rx="2"
				interaction={interaction}
				key={`${id}-title`}
				style={{
					'--elem-background':
						colorMode === 'light'
							? 'var(--light-text-color)'
							: 'var(--dark-text-color)',
				}}
				fill={
					interaction === 'titleHover'
						? 'var(--hover-color)'
						: 'var(--elem-background)'
				}
			/>
			{path === '/' && <IndexPageDemo countries={countries} />}
			{path !== '/' && !path.includes('error') && (
				<DetailPageDemo
					country={path?.replaceAll('/', '')}
					interaction={interaction}
					width={width}
				/>
			)}
			{path.includes('error') && (
				<Error x="245" y="244" width="210" height="24" rx="4" fill="#57534E" />
			)}
		</Wrapper>
	);
}

const Wrapper = styled.svg`
	--hover-color: ${HOVER_COLOR};
	--active-color: ${ACTIVE_COLOR};
	--light-background-color: #e7e5e4;
	--dark-background-color: #57534e;
	--light-text-color: #57534e;
	--dark-text-color: #d6d3d1;
`;

const flash = keyframes`
  0% { fill: var(--hover-color); }
	5% { fill: var(--active-color); }
  100% {fill: var(--elem-background); }
`;

const Background = styled.rect``;
const NavBar = styled.path``;
const Url = styled.rect``;
const BrowserBack = styled.path`
	animation: ${p => p.interaction === 'browserBackClick' && flash} 1000ms;
`;
const BrowserForward = styled.path`
	animation: ${p => p.interaction === 'browserForwardClick' && flash} 1000ms;
`;
const Title = styled.rect`
	animation: ${p => p.interaction === 'titleClick' && flash} 1000ms;
`;
const Error = styled.rect``;

export default RestApiDemo;
