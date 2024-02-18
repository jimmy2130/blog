import React from 'react';
import styled from 'styled-components';
import UnstyledButton from '@/components/UnstyledButton';

const IconButton = styled(UnstyledButton)`
	width: 48px;
	height: 48px;

	display: grid;
	place-content: center;

	border-radius: 4px;

	&:hover {
		background: #e4e4e7;
	}

	&:focus {
		outline-offset: -4px;
	}

	&:disabled {
		cursor: not-allowed;
	}

	&:disabled&:hover {
		background: white;
	}
`;

export default IconButton;
