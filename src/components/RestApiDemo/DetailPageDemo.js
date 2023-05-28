import React from 'react';
import styled from 'styled-components';

const COUNTRIES_COMPONENT = {
	bel: DetailBelgium,
	fra: DetailFrance,
	deu: DetailGermany,
	gin: DetailGuinea,
};

function getScale(width) {
	let scale = 1;
	if (width <= 592) {
		scale = (width - 332) / 260;
	}
	return scale;
}

function DetailPageDemo({ country = 'belgium', interaction, width }) {
	const Country = COUNTRIES_COMPONENT[country];
	if (!Country) {
		console.error(`Cannot recognize the country! ${country}`);
		return null;
	}
	return (
		<>
			<WebsiteBack
				x="32"
				y="166"
				width="64"
				height="20"
				rx="4"
				fill={interaction === 'websiteBack' ? 'var(--hover-color)' : '#A8A29E'}
			/>
			<DetailPageText width={width} />
			<Country width={width} />
		</>
	);
}

const WebsiteBack = styled.rect``;

function DetailPageText({ width }) {
	let leftSideX = 0;
	if (width >= 648) {
		leftSideX = width - 304;
	} else if (width >= 592) {
		leftSideX = 344;
	} else {
		leftSideX = width - 248;
	}
	let rightSideX = width - (700 - 576);
	return (
		<>
			{/* left side */}
			<rect
				x={leftSideX}
				y="226"
				width="72"
				height="24"
				rx="4"
				fill="#57534E"
			/>
			<rect x={leftSideX} y="274" width="92" height="8" rx="4" fill="#A8A29E" />
			<rect x={leftSideX} y="290" width="92" height="8" rx="4" fill="#A8A29E" />
			<rect x={leftSideX} y="306" width="92" height="8" rx="4" fill="#A8A29E" />
			<rect x={leftSideX} y="322" width="92" height="8" rx="4" fill="#A8A29E" />
			<rect x={leftSideX} y="338" width="92" height="8" rx="4" fill="#A8A29E" />
			{/* right side */}
			<rect
				x={rightSideX}
				y="274"
				width="92"
				height="8"
				rx="4"
				fill="#A8A29E"
			/>
			<rect
				x={rightSideX}
				y="290"
				width="92"
				height="8"
				rx="4"
				fill="#A8A29E"
			/>
			<rect
				x={rightSideX}
				y="306"
				width="92"
				height="8"
				rx="4"
				fill="#A8A29E"
			/>
			<rect
				x={rightSideX}
				y="322"
				width="92"
				height="8"
				rx="4"
				fill="#A8A29E"
			/>
			<rect
				x={rightSideX}
				y="338"
				width="92"
				height="8"
				rx="4"
				fill="#A8A29E"
			/>
		</>
	);
}

function DetailBelgium({ width }) {
	return (
		<Wrapper style={{ '--flag-scale': getScale(width) }}>
			<path
				d="M32 234C32 229.582 35.5817 226 40 226H118.667V402H40C35.5817 402 32 398.418 32 394V234Z"
				fill="#2D2926"
			/>
			<rect x="118.667" y="226" width="86.6667" height="176" fill="#FFCB00" />
			<path
				d="M205.333 226H284C288.418 226 292 229.582 292 234V394C292 398.418 288.418 402 284 402H205.333V226Z"
				fill="#C6102E"
			/>
		</Wrapper>
	);
}

function DetailFrance({ width }) {
	return (
		<Wrapper style={{ '--flag-scale': getScale(width) }}>
			<path
				d="M32 234C32 229.582 35.5817 226 40 226H118.667V402H40C35.5817 402 32 398.418 32 394V234Z"
				fill="#0055A2"
			/>
			<rect x="118.667" y="226" width="86.6667" height="176" fill="white" />
			<path
				d="M205.333 226H284C288.418 226 292 229.582 292 234V394C292 398.418 288.418 402 284 402H205.333V226Z"
				fill="#ED4135"
			/>
		</Wrapper>
	);
}

function DetailGermany({ width }) {
	return (
		<Wrapper style={{ '--flag-scale': getScale(width) }}>
			<path
				d="M32 234C32 229.582 35.5817 226 40 226H284C288.418 226 292 229.582 292 234V284.667H32V234Z"
				fill="black"
			/>
			<rect x="32" y="284.667" width="260" height="58.6667" fill="#DB0000" />
			<path
				d="M32 343.333H292V394C292 398.418 288.418 402 284 402H40C35.5817 402 32 398.418 32 394V343.333Z"
				fill="#FFCC00"
			/>
		</Wrapper>
	);
}

function DetailGuinea({ width }) {
	return (
		<Wrapper style={{ '--flag-scale': getScale(width) }}>
			<path
				d="M32 234C32 229.582 35.5817 226 40 226H118.667V402H40C35.5817 402 32 398.418 32 394V234Z"
				fill="#CC1126"
			/>
			<rect x="118.667" y="226" width="86.6667" height="176" fill="#FACF16" />
			<path
				d="M205.333 226H284C288.418 226 292 229.582 292 234V394C292 398.418 288.418 402 284 402H205.333V226Z"
				fill="#009260"
			/>
		</Wrapper>
	);
}

const Wrapper = styled.g`
	transform: scale(var(--flag-scale));
	transform-origin: 32px 226px;
`;

export default DetailPageDemo;
