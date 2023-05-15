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

export default IndexPageDemo;
