import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

function FadeOutTest() {
	const [on, setOn] = React.useState(false);
	return (
		<Wrapper>
			<Modal on={on} />
			<button onClick={() => setOn(!on)}>Toggle - {on.toString()}</button>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100%;
	display: grid;
	place-content: center;
`;

export default FadeOutTest;
