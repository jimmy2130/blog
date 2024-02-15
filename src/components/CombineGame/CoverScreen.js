import React from 'react';
import styled from 'styled-components';
import Button from './Button';

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
`;

const Subtitle = styled.div`
	font-size: calc(19 / 16 * 1rem);
	text-align: center;
	color: #74747d;

	margin-bottom: 48px;
`;

const ActionButton = styled(Button)`
	margin-inline: auto;
	margin-bottom: 20px;
`;

export default CoverScreen;
