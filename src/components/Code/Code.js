import React from 'react';
import styled from 'styled-components';
import { Wrapper as HighlightBlock } from '@/components/HighlightBlock';

const Code = styled.code`
	background: var(--color-gray-200);
	padding: 2px 4px;
	border-radius: 4px;
	color: var(--color-gray-900);

	${HighlightBlock} & {
		padding: 0;
		border-radius: 0;
		background: inherit;
		font-size: calc(17 / 16 * 1rem);
		line-height: 0.5;
	}
`;

export default Code;
