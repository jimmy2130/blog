import React from 'react';
import styled from 'styled-components';
import CodeBlock from '../CodeBlock';

const Code = styled.code`
	background: var(--color-gray-200);
	padding: 2px;
	border-radius: 4px;
	color: var(--color-gray-1000);

	${CodeBlock} & {
		display: block;
		padding: 32px;
		margin-left: -32px;
		margin-right: -32px;
		margin-bottom: 20px;
		border-radius: 8px;
		background: var(--color-gray-200);
		color: var(--color-gray-1000);
		font-size: calc(17 / 16 * 1rem);
		line-height: 1.5;
	}
`;

export default Code;
