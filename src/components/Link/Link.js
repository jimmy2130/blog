import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { Wrapper as SidenoteWrapper } from '../Sidenote';

const Link = ({ href, children, title }) => {
	return (
		<Wrapper
			href={href}
			target="_blank"
			title={title}
			rel="noreferrer noopener"
		>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled(NextLink)`
	text-decoration: none;
	color: var(--color-primary);
	&:hover {
		transition: box-shadow 100ms ease 0s;
		box-shadow: 0px 2px 0px var(--color-primary);
	}

	${SidenoteWrapper} & {
		text-decoration: none;
		color: var(--color-gray-1000);
		box-shadow: 0px 1px 0px var(--color-primary);

		&:hover {
			transition: box-shadow 400ms ease 0s;
			box-shadow: 0px 2px 0px var(--color-primary);
		}
	}
`;

export default Link;
