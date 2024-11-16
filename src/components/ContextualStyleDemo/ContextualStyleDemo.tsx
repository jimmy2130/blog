import * as React from 'react';
import styled from 'styled-components';

function ContextualStyleDemo() {
	return (
		<Wrapper>
			<PinkBox>
				<Text>Pink</Text>
			</PinkBox>
			<PurpleBox>
				<Text>Purple</Text>
			</PurpleBox>
			<Text>White</Text>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100%;
	background: #1e1e1e;
	padding: 20px;
`;

const Box = styled.div`
	height: 200px;
	display: grid;
	place-content: center;
	margin-bottom: 20px;
`;

const PinkBox = styled(Box)`
	border: 2px solid deeppink;
	container: pink-box / inline-size;
`;

const PurpleBox = styled(Box)`
	border: 2px solid slateblue;
	container: purple-box / inline-size;
`;

const Text = styled.span`
	color: white;
	font-weight: 700;
	font-size: calc(18 / 16 * 1rem);

	@container pink-box (width <= 100cqi) {
		color: deeppink;
	}

	@container purple-box (width <= 100cqi) {
		color: slateblue;
	}
`;

export default ContextualStyleDemo;
