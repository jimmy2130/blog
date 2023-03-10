import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants';

const Sidenote = ({ children, title }) => {
	return (
		<Wrapper>
			<Title>{title}</Title>
			{children}
		</Wrapper>
	);
};

export const Wrapper = styled.aside`
	--padding: 20px;
	padding: var(--padding);
	margin-left: calc(var(--padding) * -1);
	margin-right: calc(var(--padding) * -1);
	margin-top: 40px;
	margin-bottom: 40px;
	background: var(--color-gray-100);
	border-radius: 8px;

	@media ${QUERIES.phoneAndDown} {
		padding: 16px;
		margin-left: 0;
		margin-right: 0;
	}
`;

const Title = styled.div`
	font-weight: 700;
	margin-bottom: 20px;
	font-size: calc(17 / 16 1rem);
`;

export default Sidenote;
