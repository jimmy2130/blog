import React from 'react';
import styled, { keyframes } from 'styled-components';
import UnstyledButton from '../UnstyledButton';
import Eight from './Eight';
import Two from './Two';
import Triangle from './Triangle';
import Circle from './Circle';

const PIECE_TEXT = {
	8: Eight,
	2: Two,
};

function Piece({ text = '8', shape, id, animation, state, reveal }) {
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
			<svg
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
					animation={animation}
					fill="hsl(205deg 30% 27%)"
				/>
				<Text />
				{shape === 'triangle' && <Triangle cx="60" cy="62" r="58" />}
				{shape === 'circle' && <Circle cx="60" cy="60" r="58" />}
			</svg>
		</Wrapper>
	);
}
const Wrapper = styled(UnstyledButton)``;

const Background = styled.circle`
	animation: ${p => p.animation} 600ms;
	animation-fill-mode: both;
	${Wrapper}:hover & {
		fill: hsl(205deg 37% 55%);
	}
`;

export default Piece;
