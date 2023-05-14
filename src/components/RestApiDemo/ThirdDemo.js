import React from 'react';
import styled from 'styled-components';
import RestApiDemo from './RestApiDemo';

function ThirdDemo() {
	const [width, setWidth] = React.useState(700);
	return (
		<Wrapper>
			<RestApiDemo url={{ name: '/gin', id: 'abc' }} width={width} />
			<label htmlFor="volume">Volume</label>
			<input
				type="range"
				id="volume"
				name="volume"
				min={400}
				max={700}
				value={width}
				onChange={event => setWidth(event.target.value)}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.form`
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;

	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);
`;

export default ThirdDemo;
