import React from 'react';
import styled from 'styled-components';
import Icon from '@/components/Icon';

function Select({ value, children, ...delegated }) {
	const id = React.useId();
	return (
		<Wrapper htmlFor={id}>
			{value}
			<NativeSelect id={id} value={value} {...delegated}>
				{children}
			</NativeSelect>
			<CustomIcon id="chevron-down"></CustomIcon>
		</Wrapper>
	);
}

const NativeSelect = styled.select`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: none;
	background-color: transparent;
	appearance: none;
	opacity: 0;

	&:focus {
		outline-offset: 4px;
	}

	&:focus:not(:focus-visible) {
		outline: none;
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

const Wrapper = styled.label`
	display: block;
	position: relative;
	padding: 4px 4px 4px 12px;
	border-radius: 4px;
	background: #e4e4e7;
	color: #52525b;

	&:hover {
		background: #dadadd;
	}

	&:has(${NativeSelect}:disabled):hover {
		background: #e4e4e7;
	}
`;

const CustomIcon = styled(Icon)`
	position: absolute;
	top: 0px;
	bottom: 0px;
	margin-top: auto;
	margin-bottom: auto;
	height: fit-content;
	right: 12px;
	color: #34343d;
	pointer-events: none;
`;

export default Select;
