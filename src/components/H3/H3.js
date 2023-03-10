import React from 'react';
import styled from 'styled-components';
import TitleLink from '../TitleLink';

function H3({ children }) {
	return (
		<Wrapper>
			<TitleLink name={children} size={22} />
			{children}
		</Wrapper>
	);
}

export const Wrapper = styled.h3`
	position: relative;
	width: fit-content;
	font-size: calc(22 / 16 * 1rem);
	color: var(--color-gray-900);
	margin-top: 60px;
	margin-bottom: 20px;
`;

export default H3;
