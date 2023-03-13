import React from 'react';
import styled from 'styled-components';
import { Wrapper as HighlightBlock } from '../HighlightBlock';

const Paragraph = styled.p`
	font-size: calc(19 / 16 * 1rem);
	line-height: 200%;
	color: var(--color-gray-900);
	margin-bottom: 40px;

	${HighlightBlock} & {
		margin-bottom: 28px;
	}

	${HighlightBlock} &:last-child {
		margin-bottom: 0;
	}
`;

export default Paragraph;
