import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '@/constants';

function DescriptionList({ list }) {
	return (
		<Wrapper>
			{list.map(([key, value], index) => (
				<Row key={index}>
					<DescriptionTerm>{key}</DescriptionTerm>
					<DescriptionDetail>{value}</DescriptionDetail>
				</Row>
			))}
		</Wrapper>
	);
}

const Wrapper = styled.dl`
	padding-left: 28px;
	margin-top: 28px;
	margin-bottom: 60px;

	@media ${QUERIES.phoneAndDown} {
		padding-left: 12px;
	}
`;

const Row = styled.div`
	position: relative;
	display: flex;
	align-items: baseline;
	gap: 24px;

	margin-bottom: 16px;
	padding-left: 16px;

	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);

	&:before {
		content: '·';
		position: absolute;
		font-size: calc(19 / 16 * 1rem);
		transform: translateX(calc(-16px - 50%)) scale(250%);
		color: var(--color-gray-900);
		font-weight: 700;
	}

	@media ${QUERIES.phoneAndDown} {
		flex-direction: column;
		align-items: flex-start;
		gap: 0px;

		margin-bottom: 24px;
	}
`;

const DescriptionTerm = styled.dt`
	min-width: fit-content;
`;

const DescriptionDetail = styled.dd``;

export default DescriptionList;
