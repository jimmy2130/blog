import React from 'react';
import styled from 'styled-components';
import TitleLink from '../TitleLink';

function Sidenote({ children, title }) {
	return (
		<Wrapper>
			<TitleWrapper>
				<Title>{title}</Title>
				<TitleLink
					name={title}
					size={19}
					style={{ transform: 'translateY(2px)' }}
				/>
			</TitleWrapper>
			{children}
		</Wrapper>
	);
}

export const Wrapper = styled.aside`
	--aside-padding: clamp(24px, 100vw - 668px, 36px);
	padding: var(--aside-padding);
	margin-left: calc(var(--aside-padding) * -1);
	margin-right: calc(var(--aside-padding) * -1);
	margin-top: 40px;
	margin-bottom: 40px;
	background: var(--color-gray-100);
	border-radius: 8px;
`;

export const TitleWrapper = styled.div`
	margin-bottom: 20px;
	color: var(--color-gray-900);
	font-size: calc(19 / 16 * 1rem);
	font-weight: 700;
`;

const Title = styled.span`
	margin-right: 8px;
`;

export default Sidenote;
