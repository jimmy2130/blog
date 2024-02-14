import React from 'react';
import styled from 'styled-components';
import FullBleed from '@/components/FullBleed';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Icon from '@/components/Icon';
import UnstyledButton from '@/components/UnstyledButton';
import Shape from './Shape';
import Button from './Button';
import IconButton from './IconButton';
import { QUERIES } from '@/constants';

const QUESTIONS = [
	{ question: ['021', '111', '202'], correctAnswer: false },
	{ question: ['021', '111', '202'], correctAnswer: false },
];

// gameStatus: preparing, running, end

const INITIAL_GUESSES = Array(QUESTIONS.length).fill(null);

function IntroductionDemo() {
	const [gameStatus, setGameStatus] = React.useState('preparing');
	const [guesses, setGuesses] = React.useState(INITIAL_GUESSES);
	const [questionIndex, setQuestionIndex] = React.useState(0);

	const { question, correctAnswer } = QUESTIONS[questionIndex];

	const isPlayerCorrect = correctAnswer === guesses[questionIndex];

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
		setGuesses(INITIAL_GUESSES);
		setQuestionIndex(0);
	}

	return (
		<FullBleed>
			<MaxWidthWrapper maxWidth={700} breathingRoom={24}>
				<Wrapper onSubmit={event => event.preventDefault()}>
					{gameStatus === 'preparing' ? (
						<StartButton onClick={handleStartGame}>開始</StartButton>
					) : gameStatus === 'end' ? (
						<RestartButton onClick={handleRestartGame}>再玩一次</RestartButton>
					) : (
						<>
							<NavigationBar>
								<Title>{`第 ${questionIndex + 1} 題，總共 ${
									QUESTIONS.length
								} 題`}</Title>
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
											questionIndex === QUESTIONS.length - 1 ||
											guesses[questionIndex] === null
										}
										onClick={handleMoveToNextQuestion}
									>
										<Icon
											id="chevron-right"
											color={
												questionIndex === QUESTIONS.length - 1 ||
												guesses[questionIndex] === null
													? '#a1a1aa'
													: '#34343d'
											}
										/>
									</IconButton>
								</IconGroup>
							</NavigationBar>
							<ContentWrapper>
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
											<p>
												{isPlayerCorrect
													? '恭喜你，答對了。'
													: '抱歉，你答錯了。'}
											</p>
											<p>
												這三張圖的圖案形狀都不相同、圖案顏色都是藍色、背景色都不相同，因此滿足規則。
											</p>
										</>
									)}
								</Explanation>
							</ContentWrapper>

							{guesses[questionIndex] !== null && (
								<NextButton
									onClick={
										questionIndex !== QUESTIONS.length - 1
											? handleMoveToNextQuestion
											: handleEndGame
									}
								>
									{questionIndex !== QUESTIONS.length - 1 ? '下一題' : '結束'}
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

const PrimaryButton = styled(Button)`
	padding: 4px 16px;
	background: #34343d;
	color: white;

	&:hover {
		background: #52525b;
	}

	&:focus {
		outline-offset: 4px;
	}

	&:disabled {
		background: #52525b;
	}

	&:disabled&:hover {
		background: #52525b;
	}
`;

const StartButton = styled(PrimaryButton)`
	margin-inline: auto;
`;

const RestartButton = styled(PrimaryButton)`
	margin-inline: auto;
`;

const NavigationBar = styled.div`
	max-width: var(--max-width);
	margin-inline: auto;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.div``;

const ContentWrapper = styled.div`
	min-height: 510px;
`;

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

	&:focus {
		outline-offset: 4px;
	}
`;

const Explanation = styled.div`
	max-width: var(--max-width);
	margin-inline: auto;
	margin-bottom: 48px;

	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const IconGroup = styled.div`
	display: flex;
`;

const NextButton = styled(PrimaryButton)`
	width: 100%;
	max-width: 240px;
	margin-inline: auto;
`;

export default IntroductionDemo;
