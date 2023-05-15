import React from 'react';
import styled from 'styled-components';

function Circle({ cx, cy, r = '67', scale = 1, x = 0, y = 0 }) {
	cx = parseInt(cx);
	cy = parseInt(cy);
	r = parseInt(r);
	return (
		<Wrapper
			animate={{ cx, cy }}
			cx={cx}
			cy={cy}
			r={r}
			stroke="#70B0EC"
			strokeWidth="4"
			style={{
				'--move': `translate(${x}px, ${y}px)`,
				'--scale': `scale(${scale})`,
			}}
		/>
	);
}

const Wrapper = styled.circle`
	transform: var(--move) var(--scale);
	transform-origin: 234px 181px;
	transition: transform 500ms;
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export default Circle;
