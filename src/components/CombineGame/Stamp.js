import React from 'react';
import styled from 'styled-components';
import { getDateAndTime } from './CombineGame.helpers';
import { QUERIES } from '@/constants';

const STATUS = {
	success: '成功',
	fail: '失敗',
};

function Stamp({ gameStatus }) {
	if (gameStatus !== 'success' && gameStatus !== 'fail') {
		return null;
	}

	const { date, time } = getDateAndTime();

	return (
		<Wrapper>
			<InnerRing>
				<Status>{STATUS[gameStatus]}</Status>
				<StampDate>{date}</StampDate>
				<StampTime>{time}</StampTime>
			</InnerRing>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: absolute;
	bottom: 5%;
	left: -7.5%;
	width: 115%;
	aspect-ratio: 1 / 1;
	padding: 2px;

	border: solid 4px #dc2626;
	border-radius: 50%;
	transform: rotate(-20deg);

	@media ${QUERIES.tabletAndDown} {
		left: revert;
		right: 15%;
		bottom: -15%;
		height: 130%;
		width: revert;
	}

	@media ${QUERIES.phoneAndDown} {
		right: 5%;
		bottom: -5%;
		height: 110%;
	}
`;

const InnerRing = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	place-content: center;
	position: relative;

	border: solid 2px #dc2626;
	border-radius: 50%;

	color: #dc2626;
`;

const Status = styled.div`
	text-align: center;
	font-size: calc(36 / 16 * 1rem);
	font-weight: 700;

	transform: translateY(10px);

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(24 / 16 * 1rem);
	}
`;

const SubInfo = styled.div`
	text-align: center;
	font-size: calc(16 / 16 * 1rem);
	font-weight: 400;
`;

const StampDate = styled(SubInfo)`
	transform: translateY(6px);
`;
const StampTime = styled(SubInfo)``;

export default React.memo(Stamp);
