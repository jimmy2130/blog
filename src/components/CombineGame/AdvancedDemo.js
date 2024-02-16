import React from 'react';
import styled from 'styled-components';
import FullBleed from '@/components/FullBleed';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import CoverScreen from './CoverScreen';
import Icon from '@/components/Icon';
import UnstyledButton from '@/components/UnstyledButton';
import Shape from './Shape';
import Select from './Select';
import Button from './Button';
import IconButton from './IconButton';
import { QUERIES } from '@/constants';
import {
	encode,
	createPuzzleForAdvancedDemo,
	checkSingleGuess,
} from './CombineGame.helpers';
import { range, sampleOne } from '@/utils';

// gameStatus: preparing, running, end

const LABELS = ['圖案形狀', '圖案顏色', '圖案背景色'];
const SELECTORS = [
	['圓形', '正方形', '三角形'],
	['紅色', '黃色', '藍色'],
	['白色', '灰色', '黑色'],
];

function AdvancedDemo({ questionNum = 5 }) {
	const [gameStatus, setGameStatus] = React.useState('preparing');
	const [questions, setQuestions] = React.useState(
		Array(questionNum).fill({ question: [], correctAnswer: '' }),
	);
	const [guesses, setGuesses] = React.useState(Array(questionNum).fill(''));
	const [shapeId, setShapeId] = React.useState('000');
	const [questionIndex, setQuestionIndex] = React.useState(0);
	const [revealCorrectAnswer, setRevealCorrectAnswer] = React.useState(false);

	const { question, correctAnswer } = questions[questionIndex];

	const isPlayerCorrect = correctAnswer === guesses[questionIndex];
	const correctAnswerNum = guesses.filter(
		(guess, index) => guess === questions[index].correctAnswer,
	).length;
	const score = Math.round((correctAnswerNum / questions.length) * 100);
	const errorMessage =
		guesses[questionIndex] === ''
			? ''
			: checkSingleGuess([...question, guesses[questionIndex]]).message;

	React.useEffect(() => {
		const newQuestions = createPuzzleForAdvancedDemo(questionNum);
		setQuestions(newQuestions);
		setShapeId(encode(sampleOne(range(27))));
	}, [questionNum]);

	function handleToggle() {
		if (shapeId === guesses[questionIndex]) {
			setShapeId(questions[questionIndex].correctAnswer);
		} else {
			setShapeId(guesses[questionIndex]);
		}
	}

	function editShape(index, newValue) {
		const nextShapeId = shapeId.split('');
		nextShapeId[index] = SELECTORS[index].indexOf(newValue);
		setShapeId(nextShapeId.join(''));
	}

	function handleRespond() {
		const nextGuesses = [...guesses];
		nextGuesses[questionIndex] = shapeId;
		setGuesses(nextGuesses);
	}

	function handleMoveToNextQuestion() {
		const nextQuestionIndex = questionIndex + 1;
		setQuestionIndex(nextQuestionIndex);
		if (guesses[nextQuestionIndex] !== '') {
			setShapeId(guesses[nextQuestionIndex]);
		}
	}

	function handleMoveToPrevQuestion() {
		const nextQuestionIndex = questionIndex - 1;
		setQuestionIndex(nextQuestionIndex);
		if (guesses[nextQuestionIndex] !== '') {
			setShapeId(guesses[nextQuestionIndex]);
		}
	}

	function handleStartGame() {
		setGameStatus('running');
	}

	function handleEndGame() {
		setGameStatus('end');
	}

	function handleRestartGame() {
		setGameStatus('running');
		setGuesses(Array(questions.length).fill(''));
		setQuestionIndex(0);
		const newQuestions = createPuzzleForAdvancedDemo(questionNum);
		setQuestions(newQuestions);
	}

	return (
		<FullBleed>
			<MaxWidthWrapper maxWidth={700} breathingRoom={24}>
				<Wrapper onSubmit={event => event.preventDefault()}>
					{gameStatus === 'preparing' ? (
						<CoverScreen
							title="中場遊戲"
							subtitle="換個玩法，讓大腦舒緩一下"
							buttonText="開始"
							handleClick={handleStartGame}
						></CoverScreen>
					) : gameStatus === 'end' ? (
						<CoverScreen
							title={`${score}%`}
							subtitle={
								questionNum === correctAnswerNum
									? '恭喜你，全對！'
									: `在 ${questionNum} 題中，你答對了 ${correctAnswerNum} 題`
							}
							buttonText="再玩一次"
							handleClick={handleRestartGame}
						></CoverScreen>
					) : (
						<MaxWidthWrapper maxWidth={440} breathingRoom={16}>
							<NavigationBar>
								<Indicator>{`第 ${questionIndex + 1} 題，總共 ${
									questions.length
								} 題`}</Indicator>
								<IconGroup>
									<IconButton
										disabled={questionIndex === 0}
										onClick={handleMoveToPrevQuestion}
									>
										<Icon
											id="chevron-left"
											color={questionIndex === 0 ? '#a1a1aa' : '#34343d'}
										/>
									</IconButton>
									<IconButton
										disabled={
											questionIndex === questions.length - 1 ||
											guesses[questionIndex] === ''
										}
										onClick={handleMoveToNextQuestion}
									>
										<Icon
											id="chevron-right"
											color={
												questionIndex === questions.length - 1 ||
												guesses[questionIndex] === ''
													? '#a1a1aa'
													: '#34343d'
											}
										/>
									</IconButton>
								</IconGroup>
							</NavigationBar>
							<ShapeWrapper>
								{[...question, '000'].map((id, index) => {
									return <Shape key={index} id={id} isHidden={index === 2} />;
								})}
							</ShapeWrapper>
							<Question>請問加入什麼圖案可以滿足遊戲規則？</Question>
							<AnswerBlock>
								<ShapeViewer>
									<Shape id={shapeId} />
								</ShapeViewer>
								<Spacer />
								<ShapeEditor>
									{LABELS.map((label, index) => (
										<ControllersWrapper key={index}>
											<Label>{label}</Label>
											<Select
												value={SELECTORS[index][shapeId[index]]}
												onChange={event => editShape(index, event.target.value)}
												disabled={guesses[questionIndex] !== ''}
											>
												{SELECTORS[index].map((option, optionIndex) => (
													<option key={optionIndex} value={option}>
														{option}
													</option>
												))}
											</Select>
										</ControllersWrapper>
									))}
								</ShapeEditor>
							</AnswerBlock>
							{guesses[questionIndex] === '' && (
								<AnswerButton variant="primary" onClick={handleRespond}>
									作答
								</AnswerButton>
							)}
							{guesses[questionIndex] !== '' && (
								<Explanation>
									{isPlayerCorrect
										? `恭喜你，答對了。`
										: `抱歉，你答錯了。${errorMessage}。`}
								</Explanation>
							)}
							<ButtonWrapper>
								{guesses[questionIndex] !== '' &&
									guesses[questionIndex] !==
										questions[questionIndex].correctAnswer && (
										<ToggleButton onClick={handleToggle}>
											<LeftText
												style={{
													'--font-weight':
														shapeId === guesses[questionIndex] ? 700 : 400,
												}}
											>
												我的答案
											</LeftText>
											<RightText
												style={{
													'--font-weight':
														shapeId === questions[questionIndex].correctAnswer
															? 700
															: 400,
												}}
											>
												正確答案
											</RightText>
										</ToggleButton>
									)}

								{guesses[questionIndex] !== '' && (
									<NextButton
										variant="primary"
										onClick={
											questionIndex !== questions.length - 1
												? handleMoveToNextQuestion
												: handleEndGame
										}
									>
										{questionIndex !== questions.length - 1 ? '下一題' : '結束'}
									</NextButton>
								)}
							</ButtonWrapper>
						</MaxWidthWrapper>
					)}
				</Wrapper>
			</MaxWidthWrapper>
		</FullBleed>
	);
}

