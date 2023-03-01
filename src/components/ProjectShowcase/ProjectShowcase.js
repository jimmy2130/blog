import React from 'react';
import styled from 'styled-components';
import MWW from '../MaxWidthWrapper';
import UnStyledButton from '../UnstyledButton';
import { QUERIES } from '../../constants';

function ProjectShowcase() {
	return (
		<MaxWidthWrapper>
			<Wrapper>
				<ContextWrapper>
					<TitleWrapper>
						<Title>國家查詢器</Title>
						<Subtitle>React Router / React Query</Subtitle>
					</TitleWrapper>
					<Content>
						<Summary>
							這是一個用 REST Countries API
							打造的國家查詢器，可以瀏覽世界上的國家，也能進一步檢視國家資訊。
						</Summary>
						<ButtonGroup>
							<SecondaryButton>看作品</SecondaryButton>
							<PrimaryButton>看製作歷程</PrimaryButton>
						</ButtonGroup>
					</Content>
				</ContextWrapper>
				<ImageWrapper></ImageWrapper>
			</Wrapper>
		</MaxWidthWrapper>
	);
}

const MaxWidthWrapper = styled(MWW)`
	@media (max-width: 1205px) {
		margin: 0;
		padding: 0;
		width: revert;
		max-width: revert;
		padding-left: 60px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	gap: 60px;
	justify-content: space-between;
	align-items: center;
	color: var(--color-gray-900);
	/* hide overflow image */
	overflow: hidden;

	@media (max-width: 1205px) {
		justify-content: revert;
	}
`;

const ContextWrapper = styled.div`
	min-width: 326px;
	max-width: 326px;
	display: flex;
	flex-direction: column;
	gap: 28px;
`;

const TitleWrapper = styled.div``;

const Title = styled.h2`
	font-size: calc(44 / 16 * 1rem);
	font-weight: 700;
	margin-bottom: -16px;
`;

const Subtitle = styled.div`
	color: var(--color-gray-500);
	font-size: calc(18 / 16 * 1rem);
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

const Summary = styled.p`
	font-size: calc(18 / 16 * 1rem);
`;

const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const SecondaryButton = styled(UnStyledButton)`
	color: var(--color-primary-500);
	border: 2px solid var(--color-primary-500);
	border-radius: 4px;
	padding-top: 12px;
	padding-bottom: 12px;

	&:hover {
		color: var(--color-primary-400);
		border: 2px solid var(--color-primary-400);
	}
`;
const PrimaryButton = styled(UnStyledButton)`
	background: var(--color-primary-500);
	color: var(--color-gray-50);
	border-radius: 4px;
	padding-top: 12px;
	padding-bottom: 12px;

	&:hover {
		background: var(--color-primary-400);
	}
`;

const ImageWrapper = styled.div`
	min-width: 700px;
	max-width: 700px;
	height: 400px;
	background: var(--color-gray-200);
	border-radius: 16px;
`;

export default ProjectShowcase;
