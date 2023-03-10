import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants';

const Sidenote = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.aside`
	padding: 32px 32px 32px 28px;
	margin-left: -32px;
	margin-right: -32px;
	margin-bottom: 20px;
	background: var(--color-gray-200);
	border-left: 4px solid var(--color-primary);
	border-radius: 4px 8px 8px 4px;

	@media ${QUERIES.phoneAndDown} {
		padding: 16px;
		margin-left: 0;
		margin-right: 0;
	}
`;

export default Sidenote;
