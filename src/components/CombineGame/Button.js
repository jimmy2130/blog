import React from 'react';
import styled from 'styled-components';
import UnstyledButton from '@/components/UnstyledButton';

const Button = styled(UnstyledButton)`
	height: 48px;
	padding-top: 8px;
	padding-bottom: 8px;

	background: #e4e4e7;
	border-radius: 4px;
	font-size: calc(19 / 16 * 1rem);
	user-select: none;

	&:focus {
		outline-offset: -4px;
	}

	&:hover {
		background: #dadadd;
	}

	&:disabled {
		cursor: not-allowed;
	}
	&:disabled&:hover {
		background: #e4e4e7;
	}
`;

export default Button;
