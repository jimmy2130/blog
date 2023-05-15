import React from 'react';
import styled, { keyframes } from 'styled-components';
import UnstyledButton from '../UnstyledButton';
import Eight from './Eight';
import Two from './Two';
import Triangle from './Triangle';
import Circle from './Circle';
import { BACKGROUND_STYLE } from './constants';
import { QUERIES } from '../../constants';

const PIECE_TEXT = {
	8: Eight,
	2: Two,
};

function Piece2({ text = '8', shape, id, reveal, state }) {
	const Text = PIECE_TEXT[text];
	if (!Text) {
		console.error(`Cannot recognize piece text ${text}`);
	}
	function handleClick(event) {
		event.preventDefault();
		reveal(id);
	}

	return (
		<Wrapper onClick={handleClick}>
			<Svg
				width="120"
				height="120"
				viewBox="0 0 120 120"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Background
					cx="60"
					cy="60"
					r="52"
					fill={BACKGROUND_STYLE[state]}
					style={{
						'--hover-background':
							state === 'cover'
								? 'hsl(205deg 37% 55%)'
								: BACKGROUND_STYLE[state],
					}}
				/>
				<Text />
				{shape === 'triangle' && <Triangle cx="60" cy="62" r="58" />}
				{shape === 'circle' && <Circle cx="60" cy="60" r="58" />}
			</Svg>
		</Wrapper>
	);
}
const Wrapper = styled(UnstyledButton)``;

const Svg = styled.svg`
	width: 120px;
	height: 120px;

	@media ${QUERIES.phoneAndDown} {
		width: 60px;
		height: 60px;
	}
`;

const Background = styled.circle`
	${Wrapper}:hover & {
		fill: var(--hover-background);
	}
`;

export default Piece2;
