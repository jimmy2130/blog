import React from 'react';
import styled from 'styled-components';
import OrderedList from '../OrderedList';
import UnorderedList from '../UnorderedList';

const ListItem = styled.li`
	display: flex;
	align-items: baseline;
	position: relative;
	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);
	margin-left: 4px;
	margin-bottom: 16px;

	${OrderedList} & {
		counter-increment: counts 1;
		&:before {
			content: counter(counts) '.';
			margin-right: 8px;
			color: var(--color-gray-900);
			font-weight: 700;
		}
	}

	${UnorderedList} & {
		&:before {
			content: '·';
			font-size: calc(19 / 16 * 1rem);
			transform: scale(250%);
			margin-left: -3px;
			margin-right: 16px;
			color: var(--color-gray-900);
			font-weight: 700;
		}
	}
`;

export default ListItem;
