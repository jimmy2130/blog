import React from 'react';
import styled from 'styled-components';

function FluidMaxWidthWrapper({ children, style, className }) {
	return (
		<Wrapper style={style} className={className}>
			{children}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	--max-width: 70ch;
	--padding: 60px;

	max-width: calc(var(--max-width) + 2 * var(--padding));
	margin-left: auto;
	margin-right: auto;

	padding-left: clamp(24px, 100% - 70ch, 60px);
	padding-right: clamp(24px, 100% - 70ch, 60px);
`;

export default FluidMaxWidthWrapper;
