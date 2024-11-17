import React from 'react';
import styled from 'styled-components';

type Props = {
	cx: string;
	cy: string;
	r?: string;
	scale?: number;
	x?: number;
	y?: number;
};

function Circle({
	cx: cxInput,
	cy: cyInput,
	r: rInput = '67',
	scale = 1,
	x = 0,
	y = 0,
}: Props) {
	const cx = parseInt(cxInput);
	const cy = parseInt(cyInput);
	const r = parseInt(rInput);
	return (
		<Wrapper
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
