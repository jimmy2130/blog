import React from 'react';
import styled from 'styled-components';
import TitleLink from '../TitleLink';

function H3({ children }) {
	return (
		<Wrapper>
			<Title>{children}</Title>
			<TitleLink
				name={children}
				size={22}
				style={{ transform: 'translateY(3px)' }}
			/>
		</Wrapper>
	);
}

export const Wrapper = styled.h3`
	font-size: calc(22 / 16 * 1rem);
	color: var(--color-gray-900);

	margin-top: 60px;
	margin-bottom: 20px;
`;

const Title = styled.span`
	margin-right: 12px;
`;

export default H3;
