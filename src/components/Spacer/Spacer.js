import React from 'react';
import styled from 'styled-components';

function getHeight({ axis, size }) {
	return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }) {
	return axis === 'vertical' ? 1 : size;
}

function Spacer(props) {
	const width = getWidth(props);
	const height = getHeight(props);
	return (
		<Wrapper
			style={{
				'--width': `${width}px`,
				'--min-width': `${width}px`,
				'--height': `${height}px`,
				'--min-height': `${height}px`,
			}}
		/>
	);
}

const Wrapper = styled.span`
	display: block;
	width: var(--width);
	min-width: var(--width);
	height: var(--height);
	min-height: var(--height);
`;

export default Spacer;
