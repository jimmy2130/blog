import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants';

function CodeComparison({
	left,
	right,
	leftTag = 'Text',
	rightTag = 'JavaScript',
	leftStyle,
	rightStyle,
}) {
	return (
		<Wrapper>
			<LeftAnchor>
				<LeftBlock style={leftStyle}>
					<LeftTag>{leftTag}</LeftTag>
					{left}
				</LeftBlock>
			</LeftAnchor>
			<Border />
			<RightAnchor>
				<RightBlock style={rightStyle}>
					<RightTag>{rightTag}</RightTag>
					{right}
				</RightBlock>
			</RightAnchor>
		</Wrapper>
	);
}

const Wrapper = styled.pre`
	display: flex;
	min-height: 300px;
	margin-top: 80px;
	margin-bottom: 80px;

	@media ${QUERIES.tabletAndDown} {
		flex-direction: column;
	}

	@media ${QUERIES.phoneAndDown} {
		margin-top: 24px;
		margin-bottom: 24px;
	}
`;

const Anchor = styled.div`
	flex: 1;
	position: relative;
	background: var(--color-gray-100);
`;

const LeftAnchor = styled(Anchor)`
	border-top-left-radius: 32px;
	border-bottom-left-radius: 32px;

	@media ${QUERIES.tabletAndDown} {
		border-top-right-radius: 32px;
		border-bottom-left-radius: revert;
	}
`;

const RightAnchor = styled(Anchor)`
	border-top-right-radius: 32px;
	border-bottom-right-radius: 32px;

	@media ${QUERIES.tabletAndDown} {
		border-bottom-left-radius: 32px;
		border-top-right-radius: revert;
	}
`;

const Block = styled.div`
	padding: 48px 32px 32px 32px;
	font-family: monospace;
	font-size: calc(16 / 16 * 1rem);
	white-space: pre;
	overflow-x: scroll;

	@media ${QUERIES.phoneAndDown} {
		padding: 36px 24px 24px 24px;
	}
`;

const LeftBlock = styled(Block)`
	height: 100%;
	@media ${QUERIES.tabletAndDown} {
		padding-bottom: 48px;
	}

	@media ${QUERIES.phoneAndDown} {
		padding-bottom: 36px;
	}
`;

const RightBlock = styled(Block)`
	height: 100%;
`;

const Tag = styled.div`
	position: absolute;
	padding: 4px 12px;
	background: var(--color-gray-900);
	color: var(--color-gray-100);
	border-radius: 4px;
	display: grid;
	place-content: center;
	font-family: 'Roboto';
`;

const LeftTag = styled(Tag)`
	top: 0;
	left: 0;
	transform: translate(40px, -50%);
`;

const RightTag = styled(Tag)`
	top: 0;
	right: 0;
	transform: translate(-40px, -50%);

	@media ${QUERIES.tabletAndDown} {
		right: revert;
		left: 0;
		transform: translate(40px, -50%);
	}
`;

const Border = styled.div`
	background: var(--color-gray-400);
	min-width: 2px;

	@media ${QUERIES.tabletAndDown} {
		min-width: revert;
		min-height: 2px;
	}
`;

export default CodeComparison;
