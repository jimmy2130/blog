import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import {
	createPuzzle,
	checkSingleGuess,
	getCorrectAnswers,
	getRemainingAnswers,
} from './CombineGame.helpers';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Shape from './Shape';
import AnswerList from './AnswerList';
import UnstyledButton from '@/components/UnstyledButton';
import Icon from '@/components/Icon';
import { QUERIES } from '@/constants';
import { TABLET_MAX_WIDTH } from './constants';

// difficulty: easy, medium, hard
// gameStatus: unknown, success, fail
// requiredAnswerNum: 0, 1, 2, 3, 4, 5, 6, 8, 12

const QUESTIONS = [
	{ requiredAnswerNum: [1, 6], hideAnswer: false },
	{ requiredAnswerNum: [1, 6], hideAnswer: true },
];

function CombineGame({
	difficulty = 'hard',
	timeLimit = 10,
	questions = QUESTIONS,
}) {
	const [puzzle, setPuzzle] = React.useState([]);
	const [startGame, setStartGame] = React.useState(timeLimit === Infinity);
	const [countdown, setCountdown] = React.useState(3);
	const [startCountdown, setStartCountdown] = React.useState(false);
	const [correctAnswers, setCorrectAnswers] = React.useState([]);
	const [answers, setAnswers] = React.useState([]);
	const [remainingAnswers, setRemainingAnswers] = React.useState([]);
	const [guess, setGuess] = React.useState('');
	const [message, setMessage] = React.useState('');
	const [questionIndex, setQuestionIndex] = React.useState(0);
	const [time, setTime] = React.useState(timeLimit);
	const [gameStatus, setGameStatus] = React.useState('unknown');
	const [finishedTime, setFinishedTime] = React.useState({
		date: '',
		time: '',
	});

	const { requiredAnswerNum, hideAnswer = false } = questions[questionIndex];

	const requiredAnswerLowerBound =
		typeof requiredAnswerNum === 'number'
			? requiredAnswerNum
			: typeof requiredAnswerNum === 'undefined'
			? 1
			: requiredAnswerNum[0];
	const requiredAnswerHigherBound =
		typeof requiredAnswerNum === 'number'
			? requiredAnswerNum
			: typeof requiredAnswerNum === 'undefined'
			? 6
			: requiredAnswerNum[1];

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

	function moveToNextQuestion() {
		const newPuzzle = createPuzzle([
			requiredAnswerLowerBound,
			requiredAnswerHigherBound,
		]);
		setPuzzle(newPuzzle);
		setCorrectAnswers(getCorrectAnswers(newPuzzle));
		setAnswers([]);
		setRemainingAnswers([]);
		setMessage('');
		setGuess('');
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
				setRemainingAnswers(getRemainingAnswers(answers, correctAnswers));
				const [date, time] = format(new Date(), 'yyyy/MM/dd HH:mm:ss').split(
					' ',
				);
				setFinishedTime({ date, time });
			}
			return;
		}

		const nextAnswers = [...answers, guess];
		setAnswers(nextAnswers);
		setGuess('');
		setMessage('');

		if (difficulty === 'easy' && correctAnswers.length === nextAnswers.length) {
			setGameStatus('success');
			const [date, time] = format(new Date(), 'yyyy/MM/dd HH:mm:ss').split(' ');
			setFinishedTime({ date, time });
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
				setRemainingAnswers(getRemainingAnswers(answers, correctAnswers));
				const [date, time] = format(new Date(), 'yyyy/MM/dd HH:mm:ss').split(
					' ',
				);
				setFinishedTime({ date, time });
			}
			return;
		}

		if (questionIndex === questions.length - 1) {
			setGameStatus('success');
			const [date, time] = format(new Date(), 'yyyy/MM/dd HH:mm:ss').split(' ');
			setFinishedTime({ date, time });
		} else {
			moveToNextQuestion();
			setQuestionIndex(questionIndex + 1);
		}
	}

	function handleRestart(event) {
		event.preventDefault();
		moveToNextQuestion();
		setQuestionIndex(0);
		setStartGame(timeLimit === Infinity);
		setCountdown(3);
		setStartCountdown(false);
		setTime(timeLimit);
		setGameStatus('unknown');
		setFinishedTime({ date: '', time: '' });
	}

	React.useEffect(() => {
		const newPuzzle = createPuzzle([
			requiredAnswerLowerBound,
			requiredAnswerHigherBound,
		]);
		setPuzzle(newPuzzle);
		// console.log(getCorrectAnswers(newPuzzle));
		setCorrectAnswers(getCorrectAnswers(newPuzzle));
	}, [requiredAnswerLowerBound, requiredAnswerHigherBound]);

	React.useEffect(() => {
		if (time === Infinity) {
			return;
		}
		if (!startGame) {
			return;
		}
		if (gameStatus === 'success' || gameStatus === 'fail') {
			return;
		}
		if (time === 0) {
			setGameStatus('fail');
			setMessage('時間到');
			const [date, time] = format(new Date(), 'yyyy/MM/dd HH:mm:ss').split(' ');
			setFinishedTime({ date, time });
			return;
		}
		function handleTimeout() {
			setTime(time - 1);
		}

		let timeoutId = window.setTimeout(handleTimeout, 1000);

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [startGame, gameStatus, time]);

	React.useEffect(() => {
		if (startGame || !startCountdown) {
			return;
		}
		function handleTimeout() {
			if (countdown !== 1) {
				setCountdown(countdown - 1);
			} else {
				setStartGame(true);
			}
		}

		let timeoutId = window.setTimeout(handleTimeout, 1000);

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [startGame, startCountdown, countdown]);

	return (
		<MaxWidthWrapper maxWidth={700} breathingRoom={24}>
			<OuterWrapper>
				<InnerWrapper onSubmit={event => event.preventDefault()}>
					{startGame ? (
						<GameBoard>
							{puzzle.map((id, index) => (
								<Shape
									key={index}
									id={id}
									handleAddNum={handleAddNum}
									num={index + 1}
									isSelected={guess
										.split('')
										.map(el => Number(el))
										.includes(index + 1)}
									gameStatus={gameStatus}
								/>
							))}
							{questions.length !== 1 && (
								<Tag>
									第 {questionIndex + 1} 題，總共 {questions.length} 題
								</Tag>
							)}
							{time !== Infinity && <Timer>{time}</Timer>}
						</GameBoard>
					) : (
						<CountdownBoard>
							{!startCountdown ? (
								<StartButton onClick={() => setStartCountdown(true)}>
									開始
								</StartButton>
							) : (
								<CountdownNum>{countdown}</CountdownNum>
							)}
						</CountdownBoard>
					)}

					<AnswerList
						answers={answers}
						remainingAnswers={remainingAnswers}
						gameStatus={gameStatus}
						hideAnswer={hideAnswer}
						finishedTime={finishedTime}
					/>
					<ControlPanel>
						<ErrorMessage>{message}</ErrorMessage>
						{
							<FinishButton
								onClick={difficulty === 'easy' ? undefined : handleFinish}
								disabled={
									difficulty === 'easy'
										? true
										: gameStatus === 'success' || gameStatus === 'fail'
								}
							>
								{difficulty === 'easy'
									? `剩餘 ${correctAnswers.length - answers.length} 組`
									: '結'}
							</FinishButton>
						}
						<CombineButton
							onClick={handleGuess}
							disabled={gameStatus === 'success' || gameStatus === 'fail'}
						>
							合
						</CombineButton>
					</ControlPanel>
					<IconButton onClick={handleRestart}>
						<Icon id="refresh-ccw" color="#52525b" />
					</IconButton>
				</InnerWrapper>
			</OuterWrapper>
		</MaxWidthWrapper>
	);
}

const OuterWrapper = styled.div`
	border: 4px solid #ddd;
	border-radius: 8px;
	padding: 4px;
	margin-top: 40px;
	margin-bottom: 40px;
`;

const InnerWrapper = styled.form`
	display: grid;
	grid-template-areas:
		'board answer-list'
		'control-panel restart';
	grid-template-columns: 3fr 1fr;
	gap: 32px 16px;

	border: 4px dashed #ddd;

	padding: 84px 32px 32px 32px;

	@media ${QUERIES.tabletAndDown} {
		display: block;
	}

	@media ${QUERIES.phoneAndDown} {
		padding: 60px 8px 20px 8px;
	}
`;

const StyledButton = styled(UnstyledButton)`
	padding-top: 8px;
	padding-bottom: 8px;

	background: #e4e4e7;
	border-radius: 4px;
	font-size: calc(19 / 16 * 1rem);
	user-select: none;

	&:focus {
		outline-offset: -4px;
	}

	&:hover {
		background: #a1a1aa;
	}

	&:disabled {
		cursor: not-allowed;
	}
	&:disabled&:hover {
		background: #e4e4e7;
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

const StartButton = styled(StyledButton)`
	padding: 8px 24px;

	&:focus {
		outline-offset: -8px;
	}
`;

const CountdownNum = styled.span`
	font-size: calc(64 / 16 * 1rem);
	color: #52525b;
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
		margin-bottom: 44px;
	}
`;

const ErrorMessage = styled.p`
	min-height: 32px;
	font-size: calc(19 / 16 * 1rem);
	grid-area: message;
	text-align: center;
`;

const FinishButton = styled(StyledButton)`
	grid-area: finish-button;
`;

const CombineButton = styled(StyledButton)`
	grid-area: combine-button;
`;

const IconButton = styled(UnstyledButton)`
	grid-area: restart;
	justify-self: end;
	align-self: end;

	margin-right: 8px;
	margin-bottom: 8px;

	@media ${QUERIES.tabletAndDown} {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: revert;
	}
`;

export default CombineGame;
