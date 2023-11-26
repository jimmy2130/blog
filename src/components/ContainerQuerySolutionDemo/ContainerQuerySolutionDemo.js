import * as React from 'react';
import styled from 'styled-components';

function ContainerQuerySolutionDemo() {
	const [width, setWidth] = React.useState(0);
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (ref.current === null) {
			return;
		}
		setWidth(ref.current.getBoundingClientRect().width);
		function handleResize() {
			setWidth(ref.current.getBoundingClientRect().width);
		}
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Wrapper ref={ref}>
			{width === 0 ? null : <Text>{width}px</Text>}
			<Container>
				<Box />
				<Box2 style={{ '--width': `${width}px` }} />
				<Box3 />
				<Box4 />
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 110%;
	background: #1e1e1e;
	display: grid;
	place-content: center;
	container: fullScreen / inline-size;
`;

const Text = styled.p`
	position: fixed;
	top: 20px;
	left: 20px;
	color: white;
	font-size: calc(18 / 16 * 1rem);
`;

const Container = styled.div`
	width: 700px;
	height: 700px;
	border: 1px solid white;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Box = styled.div`
	width: clamp(400px, 100vw - 600px, 600px);
	height: 50px;
	background: deeppink;
`;

const Box2 = styled.div`
	width: clamp(400px, var(--width) - 600px, 600px);
	height: 50px;
	background: slateblue;
`;

const Box3 = styled.div`
	width: 600px;
	height: 50px;
	background: mediumseagreen;

	@container fullScreen (max-width: 1200px) {
		width: clamp(400px, 100cqi - 600px, 600px);
	}
`;

const Box4 = styled.div`
	width: 600px;
	height: 50px;
	background: orange;

	@container fullScreen (max-width: 1200px) {
		width: clamp(400px, 100cqw - 600px, 600px);
	}
`;

export default ContainerQuerySolutionDemo;
