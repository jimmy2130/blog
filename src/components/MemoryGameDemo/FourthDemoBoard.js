import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import { QUERIES } from '../../constants';
import { range } from '../../utils';
import { getEdge } from './Demo.helpers';

const MODE = {
	rove: 'Rove Tab Index',
	normal: '正常模式',
};
const SIZE = 4;
const { rightEdge, leftEdge, bottomEdge, topEdge } = getEdge(SIZE);

function FourthDemoBoard({ mode }, topLeftAnchorRef) {
	const pieceRef = React.useRef;

	function handleClick(event) {
		event.preventDefault();
	}

	function getMap() {
		if (!pieceRef.current) {
			pieceRef.current = new Map();
		}
		return pieceRef.current;
	}

	function setUpNode(node, index) {
		const map = getMap();
		if (node) {
			map.set(index, node);
		} else {
			map.delete(index);
		}
	}

	function handleKeyDown(event, mode) {
		if (mode === 'normal') {
			return;
		}
		if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
			event.preventDefault();
		}
	}

	function handleKeyUp(event, id, mode) {
		if (mode === 'normal') {
			return;
		}
		const map = getMap();
		if (event.key === 'ArrowRight') {
			if (!rightEdge.includes(id)) {
				let node = map.get(id + 1);
				node.focus();
			}
		} else if (event.key === 'ArrowLeft') {
			if (!leftEdge.includes(id)) {
				let node = map.get(id - 1);
				node.focus();
			}
		} else if (event.key === 'ArrowDown') {
			if (!bottomEdge.includes(id)) {
				let node = map.get(id + SIZE);
				node.focus();
			}
		} else if (event.key === 'ArrowUp') {
			if (!topEdge.includes(id)) {
				let node = map.get(id - SIZE);
				node.focus();
			}
		}
	}

	return (
		<Wrapper>
			<Tag>{MODE[mode]}</Tag>
			<TopLeftAnchor onClick={handleClick} ref={topLeftAnchorRef}>
				<CustomIcon id="anchor" size="40" color="#304859" strokeWidth="3" />
			</TopLeftAnchor>
			<PieceWrapper>
				{range(16).map(index => (
					<DemoPiece
						key={index}
						onClick={handleClick}
						ref={node => setUpNode(node, index)}
						tabIndex={mode === 'normal' ? '0' : index === 0 ? '0' : '-1'}
						onKeyUp={event => handleKeyUp(event, index, mode)}
						onKeyDown={event => handleKeyDown(event, mode)}
					/>
				))}
			</PieceWrapper>
			<BottomRightAnchor onClick={handleClick}>
				<CustomIcon id="anchor" size="40" color="#304859" strokeWidth="3" />
			</BottomRightAnchor>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	background: var(--color-gray-100);
	border-radius: 32px;
	padding: 96px;

	display: grid;
	place-content: center;

	@media ${QUERIES.phoneAndDown} {
		padding: 64px;
	}
`;

const Tag = styled.div`
	position: absolute;
	top: 0;
	right: 32px;
	padding: 8px 24px;
	background: #304859;
	color: var(--color-gray-10);
	font-size: calc(16 / 16 * 1rem);
	font-weight: 700;
	border-radius: 8px;
	transform: translateY(-40%);
`;

const PieceWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 16px;

	@media ${QUERIES.phoneAndDown} {
		gap: 8px;
	}
`;

const DemoPiece = styled(UnstyledButton)`
	background: #304859;
	border-radius: 50%;
	width: 48px;
	height: 48px;

	&:disabled {
		background: var(--color-gray-200);
		border: 2px solid var(--color-gray-200);
		cursor: not-allowed;
	}

	@media ${QUERIES.phoneAndDown} {
		width: 30px;
		height: 30px;
	}
`;

const Anchor = styled(UnstyledButton)`
	position: absolute;
`;

const TopLeftAnchor = styled(Anchor)`
	top: 40px;
	left: 40px;

	@media ${QUERIES.phoneAndDown} {
		top: 20px;
		left: 20px;
	}
`;

const BottomRightAnchor = styled(Anchor)`
	bottom: 40px;
	right: 40px;

	@media ${QUERIES.phoneAndDown} {
		bottom: 20px;
		right: 20px;
	}
`;

const CustomIcon = styled(Icon)`
	@media ${QUERIES.phoneAndDown} {
		transform: scale(0.7);
	}
`;

export default React.forwardRef(FourthDemoBoard);
