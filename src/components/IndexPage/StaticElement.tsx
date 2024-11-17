import React from 'react';
import styled from 'styled-components';
import RectPath from './RectPath';

interface Props extends React.SVGProps<SVGPathElement | SVGRectElement> {
	action: 'show' | 'hide';
	on: boolean;
}

function StaticElement({ action, on, style, ...delegated }: Props) {
	let opacity = 0;
	if (action === 'show') {
		opacity = on ? 1 : 0;
	} else if (action === 'hide') {
		opacity = on ? 0 : 1;
	}
	return (
		<Wrapper
			{...delegated}
			style={{ ...style, '--opacity': opacity }}
			ref={undefined}
		/>
	);
}

const Wrapper = styled(RectPath)`
	pointer-events: none;
	opacity: var(--opacity);
	transition: opacity 300ms;
`;

export default StaticElement;
