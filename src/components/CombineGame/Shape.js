import React from 'react';
import styled from 'styled-components';
import UnstyledButton from '@/components/UnstyledButton';
import { QUERIES } from '@/constants';

const SHAPES = [Circle, Square, Triangle];
const COLORS = ['#dc2626', '#fbbf24', '#0284c7'];
const BACKGROUND_COLORS = ['#e4e4e7', '#a1a1aa', '#52525b'];

function Shape({ id = '021', num, isSelected, handleAddNum }) {
	const Pattern = SHAPES[id[0]];
	const color = COLORS[id[1]];
	const backgroundColor = BACKGROUND_COLORS[id[2]];

	function handleClick(event) {
		event.preventDefault();
		handleAddNum(num);
	}
	return (
		<Wrapper
			style={{
				'--background-color': backgroundColor,
				'--border-color': isSelected ? '#1ac23b' : backgroundColor,
			}}
			onClick={handleClick}
		>
			<LabelWrapper
				style={{
					'--color': backgroundColor === '#52525b' ? 'white' : 'black',
				}}
			>
				<Label
					style={{
						'--translateY': [7, 8, 9].includes(num) ? '1px' : '0px',
					}}
				>
					{num}
				</Label>
			</LabelWrapper>
			<svg
				width="200"
				viewBox="0 0 200 200"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Pattern fill={color} />
			</svg>
		</Wrapper>
	);
}

const Wrapper = styled(UnstyledButton)`
	background: var(--background-color);
	border: 6px solid var(--border-color);
	border-radius: 12px;
	aspect-ratio: 1 / 1;

	&:focus {
		outline-offset: -8px;
	}

	display: grid;
	place-content: center;

	position: relative;
`;

const LabelWrapper = styled.span`
	position: absolute;
	top: 0;
	left: 0;

	border: solid var(--color);
	border-radius: 50%;

	width: 20px;
	height: 20px;
	display: grid;
	place-content: center;

	@media ${QUERIES.phoneAndDown} {
		transform: translate(-4px, -4px);
	}
`;

const Label = styled.span`
	font-size: calc(14 / 16 * 1rem);
	font-weight: 700;
	color: var(--color);

	transform: translateY(var(--translateY));
`;

function Circle({ fill }) {
	return <circle cx="100" cy="100" r="60" fill={fill} />;
}

function Square({ fill }) {
	const size = 115;
	const distance = (200 - size) / 2;
	return (
		<rect width={size} height={size} x={distance} y={distance} fill={fill} />
	);
}

function Triangle({ fill }) {
	const cx = 100;
	const cy = 115;
	const r = 75;
	const x1 = cx - (r * Math.sqrt(3)) / 2;
	const y1 = cy + r / 2;
	const x2 = cx + 1;
	const y2 = cy - r;
	const x3 = cx + (r * Math.sqrt(3)) / 2;
	const y3 = cy + r / 2;
	const d = `M${x1} ${y1}L${x2} ${y2}L${x3} ${y3}H${x1}Z`;
	return <path d={d} fill={fill} />;
}

export default React.memo(Shape);
