import React from 'react';
import styled from 'styled-components';
import {
	createPuzzle,
	checkSingleGuess,
	checkFinish,
} from './CombineGame.helpers';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Shape from './Shape';
import AnswerList from './AnswerList';
import UnstyledButton from '@/components/UnstyledButton';
import Icon from '@/components/Icon';
import { QUERIES } from '@/constants';
import { TABLET_MAX_WIDTH } from './constants';

const TOTAL_QUESTIONS = 1;

function CombineGame() {
	const [puzzle, setPuzzle] = React.useState([]);
	const [combo, setCombo] = React.useState([]);
	const [guess, setGuess] = React.useState('');
	const [message, setMessage] = React.useState('');
	const [questionIndex, setQuestionIndex] = React.useState(1);
	const [time, setTime] = React.useState(0);
	const [finish, setFinish] = React.useState(false);

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

	function handleGuess(event) {
		event.preventDefault();
		const { isCorrect, message } = checkSingleGuess(guess, puzzle, combo);
		if (isCorrect) {
			setCombo([...combo, guess]);
			setGuess('');
			setMessage('');
		} else {
			setMessage(message);
		}
	}

	function handleFinish(event) {
		event.preventDefault();
		const { isFinished, message } = checkFinish(puzzle, combo.length);
		if (isFinished) {
			setGuess('');
			if (questionIndex === TOTAL_QUESTIONS) {
				setFinish(true);
			} else {
				setCombo([]);
				setPuzzle(createPuzzle());
				setQuestionIndex(questionIndex + 1);
			}
		} else {
			setMessage(message);
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
		<MaxWidthWrapper maxWidth={700} breathingRoom={24}>
			<OuterWrapper>
				<InnerWrapper onSubmit={event => event.preventDefault()}>
					<Board>
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
							/>
						))}
						<Tag>第{questionIndex}題</Tag>
						<Timer>{time}</Timer>
					</Board>
					<AnswerList combo={combo} finish={finish} />
					<ControlPanel>
						<Message>{message}</Message>
						<FinishButton onClick={handleFinish} disabled={finish}>
							結
						</FinishButton>
						<CombineButton onClick={handleGuess} disabled={finish}>
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

const Board = styled.div`
	grid-area: board;
	aspect-ratio: 1 / 1;

	position: relative;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 8px;

	@media ${QUERIES.tabletAndDown} {
		max-width: ${TABLET_MAX_WIDTH}px;
		margin: 0px auto 16px auto;
	}
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

	gap: 8px 16px;

	@media ${QUERIES.tabletAndDown} {
		max-width: ${TABLET_MAX_WIDTH}px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 44px;
	}
`;

const Message = styled.p`
	min-height: 32px;
	font-size: calc(19 / 16 * 1rem);
	grid-area: message;
	text-align: center;
`;

const StyledButton = styled(UnstyledButton)`
	padding-top: 8px;
	padding-bottom: 8px;

	background: #e4e4e7;
	border-radius: 4px;
	font-size: calc(19 / 16 * 1rem);
	flex: 1;

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
