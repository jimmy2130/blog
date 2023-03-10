import React from 'react';
import styled from 'styled-components';
import TitleLink from '../TitleLink';

function H2({ children }) {
	return (
		<Wrapper>
			<TitleLink name={children} size={25} />
			{children}
		</Wrapper>
	);
}

export const Wrapper = styled.h2`
	width: fit-content;
	position: relative;
	font-size: calc(25 / 16 * 1rem);
	color: var(--color-gray-900);
	margin-top: 60px;
	margin-bottom: 28px;

	&:first-child {
		margin-top: 0;
	}
`;

export default H2;
