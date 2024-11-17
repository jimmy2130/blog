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

function Triangle({
	cx: cxInput,
	cy: cyInput,
	r: rInput = '80',
	scale = 1,
	x = 0,
	y = 0,
}: Props) {
	const cx = parseInt(cxInput);
	const cy = parseInt(cyInput);
	const r = parseInt(rInput);
	const x1 = cx - (r * Math.sqrt(3)) / 2;
	const y1 = cy + r / 2;
	const x2 = cx + 1;
	const y2 = cy - r;
	const x3 = cx + (r * Math.sqrt(3)) / 2;
	const y3 = cy + r / 2;
	const d = `M${x1} ${y1}L${x2} ${y2}L${x3} ${y3}H${x1}Z`;
	return (
		<Wrapper
			d={d}
			stroke="#EC7070"
			strokeWidth="4"
			style={{
				'--move': `translate(${x}px, ${y}px)`,
				'--scale': `scale(${scale})`,
			}}
		/>
	);
}

const Wrapper = styled.path`
	transform: var(--move) var(--scale);
	transform-origin: 234px 181px;
	transition: transform 500ms;
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export default Triangle;
