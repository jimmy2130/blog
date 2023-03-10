import React from 'react';
import styled from 'styled-components';

function CodeBlock(props) {
	// console.log(props.children.props.className.split('-')[1])  //language
	// console.log(props.children.props.children)  //code
	return <Wrapper {...props} />;
}

export const Wrapper = styled.pre`
	background: var(--color-gray-100);
	border-radius: 4px;
	margin-bottom: 20px;
`;

export default CodeBlock;
