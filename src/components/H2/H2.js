import React from 'react';
import styled from 'styled-components';
import TitleLink from '@/components/TitleLink';

function H2({ children }) {
	return (
		<Wrapper>
			<Title>{children}</Title>
			<TitleLink
				name={children}
				size={25}
				style={{ transform: 'translateY(3px)' }}
			/>
		</Wrapper>
	);
}

export const Wrapper = styled.h2`
	font-size: calc(25 / 16 * 1rem);
	color: var(--color-gray-900);

	margin-top: 60px;
	margin-bottom: 28px;

	&:first-child {
		margin-top: 0;
	}
`;

const Title = styled.span`
	margin-right: 16px;
`;

export default H2;
