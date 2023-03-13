import React from 'react';
import styled from 'styled-components';

function Demo({ color }) {
	return <div style={{ '--color': color }}>Such a neat demo!</div>;
}

const Wrapper = styled.div`
	width: fit-content;
	margin: 8px auto;
	border-radius: 4px;
	padding: 16px;
	background: DarkSeaGreen;
	border: 2px solid green;
	color: var(--color);
`;

export default Demo;
