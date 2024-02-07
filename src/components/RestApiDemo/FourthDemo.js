import React from 'react';
import styled from 'styled-components';
import RestApiDemo from './RestApiDemo';
import UnstyledButton from '@/components/UnstyledButton';
import { QUERIES } from '@/constants';

const cssLightVariables = [
	['--color-background:', `'hsl(0deg 0% 98%)';`],
	['--color-elements:', `'hsl(0deg 0% 100%)';`],
	['--color-text:', `'hsl(200deg 15% 8%)';`],
	['--color-input:', `'hsl(0deg 0% 52%)';`],
];

const cssDarkVariables = [
	['--color-background:', `'hsl(207deg 26% 17%)';`],
	['--color-elements:', `'hsl(209deg 23% 22%)';`],
	['--color-text:', `'hsl(0deg 0% 100%)';`],
	['--color-input:', `'hsl(0deg 0% 100%)';`],
];

function FourthDemo() {
	const [colorMode, setColorMode] = React.useState('light');
	const variables =
		colorMode === 'light' ? cssLightVariables : cssDarkVariables;
	function handleClick(event) {
		event.preventDefault();
		if (colorMode === 'light') {
			setColorMode('dark');
		} else {
			setColorMode('light');
		}
	}
	return (
		<Wrapper
			style={{
				'--color-text':
					colorMode === 'light'
						? 'var(--color-gray-900)'
						: 'var(--color-gray-100)',
			}}
		>
			<RestApiDemo url={{ name: '/', id: 'abc' }} colorMode={colorMode} />
			<InfoWrapper
				style={{
					'--color-background':
						colorMode === 'light'
							? 'var(--color-gray-100)'
							: 'var(--color-gray-700)',
				}}
			>
				<InfoTitle>CSS 變數</InfoTitle>
				<Info>
					{variables.map((elem, index) => (
						<CustomListItem key={index}>
							<Key>{elem[0]}</Key>
							<Value>{elem[1]}</Value>
						</CustomListItem>
					))}
				</Info>
			</InfoWrapper>
			<ButtonGroup>
				<Title onClick={handleClick}>{`切換成${
					colorMode === 'light' ? '深色' : '淺色'
				}模式`}</Title>
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
	gap: 24px;

	font-size: calc(19 / 16 * 1rem);
	color: var(--color-text);

	@media ${QUERIES.phoneAndDown} {
		gap: 8px;
	}
`;

const InfoWrapper = styled.div`
	align-self: stretch;
	background: var(--color-background);
	border-radius: 8px;
	padding: 28px 24px;

	@media ${QUERIES.phoneAndDown} {
		padding: 14px 12px;
		min-height: revert;
	}
`;

const InfoTitle = styled.div`
	margin-bottom: 16px;
	font-weight: bold;

	@media ${QUERIES.phoneAndDown} {
		margin-bottom: 8px;
	}
`;

const Info = styled.ul`
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
	font-family: monospace;
	font-size: calc(16 / 16 * 1rem);
`;

const CustomListItem = styled.li`
	list-style-type: none;
	background: var(--item-background);
	border-radius: 4px;
	padding-left: 8px;
	padding-right: 16px;
	margin-bottom: 0;
`;

const Key = styled.span`
	margin-right: 8px;
	@media ${QUERIES.phoneAndDown} {
		display: block;
	}
`;

const Value = styled.span`
	@media ${QUERIES.phoneAndDown} {
		display: block;
		margin-left: 16px;
	}
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

const Title = styled(CustomButton)``;

export default FourthDemo;
