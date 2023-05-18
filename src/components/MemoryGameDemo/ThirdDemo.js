import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import ThirdDemoBoard from './ThirdDemoBoard';
import { QUERIES } from '../../constants';
import useTimer from './use-timer.hook';

function ThirdDemo() {
	const [running, setRunning] = React.useState(false);
	const [isExpanded, setIsExpanded] = React.useState(true);
	const [mode, setMode] = React.useState('normal');
	const [time, restart] = useTimer(running);

	function handleStartPause(event) {
		event.preventDefault();
		setRunning(!running);
	}

	function handleRestart(event) {
		event.preventDefault();
		restart();
	}

	function handleExpandCollapse(event) {
		event.preventDefault();
		setIsExpanded(!isExpanded);
	}

	function handleToggle(event) {
		event.preventDefault();
		setMode(mode === 'normal' ? 'absolute' : 'normal');
	}

	return (
		<Wrapper>
			<ThirdDemoBoard
				time={time}
				running={running}
				isExpanded={isExpanded}
				mode={mode}
			/>
			<ButtonGroup>
				<ExpandCollapse onClick={handleExpandCollapse}>
					{isExpanded ? '收合' : '展開'}
				</ExpandCollapse>
				<Toggle onClick={handleToggle} disabled={isExpanded}>
					切換
				</Toggle>
				<StartPause onClick={handleStartPause}>
					{running ? (
						<Icon id="pause" color="var(--color-gray-900)" />
					) : (
						<Icon id="play" color="var(--color-gray-900)" />
					)}
				</StartPause>
				<Restart onClick={handleRestart}>
					<Icon id="refresh-ccw" color="var(--color-gray-900)" />
				</Restart>
			</ButtonGroup>
		</Wrapper>
	);
}

const Wrapper = styled.form`
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 60px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;

	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);
`;

const ButtonGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	color: var(--color-gray-900);

	@media ${QUERIES.phoneAndDown} {
		gap: 8px;
	}
`;

const CustomButton = styled(UnstyledButton)`
	background: var(--color-primary-100);
	border-radius: 4px;
	padding: 8px 12px;
	border: 2px solid var(--color-primary-100);

	&:hover {
		border: 2px solid var(--color-primary-200);
	}

	&:disabled {
		background: var(--color-gray-200);
		border: 2px solid var(--color-gray-200);
		cursor: not-allowed;
	}
`;

const ExpandCollapse = styled(CustomButton)``;
const Toggle = styled(CustomButton)``;
const StartPause = styled(CustomButton)``;
const Restart = styled(CustomButton)``;

export default ThirdDemo;
