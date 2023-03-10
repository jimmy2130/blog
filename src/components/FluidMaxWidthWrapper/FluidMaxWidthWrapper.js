import React from 'react';
import styled from 'styled-components';
import MWW from '../MaxWidthWrapper';

function FluidMaxWidthWrapper({ children, style, className }) {
	return (
		<Wrapper style={style} className={className}>
			{children}
		</Wrapper>
	);
}

const Wrapper = styled(MWW)`
	padding-left: clamp(24px, 100vw - 668px, 60px);
	padding-right: clamp(24px, 100vw - 668px, 60px);
`;

export default FluidMaxWidthWrapper;