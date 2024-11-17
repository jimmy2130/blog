import React from 'react';
import styled from 'styled-components';
import {
	Sun,
	Moon,
	ChevronDown,
	ChevronRight,
	ChevronLeft,
	RefreshCcw,
	Play,
	Pause,
	Anchor,
	X,
	Check,
} from 'react-feather';

const icons = {
	sun: Sun,
	moon: Moon,
	'chevron-down': ChevronDown,
	'chevron-right': ChevronRight,
	'chevron-left': ChevronLeft,
	'refresh-ccw': RefreshCcw,
	play: Play,
	pause: Pause,
	anchor: Anchor,
	x: X,
	check: Check,
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	id: keyof typeof icons;
	size?: string;
	strokeWidth?: string | number;
}

function Icon({ id, color, size, strokeWidth, ...delegated }: Props) {
	const Component = icons[id];

	if (!Component) {
		throw new Error(`No icon found for ID: ${id}`);
	}

	return (
		<Wrapper strokeWidth={strokeWidth} {...delegated}>
			<Component color={color} size={size} />
		</Wrapper>
	);
}

const Wrapper = styled.div<{ strokeWidth?: string | number }>`
	& > svg {
		display: block;
		stroke-width: ${p => p.strokeWidth}px;
	}
`;

export default Icon;
