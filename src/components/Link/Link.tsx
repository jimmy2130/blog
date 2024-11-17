import React from 'react';
import styled from 'styled-components';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface Props extends NextLinkProps {
	children: React.ReactNode;
}

const Link = ({ children, ...delegated }: Props) => {
	return (
		<Wrapper target="_blank" rel="noreferrer noopener" {...delegated}>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled(NextLink)`
	text-decoration: underline;
	text-underline-offset: 4px;
	color: var(--color-gray-900);

	&:hover {
		text-decoration: none;
	}
`;

export default Link;
