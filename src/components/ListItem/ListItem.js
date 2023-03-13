import React from 'react';
import styled from 'styled-components';
import OrderedList from '../OrderedList';
import UnorderedList from '../UnorderedList';
import { QUERIES } from '../../constants';

const ListItem = styled.li`
	position: relative;
	display: flex;
	align-items: baseline;
	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);
	margin-bottom: 16px;
	padding-left: 16px;

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
			position: absolute;
			font-size: calc(19 / 16 * 1rem);
			transform: translateX(calc(-16px - 50%)) scale(250%);
			color: var(--color-gray-900);
			font-weight: 700;
		}
	}

	@media ${QUERIES.phoneAndDown} {
		${OrderedList} & {
			padding-left: 0px;
		}
	}
`;

export default ListItem;
