import React from 'react';
import styled from 'styled-components';
import { SHAPES, COLORS, BACKGROUND_COLORS } from './constants';

function Shape({ id = '021', isHidden = false }) {
	const Pattern = SHAPES[id[0]];
	const color = COLORS[id[1]];
	const backgroundColor = isHidden ? 'white' : BACKGROUND_COLORS[id[2]];
	const borderColor = isHidden ? '#e4e4e7' : BACKGROUND_COLORS[id[2]];

	return (
		<Wrapper
			style={{
				'--background-color': backgroundColor,
				'--border-color': borderColor,
			}}
		>
			<svg
				width="200"
				viewBox="0 0 200 200"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				{!isHidden && <Pattern fill={color} />}
			</svg>
			{isHidden && (
				<Mark
					style={{
						'--color': color === '#fbbf24' || isHidden ? '#34343d' : 'white',
						'--translateY': id[0] === '2' ? '5px' : '0px',
					}}
				>
					?
				</Mark>
			)}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background: var(--background-color);
	border: 6px solid var(--border-color);
	border-radius: 12px;
	aspect-ratio: 1 / 1;

	display: grid;
	place-content: center;

	position: relative;
`;

const Mark = styled.span`
	position: absolute;
	inset: 0;
	margin: auto;
	width: fit-content;
	height: fit-content;

	color: var(--color);
	font-weight: 700;

	transform: translateY(var(--translateY));
`;

export default Shape;
