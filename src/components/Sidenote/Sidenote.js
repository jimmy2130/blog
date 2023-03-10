import React from 'react';
import styled from 'styled-components';
import TitleLink from '../TitleLink';

function Sidenote({ children, title }) {
	return (
		<Wrapper>
			<Title>
				<TitleLink name={title} size={19} />
				{title}
			</Title>
			{children}
		</Wrapper>
	);
}

export const Wrapper = styled.aside`
	--padding: clamp(24px, 100vw - 668px, 36px);
	padding: var(--padding);
	margin-left: calc(var(--padding) * -1);
	margin-right: calc(var(--padding) * -1);
	margin-top: 40px;
	margin-bottom: 40px;
	background: var(--color-gray-100);
	border-radius: 8px;
`;

export const Title = styled.div`
	position: relative;
	width: fit-content;
	margin-bottom: 20px;
	font-size: calc(19 / 16 * 1rem);
	font-weight: 700;
	color: var(--color-gray-900);
`;

export default Sidenote;
