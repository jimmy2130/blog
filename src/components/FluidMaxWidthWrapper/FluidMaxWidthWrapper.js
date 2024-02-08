import React from 'react';
import styled from 'styled-components';
import { CONTENT_MAX_WIDTH } from '@/constants';

function FluidMaxWidthWrapper({ children, style, className }) {
	return (
		<Wrapper style={style} className={className}>
			{children}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	--max-width: ${CONTENT_MAX_WIDTH}px;
	--padding: 60px;

	max-width: calc(var(--max-width) + 2 * var(--padding));
	margin-left: auto;
	margin-right: auto;

	padding-left: clamp(24px, 100% - var(--max-width), 60px);
	padding-right: clamp(24px, 100% - var(--max-width), 60px);
`;

export default FluidMaxWidthWrapper;
