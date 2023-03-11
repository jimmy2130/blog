import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants';

const UnorderedList = styled.ul`
	padding-left: 28px;
	margin-top: 28px;
	margin-bottom: 60px;

	@media ${QUERIES.phoneAndDown} {
		padding-left: 12px;
	}
`;

export default UnorderedList;
