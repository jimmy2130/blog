import React from 'react';
import styled from 'styled-components';
import UnstyledButton from '@/components/UnstyledButton';
import { QUERIES } from '@/constants';
import { SHAPES, COLORS, BACKGROUND_COLORS } from './constants';

function Shape({
	id = '021',
	num,
	isSelected,
	gameStatus,
	handleAddNum,
	isHidden,
}) {
	const Pattern = SHAPES[id[0]];
	const color = COLORS[id[1]];
	const backgroundColor = isHidden ? 'white' : BACKGROUND_COLORS[id[2]];
	const borderColor = isHidden ? '#e4e4e7' : BACKGROUND_COLORS[id[2]];

	function handleClick(event) {
		event.preventDefault();
		handleAddNum(num);
	}
	return (
		<Wrapper
			style={{
				'--background-color': backgroundColor,
				'--border-color': isSelected ? '#1ac23b' : borderColor,
			}}
			onClick={handleClick}
			disabled={gameStatus === 'success' || gameStatus === 'fail'}
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
				{!isHidden && <Pattern fill={color} />}
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

	&:disabled {
		cursor: not-allowed;
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

export default React.memo(Shape);
