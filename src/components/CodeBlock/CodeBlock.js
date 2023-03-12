import React from 'react';
import styled from 'styled-components';
import HighlightBlock from '../HighlightBlock';

function CodeBlock({ ...delegated }) {
	// console.log(props.children.props.className.split('-')[1])  //language
	// console.log(props.children.props.children)  //code
	return <HighlightBlock {...delegated} as="pre" />;
}

export default CodeBlock;
