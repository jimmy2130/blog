import React from 'react';
import styled from 'styled-components';

const COLORS = {
	belgium: { left: '#2D2926', middle: '#FFCB00', right: '#C6102E' },
	france: { left: '#0055A2', middle: 'white', right: '#ED4135' },
	germany: { top: 'black', middle: '#DB0000', bottom: '#FFCC00' },
	guinea: { left: '#CC1126', middle: '#FACF16', right: '#009260' },
};

function IndexPageDemo({ countries }) {
	return (
		<>
			<Search x="32" y="166" width="225" height="28" rx="4" fill="#A8A29E" />
			<Filter x="579" y="166" width="89" height="28" rx="4" fill="#A8A29E" />
			{countries.map((country, index) => (
				<Flag key={country} country={country} index={index}></Flag>
			))}
		</>
	);
}

const Search = styled.rect``;
const Filter = styled.rect``;

function Flag({ country, index }) {
	if (country === 'germany') {
		return (
			<HorizontalColorFlag
				top={COLORS[country]['top']}
				middle={COLORS[country]['middle']}
				bottom={COLORS[country]['bottom']}
				index={index}
			/>
		);
	}
	return (
		<VerticalColorFlag
			left={COLORS[country]['left']}
			middle={COLORS[country]['middle']}
			right={COLORS[country]['right']}
			index={index}
		/>
	);
}

function VerticalColorFlag({ left, middle, right, index }) {
	const outerX = 32 + index * 168;
	const leftD = `M${32 + index * 168} 250C${32 + index * 168} 245.582 ${
		35.582 + index * 168
	} 242 ${40 + index * 168} 242H${76 + index * 168}V323H${
		32 + index * 168
	}V250Z`;
	const middleX = 76 + index * 168;
	const rightD = `M${120 + index * 168} 242H${156 + index * 168}C${
		160.418 + index * 168
	} 242 ${164 + index * 168} 245.582 ${164 + index * 168} 250V323H${
		120 + index * 168
	}V242Z`;
	return (
		<>
			<rect x={outerX} y="242" width="132" height="164" rx="8" fill="#A8A29E" />
			<path d={leftD} fill={left} />
			<rect x={middleX} y="242" width="44" height="81" fill={middle} />
			<path d={rightD} fill={right} />
		</>
	);
}

function HorizontalColorFlag({ top, middle, bottom, index }) {
	const outerX = 32 + index * 168;
	const topD = `M${32 + index * 168} 250C${32 + index * 168} 245.582 ${
		35.582 + index * 168
	} 242 ${40 + index * 168} 242H${156 + index * 168}C${
		160.418 + index * 168
	} 242 ${164 + index * 168} 245.582 ${164 + index * 168} 250V269H${
		32 + index * 168
	}V250Z`;
	const middleX = outerX;
	const bottomD = `M${32 + index * 168} 296H${164 + index * 168}V323H${
		32 + index * 168
	}V296Z`;
	return (
		<>
			<rect x={outerX} y="242" width="132" height="164" rx="8" fill="#A8A29E" />
			<path d={topD} fill={top} />
			<rect x={middleX} y="269" width="132" height="27" fill={middle} />
			<path d={bottomD} fill={bottom} />
		</>
	);
}

// not being used
function IndexBelgium() {
	return (
		<>
			<rect x="32" y="242" width="132" height="164" rx="8" fill="#A8A29E" />
			<path
				d="M32 250C32 245.582 35.5817 242 40 242H76V323H32V250Z"
				fill="#2D2926"
			/>
			<rect x="76" y="242" width="44" height="81" fill="#FFCB00" />
			<path
				d="M120 242H156C160.418 242 164 245.582 164 250V323H120V242Z"
				fill="#C6102E"
			/>
		</>
	);
}

function IndexFrance() {
	return (
		<>
			<rect x="200" y="242" width="132" height="164" rx="8" fill="#A8A29E" />
			<path
				d="M200 250C200 245.582 203.582 242 208 242H244V323H200V250Z"
				fill="#0055A2"
			/>
			<rect x="244" y="242" width="44" height="81" fill="white" />
			<path
				d="M288 242H324C328.418 242 332 245.582 332 250V323H288V242Z"
				fill="#ED4135"
			/>
		</>
	);
}

function IndexGermany() {
	return (
		<>
			<rect x="368" y="242" width="132" height="164" rx="8" fill="#A8A29E" />
			<path
				d="M368 250C368 245.582 371.582 242 376 242H492C496.418 242 500 245.582 500 250V269H368V250Z"
				fill="black"
			/>
			<rect x="368" y="269" width="132" height="27" fill="#DB0000" />
			<path d="M368 296H500V323H368V296Z" fill="#FFCC00" />
		</>
	);
}

function IndexGuinea() {
	return (
		<>
			<rect x="536" y="242" width="132" height="164" rx="8" fill="#A8A29E" />

			<path
				d="M536 250C536 245.582 539.582 242 544 242H580V323H536V250Z"
				fill="#CC1126"
			/>
			<rect x="580" y="242" width="44" height="81" fill="#FACF16" />
			<path
				d="M624 242H660C664.418 242 668 245.582 668 250V323H624V242Z"
				fill="#009260"
			/>
		</>
	);
}

export default IndexPageDemo;
