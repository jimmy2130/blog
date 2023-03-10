import React from 'react';
import styled from 'styled-components';
import { Wrapper as SidenoteWrapper } from '../Sidenote';
import { QUERIES } from '../../constants';

const Paragraph = styled.p`
	/* text-align: justify; */
	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-1000);
	margin-bottom: 20px;

	${SidenoteWrapper} & {
		line-height: 1.5;
		font-size: calc(17 / 16 * 1rem);
		margin-bottom: 16px;
	}

	${SidenoteWrapper} &:last-child {
		margin-bottom: 0;
	}
`;

export default Paragraph;
