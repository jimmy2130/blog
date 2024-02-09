import React from 'react';
import styled from 'styled-components';
import {
	createPuzzle,
	checkSingleGuess,
	checkFinish,
} from './CombineGame.helpers';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Shape from './Shape';
import UnstyledButton from '@/components/UnstyledButton';
import Icon from '@/components/Icon';
import { QUERIES } from '@/constants';

const TOTAL_QUESTIONS = 3;

function CombineGame() {
	const [puzzle, setPuzzle] = React.useState([]);
	const [combo, setCombo] = React.useState([]);
	const [guess, setGuess] = React.useState('');
	const [questionIndex, setQuestionIndex] = React.useState(1);
	const [time, setTime] = React.useState(0);
	const [finish, setFinish] = React.useState(false);

	const answers = Array(12).fill('');
	for (let i = 0; i < combo.length; i++) {
		answers[i] = combo[i].split(',').join('');
	}

	function handleAddNum(num) {
		const nextGuess = guess;
		if (nextGuess.includes(num.toString())) {
			setGuess(
				nextGuess
					.split('')
					.filter(el => el !== num.toString())
					.join(''),
			);
		} else if (nextGuess.length === 3) {
			return;
		} else {
			setGuess(`${nextGuess}${num}`);
		}
	}

	function handleGuess(event) {
		event.preventDefault();
		const result = checkSingleGuess(guess, puzzle, combo);
		if (result) {
			setCombo([...combo, guess.split('').join(',')]);
			setGuess('');
		} else {
			setGuess('');
		}
	}

	function handleFinish(event) {
		event.preventDefault();
		if (checkFinish(puzzle, combo.length)) {
			setCombo([]);
			setGuess('');
			if (questionIndex === TOTAL_QUESTIONS) {
				setFinish(true);
			} else {
				setPuzzle(createPuzzle());
				setQuestionIndex(questionIndex + 1);
			}
		}
	}

	function handleRestart(event) {
		event.preventDefault();
		setPuzzle(createPuzzle());
		setCombo([]);
		setGuess('');
		setQuestionIndex(1);
		setTime(0);
		setFinish(false);
	}

	React.useEffect(() => {
		setPuzzle(createPuzzle());
	}, []);

	React.useEffect(() => {
		function handleTimeout() {
			setTime(time + 1);
		}
		let timeoutId;
		if (!finish) {
			timeoutId = window.setTimeout(handleTimeout, 1000);
		}

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [finish, time]);

	return (
		<MaxWidthWrapper maxWidth={800} breathingRoom={24}>
			<OuterWrapper>
				<InnerWrapper onSubmit={event => event.preventDefault()}>
					<Board>
						{puzzle.map((id, index) => (
							<Shape
								key={index}
								id={id}
								handleAddNum={handleAddNum}
								num={index + 1}
								guess={guess}
							/>
						))}
						<Tag>第{questionIndex}題</Tag>
						<Timer>{time}</Timer>
					</Board>
					<AnswerList>
						{answers.map((answer, index) => (
							<Answer key={index}>{answer}</Answer>
						))}
					</AnswerList>
					<ControlPanel>
						<Message>答案重複</Message>
						<FinishButton
							onClick={handleFinish}
							disabled={guess !== '' || finish}
						>
							結
						</FinishButton>
						<CombineButton
							onClick={handleGuess}
							disabled={guess === '' || finish}
						>
							合
						</CombineButton>
					</ControlPanel>
					<IconButton onClick={handleRestart}>
						<Icon id="refresh-ccw" />
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
`;

const Board = styled.div`
	grid-area: board;
	aspect-ratio: 1 / 1;

	position: relative;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 8px;
`;

const Eyebrow = styled.span`
	position: absolute;
	display: block;
	transform: translateY(-100%);
	padding: 8px 24px;
	font-size: calc(24 / 16 * 1rem);

	@media ${QUERIES.tabletAndDown} {
		font-size: calc(16 / 16 * 1rem);
	}
`;

const Tag = styled(Eyebrow)`
	top: 0;
	left: 0;
`;

const Timer = styled(Eyebrow)`
	top: 0;
	right: 0;
`;

const AnswerList = styled.ul`
	grid-area: answer-list;
	border: 4px solid #a1a1a1;
	border-radius: 12px;

	padding: 32px 20px;

	list-style-type: none;

	aspect-ratio: 1 / 3;
	overflow-y: scroll;
`;

const Answer = styled.li`
	font-size: calc(19 / 16 * 1rem);
	text-align: center;
	border-bottom: solid #ddd;
	padding-left: 16px;
	padding-right: 16px;
	height: 28px;
	margin-bottom: 16px;

	&:last-child {
		margin-bottom: 0;
	}
`;

const ControlPanel = styled.div`
	grid-area: control-panel;

	display: grid;
	grid-template-areas:
		'message message'
		'finish-button combine-button';

	gap: 8px 16px;
`;

const Message = styled.p`
	font-size: calc(19 / 16 * 1rem);
	grid-area: message;
	text-align: center;
`;

const StyledButton = styled(UnstyledButton)`
	padding-top: 8px;
	padding-bottom: 8px;

	background: #e4e4e7;
	border-radius: 4px;
	border: 2px solid #e4e4e7;
	font-size: calc(19 / 16 * 1rem);
	flex: 1;

	&:hover {
		border: 2px solid #777777;
	}

	&:disabled {
		cursor: not-allowed;
	}
	&:disabled&:hover {
		border: 2px solid #e4e4e7;
	}
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
`;

export default CombineGame;
