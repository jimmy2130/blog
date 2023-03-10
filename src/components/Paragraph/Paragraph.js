import React from 'react';
import styled from 'styled-components';
import { Wrapper as SidenoteWrapper } from '../Sidenote';
import { QUERIES } from '../../constants';

const Paragraph = styled.p`
	font-size: calc(19 / 16 * 1rem);
	line-height: 200%;
	color: var(--color-gray-1000);
	margin-bottom: 28px;

	${SidenoteWrapper} & {
		line-height: 200%;
		font-size: calc(17 / 16 * 1rem);
		margin-bottom: 28px;
	}

	${SidenoteWrapper} &:last-child {
		margin-bottom: 0;
	}
`;

export default Paragraph;
