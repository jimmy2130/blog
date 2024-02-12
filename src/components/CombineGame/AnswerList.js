import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '@/constants';
import { TABLET_MAX_WIDTH } from './constants';

function AnswerList({ combo, finish }) {
	const answers = Array(12).fill('');
	for (let i = 0; i < combo.length; i++) {
		answers[i] = combo[i];
	}
	return (
		<Wrapper>
			<List>
				{answers.map((answer, index) => (
					<Answer key={index}>
						<FirstDigit>{answer[0]}</FirstDigit>
						<SecondDigit>{answer[1]}</SecondDigit>
						<ThirdDigit>{answer[2]}</ThirdDigit>
					</Answer>
				))}
			</List>
			{finish && <Stamp>成功</Stamp>}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	grid-area: answer-list;
`;

const List = styled.ul`
	border: 4px solid #a1a1a1;
	border-radius: 12px;

	padding: 4px 0px;

	list-style-type: none;

	height: 100%;
	aspect-ratio: 1 / 3;
	overflow-y: scroll;

	display: flex;
	flex-direction: column;

	@media ${QUERIES.tabletAndDown} {
		aspect-ratio: revert;
		max-width: ${TABLET_MAX_WIDTH}px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 16px;
		padding: 0px 4px;
		height: 124px;

		overflow-y: revert;
		overflow-x: scroll;

		flex-direction: row;
	}
`;

const Answer = styled.li`
	font-size: calc(19 / 16 * 1rem);
	border-bottom: solid #ddd;
	min-height: 40px;

	&:last-child {
		border-bottom: revert;
	}

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	@media ${QUERIES.tabletAndDown} {
		border-bottom: revert;
		border-right: solid #ddd;

		min-width: 40px;
		height: revert;

		flex-direction: column;

		&:last-child {
			border-right: revert;
		}
	}
`;

const FirstDigit = styled.span`
	@media ${QUERIES.tabletAndDown} {
		transform: translateY(8px);
	}
`;
const SecondDigit = styled.span``;
const ThirdDigit = styled.span`
	@media ${QUERIES.tabletAndDown} {
		transform: translateY(-8px);
	}
`;

const Stamp = styled.span`
	position: absolute;
	bottom: 40%;
	left: 0;
	right: 0;
	width: fit-content;
	margin-left: auto;
	margin-right: auto;
	padding: 4px 32px;

	font-size: calc(36 / 16 * 1rem);

	border: solid;
	transform: rotate(-15deg);
`;

export default AnswerList;
