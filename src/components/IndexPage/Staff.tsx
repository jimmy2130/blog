import React from 'react';
import styled, { keyframes } from 'styled-components';
import RectPath from './RectPath';
import { type Project3AnimationState } from './types';

const RECT_WIDTH = 417.544;
const BAR_GROW_DURATION = '500ms';

interface Props extends React.SVGProps<SVGPathElement | SVGRectElement> {
	animationState: Project3AnimationState;
	internalPause: boolean;
	order: number;
}

function Staff(
	{ animationState, internalPause, order, ...delegated }: Props,
	ref: React.ForwardedRef<SVGRectElement>,
) {
	const tag = delegated.d ? 'path' : 'rect';
	const dAttribute = delegated?.d ?? '';
	const xDelta =
		tag === 'rect'
			? Number(delegated.x)
			: Number(dAttribute.split(' ')[0].slice(1));
	const finalScale =
		tag === 'rect'
			? 1
			: RECT_WIDTH / (Number(dAttribute.split('H')[1].split('V')[0]) - xDelta);
	return (
		<Wrapper
			{...delegated}
			style={{
				animationPlayState:
					!internalPause &&
					(animationState === 'play' || animationState === 'resume')
						? 'running'
						: 'paused',
				'--final-scale': finalScale,
				'--transform-origin': `calc(${xDelta} / 700 * 100%)`,
				'--animation-delay': `calc(${order} * ${BAR_GROW_DURATION})`,
			}}
			ref={ref}
		/>
	);
}

const stretch = keyframes`
	0% {
		transform: scale(var(--final-scale), 1);
	}
	0.1% {
		transform: scale(0, 1);
	}
	100% {
		transform: scale(var(--final-scale), 1);
	}
`;

const Wrapper = styled(RectPath)`
	transform-origin: var(--transform-origin) center;
	animation: ${stretch} ${BAR_GROW_DURATION} linear;
	animation-delay: var(--animation-delay);
`;

export default React.forwardRef(Staff);
