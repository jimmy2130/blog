import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '@/constants';
import { TABLET_MAX_WIDTH } from './constants';
import { getRemainingAnswers, getDateAndTime } from './CombineGame.helpers';

const STATUS = {
	success: '成功',
	fail: '失敗',
};

function AnswerList({ answers, correctAnswers, hideAnswer, gameStatus, mode }) {
	const { date, time } =
		gameStatus === 'success' || gameStatus === 'fail' ? getDateAndTime() : {};
	const remainingAnswers =
		gameStatus === 'fail' ? getRemainingAnswers(answers, correctAnswers) : [];
	const totalAnswers =
		gameStatus === 'preparing' || gameStatus === 'countdown'
			? Array(12).fill('')
			: [
					...answers,
					...remainingAnswers,
					...Array(12 - answers.length - remainingAnswers.length).fill(''),
			  ];

	return (
		<Wrapper>
			<List>
				{totalAnswers.map((answer, index) => {
					let displayedAnswer = answer;
					if (answer !== '' && hideAnswer && gameStatus === 'running') {
						if (mode === 'normal' || (mode === 'missing' && index !== 0)) {
							displayedAnswer = '???';
						}
					}
					return (
						<Answer
							key={index}
							style={{ '--color': index < answers.length ? 'black' : 'red' }}
						>
							<FirstDigit>{displayedAnswer[0]}</FirstDigit>
							<SecondDigit>{displayedAnswer[1]}</SecondDigit>
							<ThirdDigit>{displayedAnswer[2]}</ThirdDigit>
						</Answer>
					);
				})}
			</List>
			{(gameStatus === 'success' || gameStatus === 'fail') && (
				<Stamp>
					<StampInnerRing>
						<Status>{STATUS[gameStatus]}</Status>
						<StampDate>{date}</StampDate>
						<StampTime>{time}</StampTime>
					</StampInnerRing>
				</Stamp>
			)}
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
	color: var(--color);
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

const Stamp = styled.div`
	position: absolute;
	bottom: 5%;
	left: -7.5%;
	width: 115%;
	aspect-ratio: 1 / 1;
	padding: 2px;

	border: solid 4px #dc2626;
	border-radius: 50%;
	transform: rotate(-20deg);

	@media ${QUERIES.tabletAndDown} {
		left: revert;
		right: 15%;
		bottom: -15%;
		height: 130%;
		width: revert;
	}

	@media ${QUERIES.phoneAndDown} {
		right: 5%;
		bottom: -5%;
		height: 110%;
	}
`;

const StampInnerRing = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	place-content: center;
	position: relative;

	border: solid 2px #dc2626;
	border-radius: 50%;

	color: #dc2626;
`;

const Status = styled.div`
	text-align: center;
	font-size: calc(36 / 16 * 1rem);
	font-weight: 700;

	transform: translateY(10px);

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(24 / 16 * 1rem);
	}
`;

const SubInfo = styled.div`
	text-align: center;
	font-size: calc(16 / 16 * 1rem);
	font-weight: 400;
`;

const StampDate = styled(SubInfo)`
	transform: translateY(6px);
`;
const StampTime = styled(SubInfo)``;

export default AnswerList;
