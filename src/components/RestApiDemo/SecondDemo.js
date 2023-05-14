import React from 'react';
import styled from 'styled-components';
import RestApiDemo from './RestApiDemo';
import OrderedList from '../OrderedList';
import ListItem from '../ListItem';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import { BrowserBackIcon, BrowserForwardIcon } from './BrowserButtonIcons';
import { useMouseHover } from './SecondDemo.helpers';
import { QUERIES } from '../../constants';

const startingHistoryStack = [
	{ name: '/', id: 'abc' },
	{ name: '/?filter=Europe', id: 'def' },
	{ name: '/?q=g&filter=Europe', id: 'ghi' },
	{ name: '/bel/?q=g&filter=Europe', id: 'jkl' },
	{ name: '/fra/?q=g&filter=Europe', id: 'mno' },
];

function SecondDemo() {
	const browserBackRef = React.useRef();
	const browserForwardRef = React.useRef();
	const titleRef = React.useRef();
	const websiteBackRef = React.useRef();
	const [urls, setUrls] = React.useState(startingHistoryStack);
	const [index, setIndex] = React.useState(startingHistoryStack.length - 1);
	const [interaction, setInteraction] = React.useState(null);

	const parsedUrl = new URL(urls[index]['name'], 'http://www.example.com');
	const path = parsedUrl.pathname;
	const isDetailPage = path !== '/' && !path.includes('error');

	function handleBrowserBackClick(event) {
		event.preventDefault();
		setInteraction('browserBackClick');
		setIndex(index - 1);
	}
	function handleBrowserForwardClick(event) {
		event.preventDefault();
		setInteraction('browserForwardClick');
		setIndex(index + 1);
	}
	function handleTitleClick(event) {
		event.preventDefault();
		setInteraction('titleClick');
		if (urls[index]['name'] === '/') {
			let copiedUrls = [...urls];
			copiedUrls[index]['id'] = crypto.randomUUID();
			setUrls(copiedUrls);
		} else {
			let nextUrls = [
				...urls.slice(0, index + 1),
				{ name: '/', id: crypto.randomUUID() },
			];
			setUrls(nextUrls);
			setIndex(index + 1);
		}
	}
	function handleWebsiteBackClick(event) {
		event.preventDefault();
		const nextUrls = [
			...urls.slice(0, index + 1),
			{
				name: `/${urls[index]['name'].split('/')[2]}`,
				id: crypto.randomUUID(),
			},
		];
		setUrls(nextUrls);
		setIndex(index + 1);
	}
	function handleRestart(event) {
		event.preventDefault();
		setInteraction(null);
		setUrls(startingHistoryStack);
		setIndex(startingHistoryStack.length - 1);
	}

	useMouseHover(
		browserBackRef,
		() => setInteraction('browserBackHover'),
		() => setInteraction(null),
	);

	useMouseHover(
		browserForwardRef,
		() => setInteraction('browserForwardHover'),
		() => setInteraction(null),
	);

	useMouseHover(
		titleRef,
		() => setInteraction('titleHover'),
		() => setInteraction(null),
	);

	useMouseHover(
		websiteBackRef,
		() => setInteraction('websiteBack'),
		() => setInteraction(null),
	);

	return (
		<Wrapper>
			<RestApiDemo url={urls[index]} interaction={interaction} />
			<HistoryStackWrapper>
				<StackTitle>瀏覽紀錄</StackTitle>
				<HistoryStack>
					{urls.map(({ name, id }, i) => (
						<CustomListItem
							key={id}
							style={{
								'--item-background':
									i === index ? 'var(--color-gray-200)' : 'transparent',
							}}
						>
							{name}
						</CustomListItem>
					))}
				</HistoryStack>
			</HistoryStackWrapper>
			<ButtonGroup>
				<BrowserBack
					ref={browserBackRef}
					onClick={handleBrowserBackClick}
					disabled={index === 0}
				>
					<BrowserBackIcon
						fill={
							index === 0 ? 'var(--color-gray-600)' : 'var(--color-primary-400)'
						}
					/>
				</BrowserBack>
				<BrowserForward
					ref={browserForwardRef}
					onClick={handleBrowserForwardClick}
					disabled={index === urls.length - 1}
				>
					<BrowserForwardIcon
						fill={
							index === urls.length - 1
								? 'var(--color-gray-600)'
								: 'var(--color-primary-400)'
						}
					/>
				</BrowserForward>
				<Title ref={titleRef} onClick={handleTitleClick}>
					導覽列標題
				</Title>
				<WebsiteBack
					onClick={handleWebsiteBackClick}
					disabled={!isDetailPage}
					ref={websiteBackRef}
				>
					頁面返回鈕
				</WebsiteBack>
				<Restart onClick={handleRestart}>
					<Icon id="refresh-ccw"></Icon>
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
	gap: 24px;

	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);

	@media ${QUERIES.phoneAndDown} {
		gap: 8px;
	}
`;

const HistoryStackWrapper = styled.div`
	align-self: stretch;
	background: var(--color-gray-100);
	border-radius: 8px;
	padding: 28px 24px;
	min-height: 320px;

	@media ${QUERIES.phoneAndDown} {
		padding: 14px 12px;
		min-height: revert;
	}
`;

const StackTitle = styled.div`
	margin-bottom: 16px;
	font-weight: bold;

	@media ${QUERIES.phoneAndDown} {
		margin-bottom: 8px;
	}
`;

const HistoryStack = styled(OrderedList)`
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
`;

const CustomListItem = styled(ListItem)`
	background: var(--item-background);
	border-radius: 4px;
	padding-left: 16px;
	padding-right: 16px;
	margin-right: 64px;
	margin-bottom: 0;
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

const BrowserBack = styled(CustomButton)``;
const BrowserForward = styled(CustomButton)``;
const Title = styled(CustomButton)``;
const WebsiteBack = styled(CustomButton)``;
const Restart = styled(CustomButton)``;

export default SecondDemo;
