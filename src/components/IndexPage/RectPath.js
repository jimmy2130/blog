import React from 'react';
import styled, { keyframes } from 'styled-components';

const RECT_WIDTH = 417.544;
const BAR_GROW_DURATION = '500ms';

function RectPath({ animationState, internalPause, order, ...delegated }, ref) {
	const tag = delegated.d ? 'path' : 'rect';
	const xDelta =
		tag === 'rect' ? delegated.x : Number(delegated.d.split(' ')[0].slice(1));
	const finalScale =
		tag === 'rect'
			? 1
			: RECT_WIDTH / (Number(delegated.d.split('H')[1].split('V')[0]) - xDelta);

	return (
		<Element
			{...delegated}
			as={tag}
			style={{
				animationPlayState:
					!internalPause &&
					(animationState === 'play' || animationState === 'resume')
						? 'running'
						: 'paused',
				'--finalScale': finalScale,
				'--transformOrigin': `calc(${xDelta} / 700 * 100%)`,
				'--animationDelay': `calc(${order} * ${BAR_GROW_DURATION})`,
			}}
			ref={ref}
		/>
	);
}

const stretch = keyframes`
	0% {
		transform: scale(var(--finalScale), 1);
	}
	0.1% {
		transform: scale(0, 1);
	}
	100% {
		transform: scale(var(--finalScale), 1);
	}
`;

const Element = styled.rect`
	transform-origin: var(--transformOrigin) center;
	animation: ${stretch} ${BAR_GROW_DURATION} linear;
	animation-delay: var(--animationDelay);
`;

export default React.forwardRef(RectPath);
