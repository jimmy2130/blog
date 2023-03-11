import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

const Link = ({ children, ...delegated }) => {
	return (
		<Wrapper target="_blank" rel="noreferrer noopener" {...delegated}>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled(NextLink)`
	text-decoration: none;
	color: var(--color-gray-900);

	&:hover {
		text-decoration: underline;
		text-underline-offset: 4px;
	}
`;

export default Link;
