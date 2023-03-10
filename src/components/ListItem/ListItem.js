import React from 'react';
import styled from 'styled-components';
import OrderedList from '../OrderedList';
import UnorderedList from '../UnorderedList';

const ListItem = styled.li`
	display: flex;
	align-items: baseline;
	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-1000);
	margin-bottom: 16px;

	${OrderedList} & {
		counter-increment: counts 1;
		&:before {
			content: counter(counts) '.';
			margin-right: 8px;
			color: var(--color-primary);
			font-weight: 700;
		}
	}

	${UnorderedList} & {
		&:before {
			content: '＊';
			margin-left: -3px;
			margin-right: 8px;
			color: var(--color-primary);
			font-weight: 700;
		}
	}
`;

export default ListItem;
