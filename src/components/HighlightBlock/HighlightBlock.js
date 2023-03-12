import React from 'react';
import styled from 'styled-components';

function HighlightBlock({ as, ...delegated }) {
	return <Wrapper as={as} {...delegated} />;
}

export const Wrapper = styled.aside`
	--aside-padding: clamp(24px, 100vw - 668px, 36px);
	padding: var(--aside-padding);
	margin-left: calc(var(--aside-padding) * -1);
	margin-right: calc(var(--aside-padding) * -1);
	margin-top: 40px;
	margin-bottom: 40px;
	background: var(--color-gray-100);
	border-radius: 8px;
`;

export default HighlightBlock;
