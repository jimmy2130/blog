import React from 'react';
import styled from 'styled-components';
import FullBleed from '@/components/FullBleed';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import CoverScreen from './CoverScreen';
import Icon from '@/components/Icon';
import UnstyledButton from '@/components/UnstyledButton';
import Shape from './Shape';
import Button from './Button';
import IconButton from './IconButton';
import { QUERIES } from '@/constants';

// gameStatus: preparing, running, end

function IntroductionDemo({ questions, children }) {
	const [gameStatus, setGameStatus] = React.useState('preparing');
	const [guesses, setGuesses] = React.useState(
		Array(questions.length).fill(null),
	);
	const [questionIndex, setQuestionIndex] = React.useState(0);

	const { question, correctAnswer } = questions[questionIndex];

	const isPlayerCorrect = correctAnswer === guesses[questionIndex];
	const correctAnswerNum = guesses.filter(
		(guess, index) => guess === questions[index].correctAnswer,
	).length;
	const score = Math.round((correctAnswerNum / questions.length) * 100);

	function handleRespond(guess) {
		const nextGuesses = [...guesses];
		nextGuesses[questionIndex] = guess;
		setGuesses(nextGuesses);
	}

	function handleMoveToNextQuestion() {
		setQuestionIndex(questionIndex + 1);
	}

	function handleMoveToPrevQuestion() {
		setQuestionIndex(questionIndex - 1);
	}

	function handleStartGame() {
		setGameStatus('running');
	}

	function handleEndGame() {
		setGameStatus('end');
	}

	function handleRestartGame() {
		setGameStatus('running');
		setGuesses(Array(questions.length).fill(null));
		setQuestionIndex(0);
	}

	return (
		<FullBleed>
			<MaxWidthWrapper maxWidth={700} breathingRoom={24}>
				<Wrapper onSubmit={event => event.preventDefault()}>
					{gameStatus === 'preparing' ? (
						<CoverScreen
							title="開場遊戲"
							subtitle="讓我們玩個簡單的遊戲，來進一步理解規則"
							buttonText="開始"
							handleClick={handleStartGame}
						></CoverScreen>
					) : gameStatus === 'end' ? (
						<CoverScreen
							title={`${score}%`}
							subtitle={`在 5 題中，你答對了 ${correctAnswerNum} 題`}
							buttonText="再玩一次"
							handleClick={handleRestartGame}
						></CoverScreen>
					) : (
						<>
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
											guesses[questionIndex] === null
										}
										onClick={handleMoveToNextQuestion}
									>
										<Icon
											id="chevron-right"
											color={
												questionIndex === questions.length - 1 ||
												guesses[questionIndex] === null
													? '#a1a1aa'
													: '#34343d'
											}
										/>
									</IconButton>
								</IconGroup>
							</NavigationBar>

							<ShapeWrapper>
								{question.map(id => (
									<Shape key={id} id={id} />
								))}
							</ShapeWrapper>
							<Question>請問這三張圖滿足遊戲規則嗎？</Question>
							<ButtonWrapper>
								<AnswerButton
									disabled={guesses[questionIndex] !== null}
									onClick={() => handleRespond(true)}
									style={{
										'--border-color':
											guesses[questionIndex] === null
												? '#e4e4e7'
												: correctAnswer === true
												? '#1ac23b'
												: '#dc2626',
									}}
								>
									是
								</AnswerButton>
								<AnswerButton
									disabled={guesses[questionIndex] !== null}
									onClick={() => handleRespond(false)}
									style={{
										'--border-color':
											guesses[questionIndex] === null
												? '#e4e4e7'
												: correctAnswer === false
												? '#1ac23b'
												: '#dc2626',
									}}
								>
									否
								</AnswerButton>
							</ButtonWrapper>
							<Explanation>
								{guesses[questionIndex] !== null && (
									<>
										<ExplanationText>
											{isPlayerCorrect
												? '恭喜你，答對了。'
												: '抱歉，你答錯了。'}
										</ExplanationText>
										{children[questionIndex]}
									</>
								)}
							</Explanation>

							{guesses[questionIndex] !== null && (
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
						</>
					)}
				</Wrapper>
			</MaxWidthWrapper>
		</FullBleed>
	);
}

const Wrapper = styled.form`
	--max-width: 440px;

	border: 4px solid #52525b;
	border-radius: 8px;
	padding: 40px;

	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);

	@media ${QUERIES.phoneAndDown} {
		padding: 16px;
	}
`;

const NavigationBar = styled.div`
	max-width: var(--max-width);
	margin-inline: auto;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Indicator = styled.div``;

const ShapeWrapper = styled.div`
	display: flex;
	gap: 8px;

	max-width: var(--max-width);
	margin: 32px auto;

	@media ${QUERIES.phoneAndDown} {
		margin: 24px auto;
	}
`;

const Question = styled.div`
	text-align: center;
	margin-bottom: 32px;

	@media ${QUERIES.phoneAndDown} {
		margin-bottom: 24px;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	gap: 16px;
	max-width: var(--max-width);
	margin-inline: auto;
	margin-bottom: 60px;

	@media ${QUERIES.phoneAndDown} {
		margin-bottom: 24px;
	}
`;

const AnswerButton = styled(Button)`
	flex: 1;
	border: 2px solid var(--border-color);
`;

export const Explanation = styled.div`
	max-width: var(--max-width);
	margin-inline: auto;
	margin-bottom: 48px;
`;

const ExplanationText = styled.p`
	margin-bottom: 16px;
`;

const IconGroup = styled.div`
	display: flex;
`;

const NextButton = styled(Button)`
	margin-inline: auto;
`;

export default IntroductionDemo;
