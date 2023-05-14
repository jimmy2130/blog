import React from 'react';
import styled from 'styled-components';
import RestApiDemo from './RestApiDemo';
import Select from '../Select';
import { QUERIES } from '../../constants';

const URLS = [
	{ name: '/', id: 'abc' },
	{ name: '/gin', id: 'def' },
	{ name: '/?q=&filter=Europe', id: 'ghi' },
	{ name: '/?q=an&filter=', id: 'jkl' },
	{ name: '/error', id: 'mno' },
];

function FirstDemo() {
	const [url, setUrl] = React.useState(URLS[0]);
	function handleOnChange(value) {
		setUrl(URLS.find(elem => elem.name === value));
	}

	return (
		<Wrapper>
			<RestApiDemo url={url} />
			<SelectWrapper>
				<Select
					label="網址"
					value={url.name}
					onChange={event => handleOnChange(event.target.value)}
				>
					{URLS.map(({ name, id }) => (
						<option key={id} value={name}>
							{name}
						</option>
					))}
				</Select>
			</SelectWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.form`
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 48px;

	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);

	margin-bottom: 60px;

	@media ${QUERIES.phoneAndDown} {
		gap: 16px;
		margin-bottom: 40px;
	}
`;

const SelectWrapper = styled.div`
	min-width: 300px;
`;

export default FirstDemo;
