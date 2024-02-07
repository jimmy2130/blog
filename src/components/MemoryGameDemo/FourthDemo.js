import React from 'react';
import styled from 'styled-components';
import UnstyledButton from '@/components/UnstyledButton';
import FourthDemoBoard from './FourthDemoBoard';
import { QUERIES } from '@/constants';
import useTimer from './use-timer.hook';

function FourthDemo() {
	const topLeftAnchorRef = React.useRef(null);
	const [mode, setMode] = React.useState('normal');

	function handleToggle(event) {
		event.preventDefault();
		setMode(mode === 'rove' ? 'normal' : 'rove');
		if (topLeftAnchorRef.current) {
			topLeftAnchorRef.current.focus();
		}
	}

	return (
		<Wrapper>
			<FourthDemoBoard ref={topLeftAnchorRef} mode={mode} />
			<ButtonWrapper>
				<Toggle onClick={handleToggle}>切換模式</Toggle>
				<FailedMessage>這個元件需要使用鍵盤才能操作</FailedMessage>
			</ButtonWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.form`
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 60px;
	margin-bottom: 60px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;

	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	color: var(--color-gray-900);

	@media ${QUERIES.phoneAndDown} {
		gap: 8px;
	}
`;

const Toggle = styled(UnstyledButton)`
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

	@media (hover: none) and (pointer: coarse) {
		display: none;
	}

	@media (hover: none) and (pointer: none) {
		display: none;
	}
`;

const FailedMessage = styled.span`
	background: var(--color-warning);
	border-radius: 4px;
	padding: 8px 12px;
	border: 2px solid var(--color-warning-background);

	@media (hover: hover) and (pointer: fine) {
		display: none;
	}
`;

export default FourthDemo;
