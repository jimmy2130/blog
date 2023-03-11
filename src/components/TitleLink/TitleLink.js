import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { Link } from 'react-feather';
import { TitleWrapper as SidenoteTitle } from '../Sidenote';
import VisuallyHidden from '../VisuallyHidden';

function TitleLink({ name, size = 24, style }) {
	return (
		<Wrapper name={name} id={name} href={`#${name}`} style={style}>
			<Link size={size} />
			<VisuallyHidden>{name}</VisuallyHidden>
		</Wrapper>
	);
}

const Wrapper = styled(NextLink)`
	display: inline-block;
	color: inherit;
	opacity: 0;
	transition: opacity 250ms;
	scroll-margin-top: 128px;

	&:focus {
		opacity: 1;
		outline-offset: 2px;
	}

	&:focus:not(:focus-visible) {
		outline: none;
	}

	h2:hover & {
		opacity: 1;
	}

	h3:hover & {
		opacity: 1;
	}

	${SidenoteTitle}:hover & {
		opacity: 1;
	}
`;

export default TitleLink;
