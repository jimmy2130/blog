import React from 'react';
import styled from 'styled-components';
import Icon from '@/components/Icon';

function Select({ label, value, children, ...delegated }) {
	const id = React.useId();
	return (
		<Wrapper>
			<Label>{label}</Label>
			<SelectWrapper htmlFor={id}>
				{value}
				<NativeSelect id={id} value={value} {...delegated}>
					{children}
				</NativeSelect>
				<CustomIcon id="chevron-down"></CustomIcon>
			</SelectWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: baseline;
	gap: 24px;
`;

const Label = styled.span``;

const SelectWrapper = styled.label`
	flex: 1;
	position: relative;
	padding: 12px 48px 12px 24px;
	border: 2px solid var(--color-primary-100);
	border-radius: 8px;
	background: var(--color-primary-100);
	color: var(--color-gray-900);

	&:hover {
		border: 2px solid var(--color-primary-200);
	}
`;

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
		outline-offset: 8px;
	}

	&:focus:not(:focus-visible) {
		outline: none;
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
	color: var(--color-gray-900);
	pointer-events: none;
`;

export default Select;
