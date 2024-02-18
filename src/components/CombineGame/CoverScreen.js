import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { QUERIES } from '@/constants';

function CoverScreen({ title, subtitle, buttonText, handleClick }) {
	return (
		<>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
			<ActionButton variant="primary" onClick={handleClick}>
				{buttonText}
			</ActionButton>
		</>
	);
}

const Title = styled.div`
	font-size: calc(64 / 16 * 1rem);
	font-weight: 700;
	text-align: center;
	color: #34343d;

	margin-bottom: -8px;

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(48 / 16 * 1rem);
	}
`;

const Subtitle = styled.div`
	font-size: calc(19 / 16 * 1rem);
	text-align: center;
	color: #74747d;

	margin-bottom: 48px;

	@media ${QUERIES.phoneAndDown} {
		margin-bottom: 24px;
	}
`;

const ActionButton = styled(Button)`
	margin-inline: auto;
	margin-bottom: 20px;

	@media ${QUERIES.phoneAndDown} {
		margin-bottom: 0;
	}
`;

export default CoverScreen;
