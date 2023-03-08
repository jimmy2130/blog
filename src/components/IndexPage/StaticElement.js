import React from 'react';
import styled from 'styled-components';
import RectPath from './RectPath';

function StaticElement({ action, on, style, ...delegated }) {
	let opacity = 0;
	if (action === 'show') {
		opacity = on ? 1 : 0;
	} else if (action === 'hide') {
		opacity = on ? 0 : 1;
	}
	return <Wrapper {...delegated} style={{ ...style, '--opacity': opacity }} />;
}

const Wrapper = styled(RectPath)`
	pointer-events: none;
	opacity: var(--opacity);
	transition: opacity 300ms;
`;

export default StaticElement;
