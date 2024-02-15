import React from 'react';
import styled from 'styled-components';
import UnstyledButton from '@/components/UnstyledButton';

function Button({ variant = 'secondary', ...delegated }) {
	let Component;
	if (variant === 'primary') {
		Component = PrimaryButton;
	} else if (variant === 'secondary') {
		Component = SecondaryButton;
	}
	return <Component {...delegated} />;
}

const Base = styled(UnstyledButton)`
	width: 100%;
	max-width: 240px;
	height: 48px;
	border-radius: 4px;
	font-size: calc(19 / 16 * 1rem);
	user-select: none;

	&:focus {
		outline-offset: 4px;
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

const PrimaryButton = styled(Base)`
	background: #34343d;
	color: white;

	&:hover {
		background: #52525b;
	}

	&:disabled {
		background: #52525b;
	}

	&:disabled&:hover {
		background: #52525b;
	}
`;

const SecondaryButton = styled(Base)`
	background: #e4e4e7;
	color: #34343d;

	&:hover {
		background: #dadadd;
	}

	&:disabled {
		background: #e4e4e7;
	}

	&:disabled&:hover {
		background: #e4e4e7;
	}
`;

export default Button;
