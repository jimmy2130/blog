import React from 'react';
import styled from 'styled-components';
import Spacer from '@/components/Spacer';
import UnstyledButton from '@/components/UnstyledButton';

function RevealContent({ handleReveal, isRevealed, children }) {
	return (
		<>
			{!isRevealed ? (
				<>
					<Spacer size={80} />
					<InfoCard>
						接下來的文章需要通過遊戲才能解鎖，如果遊戲太難的話，你也可以選擇跳過，繼續觀看接下來的文章。
						<SkipButton onClick={handleReveal}>跳過</SkipButton>
					</InfoCard>
				</>
			) : (
				children
			)}
		</>
	);
}

const InfoCard = styled.div`
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;
	padding: 24px;

	background: var(--color-gray-100);
	border-radius: 16px;
	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);

	text-align: center;
`;

const SkipButton = styled(UnstyledButton)`
	background: var(--color-gray-300);
	color: var(--color-gray-900);
	padding: 4px 16px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 16px;

	border-radius: 8px;

	&:hover {
		background: var(--color-gray-400);
	}
`;

export default RevealContent;
