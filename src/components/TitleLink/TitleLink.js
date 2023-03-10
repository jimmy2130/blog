import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { Link } from 'react-feather';
// import { Wrapper as H2Wrapper } from '../H2';
import { Wrapper as H3Wrapper } from '../H3';
import { Title as SidenoteTitle } from '../Sidenote';
import VisuallyHidden from '../VisuallyHidden';

function TitleLink({ name, size = 24 }) {
	return (
		<Wrapper name={name} id={name} href={`#${name}`}>
			<Link size={size} />
			<VisuallyHidden>{name}</VisuallyHidden>
		</Wrapper>
	);
}

const Wrapper = styled(NextLink)`
	display: flex;
	align-items: center;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	color: inherit;
	transform: translate(200%, -1px);
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

	${H3Wrapper}:hover & {
		opacity: 1;
	}

	${SidenoteTitle}:hover & {
		opacity: 1;
	}
`;

export default TitleLink;
