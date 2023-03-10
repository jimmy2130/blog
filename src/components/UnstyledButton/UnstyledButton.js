import React from 'react';
import styled from 'styled-components';

export default styled.button`
	display: ${props => props.display || 'block'};
	margin: 0;
	padding: 0;
	border: none;
	background: transparent;
	cursor: pointer;
	text-align: center;
	font: inherit;
	color: inherit;

	&:focus {
		outline-offset: 2px;
	}

	&:focus:not(:focus-visible) {
		outline: none;
	}
`;
