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
	@media (max-width: calc(1205 / 16 * 1rem)) {
		margin: 0;
		padding: 0;
		padding-left: 60px;
		width: revert;
		max-width: revert;
	}

	@media ${QUERIES.tabletAndDown} {
		padding: 0;
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

	@media (max-width: calc(1205 / 16 * 1rem)) {
		justify-content: revert;
	}

	@media ${QUERIES.tabletAndDown} {
		flex-direction: column-reverse;
		align-items: stretch;
		overflow: revert;
		--padding: clamp(36px, 36px + 0.5 * (100vw - 648px), 60px);
		padding-left: var(--padding);
		padding-right: var(--padding);
	}

	@media ${QUERIES.phoneAndDown} {
		--padding: clamp(24px, 24px + 0.5 * (100vw - 456px), 36px);
		padding-left: var(--padding);
		padding-right: var(--padding);
		gap: 20px;
	}
`;

const ContextWrapper = styled.div`
	min-width: 326px;
	max-width: 326px;
	display: flex;
	flex-direction: column;
	gap: 28px;

	@media ${QUERIES.tabletAndDown} {
		min-width: revert;
		max-width: revert;
		gap: 24px;
	}
`;

const TitleWrapper = styled.div``;

const Title = styled.h2`
	font-size: calc(44 / 16 * 1rem);
	font-weight: 700;
	margin-bottom: -16px;

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(16 / 16 * 1rem);
		margin-bottom: -4px;
	}
`;

const Subtitle = styled.div`
	color: var(--color-gray-500);
	font-size: calc(18 / 16 * 1rem);

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(16 / 16 * 1rem);
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;

	@media ${QUERIES.tabletAndDown} {
		flex-direction: row;
		gap: 70px;
	}

	@media (max-width: calc(789 / 16 * 1rem)) {
		flex-direction: column;
		gap: 48px;
	}

	@media ${QUERIES.phoneAndDown} {
		gap: 24px;
	}
`;

const Summary = styled.p`
	font-size: calc(18 / 16 * 1rem);

	@media ${QUERIES.tabletAndDown} {
		max-width: 326px;
		min-width: 326px;
	}

	@media (max-width: calc(789 / 16 * 1rem)) {
		max-width: revert;
		min-width: revert;
	}

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(16 / 16 * 1rem);
	}
`;

const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media ${QUERIES.tabletAndDown} {
		flex: 1;
	}

	@media (max-width: calc(789 / 16 * 1rem)) {
		flex-direction: row;
		flex: revert;
		gap: 28px;
	}
`;

const Button = styled(UnStyledButton)`
	padding-top: 12px;
	padding-bottom: 12px;
	font-weight: 700;
	letter-spacing: 0.05em;
	font-size: calc(14 / 16 * 1rem);
	border-radius: 4px;

	@media (max-width: calc(789 / 16 * 1rem)) {
		min-width: 150px;
	}

	@media ${QUERIES.phoneAndDown} {
		padding-top: 8px;
		padding-bottom: 8px;
		min-width: revert;
		flex-basis: 150px;
	}
`;

const SecondaryButton = styled(Button)`
	color: var(--color-primary-500);
	border: 2px solid var(--color-primary-500);

	&:hover {
		color: var(--color-primary-400);
		border: 2px solid var(--color-primary-400);
	}
`;
const PrimaryButton = styled(Button)`
	background: var(--color-primary-500);
	color: var(--color-gray-50);

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

	@media ${QUERIES.tabletAndDown} {
		min-width: revert;
		max-width: revert;
		height: revert;
		aspect-ratio: 7 / 4;
	}
`;

export default ProjectShowcase;
