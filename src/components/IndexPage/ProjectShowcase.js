import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import ShiftBy from '@/components/ShiftBy';
import { QUERIES } from '@/constants';

function ProjectShowcase({
	title,
	subtitle,
	summary,
	illustration: Illustration,
	workLink,
	readMoreLink,
}) {
	return (
		<ContainerWrapper>
			<MaxWidthWrapper>
				<Wrapper>
					<ContextWrapper>
						<TitleWrapper>
							<Title>{title}</Title>
							<ShiftBy x={2}>
								<Subtitle>{subtitle}</Subtitle>
							</ShiftBy>
						</TitleWrapper>
						<Content>
							<Summary>{summary}</Summary>
							<LinkGroup>
								<SecondaryLink href={workLink} target="_blank">
									看作品
								</SecondaryLink>
								<PrimaryLink href={readMoreLink} target="_blank">
									看製作歷程
								</PrimaryLink>
							</LinkGroup>
						</Content>
					</ContextWrapper>
					<ImageWrapper>
						<Illustration />
					</ImageWrapper>
				</Wrapper>
			</MaxWidthWrapper>
		</ContainerWrapper>
	);
}

const ContainerWrapper = styled.div`
	container: fullscreen / inline-size;
`;

const MaxWidthWrapper = styled.div`
	--max-width: 1152px;
	--padding: 60px;

	max-width: calc(var(--max-width) + 2 * var(--padding));
	margin-left: auto;
	margin-right: auto;
	padding-left: var(--padding);
	padding-right: var(--padding);

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

	@media ${QUERIES.phoneAndDown} {
		padding: 0;
	}
`;

const Wrapper = styled.div`
	display: flex;
	gap: clamp(60px, 100vw - 1386px, 126px);
	justify-content: space-between;
	align-items: center;
	color: var(--color-gray-900);
	/*  hide image overflow (for safari) */
	overflow: hidden;

	@container fullscreen (max-width: calc(1205 / 16 * 1rem)) {
		justify-content: revert;
	}

	@media ${QUERIES.tabletAndDown} {
		flex-direction: column-reverse;
		align-items: stretch;
		gap: 36px;
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
		gap: 16px;
	}

	@media ${QUERIES.phoneAndDown} {
		padding-left: 8px;
		padding-right: 8px;
	}
`;

const TitleWrapper = styled.div``;

const Title = styled.h2`
	font-size: calc(44 / 16 * 1rem);
	font-weight: 700;
	margin-bottom: -16px;

	@media ${QUERIES.tabletAndDown} {
		font-size: calc(28 / 16 * 1rem);
		margin-bottom: -8px;
	}

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(18 / 16 * 1rem);
		margin-bottom: -4px;
	}
`;

const Subtitle = styled.div`
	color: var(--color-gray-500);
	font-size: calc(19 / 16 * 1rem);

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(16 / 16 * 1rem);
		margin-left: 0;
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
		gap: 24px;
	}

	@media ${QUERIES.phoneAndDown} {
		gap: 24px;
	}
`;

const Summary = styled.p`
	font-size: calc(19 / 16 * 1rem);
	line-height: 180%;

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

const LinkGroup = styled.div`
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

const Link = styled(NextLink)`
	padding-top: 12px;
	padding-bottom: 12px;
	font-weight: 700;
	letter-spacing: 0.05em;
	text-decoration: none;
	font-size: calc(16 / 16 * 1rem);
	border-radius: 4px;

	display: grid;
	place-content: center;

	&:focus {
		outline-offset: -8px;
	}

	&:focus:not(:focus-visible) {
		outline: none;
	}

	@media (max-width: calc(789 / 16 * 1rem)) {
		min-width: 150px;
	}

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(14 / 16 * 1rem);
		padding-top: 8px;
		padding-bottom: 8px;
		min-width: revert;
		flex-basis: 150px;
	}
`;

const SecondaryLink = styled(Link)`
	color: var(--color-primary-500);
	border: 2px solid var(--color-primary-500);

	&:hover {
		color: var(--color-primary-400);
		border: 2px solid var(--color-primary-400);
	}
`;

const PrimaryLink = styled(Link)`
	background: var(--color-primary-500);
	color: var(--color-gray-50);

	&:hover {
		background: var(--color-primary-400);
	}
`;

const ImageWrapper = styled.div`
	min-width: 700px;
	max-width: 700px;

	@media ${QUERIES.tabletAndDown} {
		min-width: revert;
		max-width: revert;
		height: revert;
		aspect-ratio: 700 / 402;
	}
`;

export default ProjectShowcase;
