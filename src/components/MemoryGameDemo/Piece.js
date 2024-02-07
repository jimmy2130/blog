import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import UnstyledButton from '@/components/UnstyledButton';
import Eight from './Eight';
import Two from './Two';
import Triangle from './Triangle';
import Circle from './Circle';
import { QUERIES } from '@/constants';
import {
	ACTIVE,
	COVER_INACTIVE,
	ACTIVE_INACTIVE,
	COVER_COVER,
	ACTIVE_COVER,
} from './constants';

const PIECE_TEXT = {
	8: Eight,
	2: Two,
};

const ANIMATION = {
	active: ACTIVE,
	cover: undefined,
	'cover-inactive': COVER_INACTIVE,
	'active-inactive': ACTIVE_INACTIVE,
	'cover-cover': COVER_COVER,
	'active-cover': ACTIVE_COVER,
};

function Piece({ text = '8', shape, id, animation, reveal, x }) {
	const Text = PIECE_TEXT[text];
	if (!Text) {
		console.error(`Cannot recognize piece text ${text}`);
	}
	function handleClick(event) {
		event.preventDefault();
		reveal(id);
	}
	return (
		<Wrapper onClick={handleClick} style={{ '--x': `${x}px` }}>
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
					animation={animation}
					fill="hsl(205deg 30% 27%)"
				/>
				<Text />
				{shape === 'triangle' && <Triangle cx="60" cy="62" r="58" />}
				{shape === 'circle' && <Circle cx="60" cy="60" r="58" />}
			</Svg>
		</Wrapper>
	);
}
const Wrapper = styled(UnstyledButton)`
	transform: scale(0.7) translateX(var(--x));

	@media ${QUERIES.phoneAndDown} {
		transform: revert;
	}
`;

const Svg = styled.svg`
	width: 120px;
	height: 120px;

	@media ${QUERIES.phoneAndDown} {
		width: 60px;
		height: 60px;
	}
`;

const Background = styled.circle.withConfig({
	shouldForwardProp: prop => true,
})`
	animation: ${p => ANIMATION[p.animation]} 600ms both;
	${Wrapper}:hover & {
		fill: hsl(205deg 37% 55%);
	}
`;

export default Piece;
