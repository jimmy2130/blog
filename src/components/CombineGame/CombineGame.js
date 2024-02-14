import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import {
	getAnsBoundary,
	createPuzzle,
	checkSingleGuess,
	getCorrectAnswers,
} from './CombineGame.helpers';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Button from './Button';
import IconButton from './IconButton';
import ShapeButton from './ShapeButton';
import AnswerList from './AnswerList';
import UnstyledButton from '@/components/UnstyledButton';
import Icon from '@/components/Icon';
import { QUERIES } from '@/constants';
import { TABLET_MAX_WIDTH } from './constants';

// difficulty: easy, medium, hard
// gameStatus: preparing, countdown, running, success, fail
// answerNum: 0, 1, 2, 3, 4, 5, 6, 8, 12
// mode: normal, missing

const QUESTIONS = [
	{ answerNum: [6, 6], hideAnswer: false, mode: 'missing' },
	// { answerNum: [1, 6], hideAnswer: true },
];

function CombineGame({
	handleReveal,
	difficulty = 'hard',
	timeLimit = Infinity,
	questions = QUESTIONS,
}) {
	const [puzzle, setPuzzle] = React.useState([]);
	const [missingPuzzleIndex, setMissingPuzzleIndex] = React.useState(undefined);
	const [countdown, setCountdown] = React.useState(3);
	const [correctAnswers, setCorrectAnswers] = React.useState([]);
	const [answers, setAnswers] = React.useState([]);
	const [guess, setGuess] = React.useState('');
	const [message, setMessage] = React.useState('');
	const [questionIndex, setQuestionIndex] = React.useState(0);
	const [time, setTime] = React.useState(timeLimit);
	const [gameStatus, setGameStatus] = React.useState(
		timeLimit === Infinity ? 'running' : 'preparing',
	);

	const {
		answerNum,
		hideAnswer = false,
		mode = 'normal',
	} = questions[questionIndex];

	const { answerLBound, answerHBound } = getAnsBoundary(answerNum, mode);

	const handleAddNum = React.useCallback(function (num) {
		setGuess(g => {
			if (g.includes(num.toString())) {
				return g
					.split('')
					.filter(el => el !== num.toString())
					.join('');
			} else {
				return `${g}${num}`;
			}
		});
	}, []);

	const handleGameStart = React.useCallback(
		function () {
			const { puzzle, correctAnswers, clue, missingPuzzleIndex } = createPuzzle(
				[answerLBound, answerHBound],
				mode,
			);
			setPuzzle(puzzle);
			setMissingPuzzleIndex(missingPuzzleIndex);
			setCorrectAnswers(correctAnswers);
			setAnswers(clue ? [clue] : []);
		},
		[answerHBound, answerLBound, mode],
	);

	function moveToNextQuestion() {
		handleGameStart();
		setMessage('');
		setGuess('');
	}

	function handleGameSuccess() {
		setGameStatus('success');
		if (handleReveal) {
			handleReveal();
		}
	}

	function handleGuess(event) {
		event.preventDefault();

		if (guess.length !== 3) {
			setMessage('請選 3 個圖案');
			return;
		}

		const { isCorrect, message } = checkSingleGuess(guess, puzzle, answers);

		if (!isCorrect) {
			setMessage(message);
			if (difficulty === 'hard') {
				setGameStatus('fail');
			}
			return;
		}

		const nextAnswers = [...answers, guess];
		setAnswers(nextAnswers);
		setGuess('');
		setMessage('');

		if (difficulty === 'easy' && correctAnswers.length === nextAnswers.length) {
			handleGameSuccess();
		}
	}

	function handleFinish(event) {
		event.preventDefault();

		if (guess.length !== 0) {
			setMessage('喊結束時不可選擇圖案');
			return;
		}

		const isFinished = answers.length === correctAnswers.length;

		if (!isFinished) {
			setMessage('還有組合沒被找到');
			if (difficulty === 'hard') {
				setGameStatus('fail');
			}
			return;
		}

		if (questionIndex === questions.length - 1) {
			handleGameSuccess();
		} else {
			moveToNextQuestion();
			setQuestionIndex(questionIndex + 1);
		}
	}

	function handleRestart(event) {
		event.preventDefault();
		moveToNextQuestion();
		setQuestionIndex(0);
		setCountdown(3);
		setTime(timeLimit);
		setGameStatus(timeLimit === Infinity ? 'running' : 'preparing');
	}

	React.useEffect(() => {
		handleGameStart();
	}, [handleGameStart]);

	React.useEffect(() => {
		if (time === Infinity || gameStatus !== 'running') {
			return;
		}
		if (time === 0) {
			setMessage('時間到');
			setGameStatus('fail');
			return;
		}
		function handleTimeout() {
			setTime(time - 1);
		}

		let timeoutId = window.setTimeout(handleTimeout, 1000);

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [gameStatus, time]);

	React.useEffect(() => {
		if (gameStatus !== 'countdown') {
			return;
		}
		function handleTimeout() {
			if (countdown !== 1) {
				setCountdown(countdown - 1);
			} else {
				setGameStatus('running');
			}
		}

		let timeoutId = window.setTimeout(handleTimeout, 1000);

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [gameStatus, countdown]);

	return (
		<MaxWidthWrapper maxWidth={700} breathingRoom={24}>
			<OuterWrapper>
				<InnerWrapper onSubmit={event => event.preventDefault()}>
					{['running', 'success', 'fail'].includes(gameStatus) ? (
						<GameBoard>
							{puzzle.map((id, index) => {
								const isHidden =
									index === missingPuzzleIndex &&
									gameStatus !== 'success' &&
									gameStatus !== 'fail';
								return (
									<ShapeButton
										key={index}
										id={id}
										handleAddNum={handleAddNum}
										num={index + 1}
										isSelected={guess
											.split('')
											.map(el => Number(el))
											.includes(index + 1)}
										gameStatus={gameStatus}
										isHidden={isHidden}
									/>
								);
							})}
							{questions.length !== 1 && (
								<Tag>
									第 {questionIndex + 1} 題，總共 {questions.length} 題
								</Tag>
							)}
							{time !== Infinity && <Timer>{time}</Timer>}
						</GameBoard>
					) : (
						<CountdownBoard>
							{gameStatus === 'preparing' ? (
								<StartButton onClick={() => setGameStatus('countdown')}>
									開始作答
								</StartButton>
							) : (
								<CountdownNum>{countdown}</CountdownNum>
							)}
						</CountdownBoard>
					)}

					<AnswerList
						answers={answers}
						correctAnswers={correctAnswers}
						gameStatus={gameStatus}
						hideAnswer={hideAnswer}
						mode={mode}
					/>
					<ControlPanel>
						<ErrorMessage>{message}</ErrorMessage>
						{
							<FinishButton
								onClick={difficulty === 'easy' ? undefined : handleFinish}
								disabled={
									difficulty === 'easy' ? true : gameStatus !== 'running'
								}
							>
								{difficulty === 'easy'
									? `剩餘 ${correctAnswers.length - answers.length} 組`
									: '結'}
							</FinishButton>
						}
						<CombineButton
							onClick={handleGuess}
							disabled={gameStatus !== 'running'}
						>
							合
						</CombineButton>
					</ControlPanel>
					<RestartButton onClick={handleRestart}>
						<Icon id="refresh-ccw" color="#34343d" />
					</RestartButton>
				</InnerWrapper>
			</OuterWrapper>
		</MaxWidthWrapper>
	);
}

const OuterWrapper = styled.div`
	border: 4px solid #e4e4e7;
	border-radius: 8px;
	padding: 4px;
	margin-top: 40px;
	margin-bottom: 80px;

	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);
`;

const InnerWrapper = styled.form`
	display: grid;
	grid-template-areas:
		'board answer-list'
		'control-panel restart';
	grid-template-columns: 3fr 1fr;
	gap: 32px 16px;

	border: 4px dashed #e4e4e7;

	padding: 84px 32px 32px 32px;

	@media ${QUERIES.tabletAndDown} {
		display: block;
	}

	@media ${QUERIES.phoneAndDown} {
		padding: 60px 8px 20px 8px;
	}
`;

const Board = styled.div`
	grid-area: board;
	aspect-ratio: 1 / 1;

	display: grid;

	@media ${QUERIES.tabletAndDown} {
		max-width: ${TABLET_MAX_WIDTH}px;
		margin: 0px auto 16px auto;
	}
`;

const CountdownBoard = styled(Board)`
	place-content: center;
	border: 4px solid #e4e4e7;
	border-radius: 12px;
`;

const StartButton = styled(Button)`
	padding: 8px 24px;

	background: #34343d;
	color: white;

	&:hover {
		background: #52525b;
	}

	&:focus {
		outline-offset: -8px;
	}
`;

const CountdownNum = styled.span`
	font-size: calc(64 / 16 * 1rem);
	color: #34343d;
`;

const GameBoard = styled(Board)`
	position: relative;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 8px;
`;

const Eyebrow = styled.span`
	position: absolute;
	display: block;
	transform: translateY(-100%);
	padding: 8px 24px;
	font-size: calc(19 / 16 * 1rem);
`;

const Tag = styled(Eyebrow)`
	top: 0;
	left: 0;
`;

const Timer = styled(Eyebrow)`
	top: 0;
	right: 0;
`;

const ControlPanel = styled.div`
	grid-area: control-panel;

	display: grid;
	grid-template-areas:
		'message message'
		'finish-button combine-button';
	grid-template-columns: 1fr 1fr;

	gap: 8px 16px;

	@media ${QUERIES.tabletAndDown} {
		max-width: ${TABLET_MAX_WIDTH}px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 40px;
	}
`;

const ErrorMessage = styled.p`
	min-height: 32px;
	grid-area: message;
	text-align: center;
`;

const FinishButton = styled(Button)`
	grid-area: finish-button;
`;

const CombineButton = styled(Button)`
	grid-area: combine-button;
`;

const RestartButton = styled(IconButton)`
	grid-area: restart;
	justify-self: end;
	align-self: end;

	@media ${QUERIES.tabletAndDown} {
		margin-inline: auto;
	}
`;

export default CombineGame;