const Wrapper = styled.form`
	border: 4px solid #52525b;
	border-radius: 8px;
	padding-top: 40px;
	padding-bottom: 40px;

	font-size: calc(19 / 16 * 1rem);
	color: #34343d;

	@media ${QUERIES.phoneAndDown} {
		padding-top: 16px;
		padding-bottom: 32px;
	}
`;

const NavigationBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Indicator = styled.div``;

const IconGroup = styled.div`
	display: flex;
`;

const ShapeWrapper = styled.div`
	display: flex;
	gap: 8px;

	margin-block: 32px;

	@media ${QUERIES.phoneAndDown} {
		margin-block: 24px;
	}
`;

const Question = styled.div`
	text-align: center;
	margin-bottom: 32px;

	@media ${QUERIES.phoneAndDown} {
		margin-bottom: 24px;
	}
`;

const AnswerBlock = styled.div`
	display: flex;
	gap: 8px;

	margin-bottom: 48px;

	@media ${QUERIES.phoneAndDown} {
		flex-direction: column;
		margin-bottom: 24px;
	}
`;

const ShapeViewer = styled.div`
	flex: 2;

	display: flex;
	align-items: center;

	@media ${QUERIES.phoneAndDown} {
		max-width: 50%;
		margin-inline: auto;
	}
`;

const Spacer = styled.div`
	flex: 1;

	@media ${QUERIES.phoneAndDown} {
		flex-basis: 8px;
	}
`;

const ShapeEditor = styled.div`
	flex: 3;

	display: flex;
	flex-direction: column;
	gap: 16px;

	@media ${QUERIES.phoneAndDown} {
		display: block;
		width: 100%;
		max-width: 240px;
		margin-inline: auto;
	}
`;

const ControllersWrapper = styled.div`
	margin-bottom: 16px;

	&:last-of-type {
		margin-bottom: 0;
	}
`;

const Label = styled.span`
	display: block;
	margin-bottom: 4px;
`;

const AnswerButton = styled(Button)`
	margin-inline: auto;
`;

const Explanation = styled.div`
	text-align: center;
	margin-bottom: 48px;

	@media ${QUERIES.phoneAndDown} {
		margin-bottom: 24px;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 8px;

	@media ${QUERIES.phoneAndDown} {
		flex-direction: column;
		justify-content: revert;
		gap: 16px;
	}
`;

const ToggleButton = styled(Button)`
	margin-inline: auto;
	font-weight: 700;
`;

const ButtonText = styled.span`
	font-weight: var(--font-weight);
	--breathing-room: 8px;
`;

const LeftText = styled(ButtonText)`
	padding-right: var(--breathing-room);
	border-right: 2px solid #34343d;
`;
const RightText = styled(ButtonText)`
	padding-left: var(--breathing-room);
`;

const NextButton = styled(Button)`
	margin-inline: auto;
`;

export default AdvancedDemo;
