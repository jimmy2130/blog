import React from 'react';
import styled from 'styled-components';
import HighlightBlock from '@/components/HighlightBlock';
import TitleLink from '@/components/TitleLink';

function Sidenote({ children, title }) {
	return (
		<HighlightBlock as="aside">
			<TitleWrapper>
				<Title>{title}</Title>
				<TitleLink
					name={title}
					size={19}
					style={{ transform: 'translateY(2px)' }}
				/>
			</TitleWrapper>
			{children}
		</HighlightBlock>
	);
}

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
