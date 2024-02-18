import React from 'react';
import styled from 'styled-components';
import { CONTENT_MAX_WIDTH } from '@/constants';

function HighlightBlock({ as, ...delegated }) {
	return <Wrapper as={as} {...delegated} />;
}

export const Wrapper = styled.aside`
	--max-width: ${CONTENT_MAX_WIDTH}px;
	--aside-padding: clamp(24px, 100vw - var(--max-width), 36px);
	padding: var(--aside-padding);
	margin-inline: calc(var(--aside-padding) * -1);
	margin-bottom: 40px;

	background: var(--color-gray-100);
	border-radius: 8px;
`;

export default HighlightBlock;
