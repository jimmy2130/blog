import React from 'react';
import styled from 'styled-components';

const KEYS = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];

function CircleElement({
	cx,
	cy,
	id,
	focusableId,
	moveFocusPosition,
	openedCircleNum: openedNum,
	increaseOpenedCircleNum: increaseOpenedNum,
}) {
	const { isOpen, openCircle } = useFlipTheCircle(openedNum, increaseOpenedNum);
	const { ref, tabIndex } = useFocus(id, focusableId);

	function handleKeyDown(event) {
		if (event.code === 'Enter') {
			event.stopPropagation();
			openCircle();
		} else if (KEYS.includes(event.code)) {
			event.preventDefault();
			moveFocusPosition(event.code);
		}
	}

	return (
		<Circle
			tabIndex={tabIndex}
			cx={cx}
			cy={cy}
			r="28.655"
			fill="var(--fill)"
			onClick={openCircle}
			onKeyDown={handleKeyDown}
			ref={ref}
			style={{
				'--fill': isOpen
					? 'var(--color-primary-200)'
					: 'var(--color-primary-500)',
				'--hover': isOpen
					? 'var(--color-primary-200)'
					: 'var(--color-primary-400)',
			}}
		/>
	);
}

const Circle = styled.circle`
	cursor: pointer;
	&:focus {
		outline-offset: 2px;
	}
	&:focus:not(:focus-visible) {
		outline: none;
	}
	&:hover {
		fill: var(--hover);
	}
`;

function useFlipTheCircle(openedCircleNum, increaseOpenedCircleNum) {
	const [isOpen, setIsOpen] = React.useState(false);

	React.useEffect(() => {
		if (openedCircleNum === 0) return;
		if (openedCircleNum % 2 === 1) return;
		const timeoutId = window.setTimeout(() => setIsOpen(false), 600);
		return () => window.clearTimeout(timeoutId);
	}, [openedCircleNum]);

	function openCircle() {
		if (!isOpen) {
			setIsOpen(true);
			increaseOpenedCircleNum();
		}
	}

	return { isOpen, openCircle };
}

function useFocus(id, focusableId) {
	const circleRef = React.useRef();

	React.useEffect(() => {
		if (id === focusableId) {
			circleRef.current.focus();
		}
	}, [id, focusableId]);

	let tabIndex = 0;
	if (focusableId === -1) {
		tabIndex = id === 0 ? 0 : -1;
	} else {
		tabIndex = id === focusableId ? 0 : -1;
	}
	return { ref: circleRef, tabIndex };
}

export default CircleElement;
