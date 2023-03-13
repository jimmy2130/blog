import React from 'react';
import styled from 'styled-components';
import GamePiece from './GamePiece';

const CX = ['257.895', '323.392', '388.889', '454.386'];
const CY = ['102.341', '167.839', '233.335', '298.833'];

function Project2Visual() {
	const [openedCircleNum, setOpenedCircleNum] = React.useState(0);
	function increaseOpenedCircleNum() {
		setOpenedCircleNum(openedCircleNum + 1);
	}
	const isSvgCovered = useCoverSwitch(openedCircleNum);
	const { focusableId, moveFocusPosition } = useRovingIndex(isSvgCovered);

	return (
		<Wrapper>
			<svg
				width="700"
				viewBox="0 0 700 402"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="700" height="401.17" rx="8" fill="var(--color-gray-100)" />
				<rect
					x="98.2456"
					y="24.5605"
					width="73.6842"
					height="24.5614"
					rx="2"
					fill="var(--color-gray-300)"
				/>
				<rect
					x="536.257"
					y="24.5605"
					width="65.4971"
					height="24.5614"
					rx="2"
					fill="var(--color-gray-300)"
				/>
				<rect
					x="462.573"
					y="24.5605"
					width="65.4971"
					height="24.5614"
					rx="2"
					fill="var(--color-gray-300)"
				/>
				<rect
					x="225.146"
					y="352.047"
					width="118.713"
					height="32.7485"
					rx="2"
					fill="var(--color-gray-300)"
				/>
				<rect
					x="358.187"
					y="352.047"
					width="118.713"
					height="32.7485"
					rx="2"
					fill="var(--color-gray-300)"
				/>
				{CY.map((cy, yIndex) =>
					CX.map((cx, xIndex) => (
						<GamePiece
							cx={cx}
							cy={cy}
							key={`${cx}-${cy}`}
							id={yIndex * 4 + xIndex}
							focusableId={focusableId}
							moveFocusPosition={moveFocusPosition}
							openedCircleNum={openedCircleNum}
							increaseOpenedCircleNum={increaseOpenedCircleNum}
						/>
					)),
				)}
			</svg>
			<TransparentCover
				style={{
					'--display': isSvgCovered ? 'block' : 'none',
				}}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
`;

const TransparentCover = styled.div`
	position: absolute;
	inset: 0;
	background: transparent;
	display: var(--display);
`;

function useCoverSwitch(openedCircleNum) {
	const [isCovered, setIsCovered] = React.useState(false);
	React.useEffect(() => {
		if (openedCircleNum === 0) return;
		if (openedCircleNum % 2 === 1) return;
		setIsCovered(true);
		const timeoutId = window.setTimeout(() => setIsCovered(false), 600);
		return () => window.clearTimeout(timeoutId);
	}, [openedCircleNum]);
	return isCovered;
}

function useRovingIndex(isSvgCovered) {
	const [focusableId, setFocusableId] = React.useState(-1);

	function moveFocusPosition(key) {
		if (isSvgCovered) {
			return;
		}
		const id = focusableId === -1 ? 0 : focusableId;
		if (key === 'ArrowUp') {
			setFocusableId(id < 4 ? id : id - 4);
		} else if (key === 'ArrowDown') {
			setFocusableId(id >= 12 ? id : id + 4);
		} else if (key === 'ArrowRight') {
			setFocusableId([3, 7, 11, 15].includes(id) ? id : id + 1);
		} else if (key === 'ArrowLeft') {
			setFocusableId([0, 4, 8, 12].includes(id) ? id : id - 1);
		}
	}
	return { focusableId, moveFocusPosition };
}

export default Project2Visual;
