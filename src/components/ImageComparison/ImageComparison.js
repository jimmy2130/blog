import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { QUERIES } from '../../constants';

function ImageComparison({ failImage, successImage, ...delegated }) {
	return (
		<Wrapper {...delegated}>
			<ImageWrapper>
				{failImage}
				<IconWrapper
					style={{
						'--color': 'var(--color-warning)',
						'--background-color': 'var(--color-warning-background)',
					}}
				>
					<Icon id="x" size="24" color="var(--color-warning)" strokeWidth={3} />
				</IconWrapper>
			</ImageWrapper>
			<ImageWrapper>
				{successImage}
				<IconWrapper
					style={{
						'--color': 'var(--color-success)',
						'--background-color': 'var(--color-success-background)',
					}}
				>
					<Icon
						id="check"
						size="24"
						color="var(--color-success)"
						strokeWidth={3}
						style={{ transform: 'translateY(1px)' }}
					/>
				</IconWrapper>
			</ImageWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	gap: 48px;
	margin-top: 100px;
	margin-bottom: 80px;
	width: fit-content;
	margin-left: auto;
	margin-right: auto;

	@media ${QUERIES.tabletAndDown} {
		gap: 16px;
	}

	@media ${QUERIES.phoneAndDown} {
		margin-top: 60px;
		margin-bottom: 48px;
	}
`;

const ImageWrapper = styled.div`
	flex: 1;
	position: relative;
`;

const IconWrapper = styled.div`
	--size: 24;
	position: absolute;
	top: 0;
	left: 0;
	transform: translateY(calc(-100% - 20px));
	width: 48px;
	height: 48px;
	border-radius: 50%;
	border: 2px solid var(--color);
	background: var(--background-color);

	display: grid;
	place-content: center;

	@media ${QUERIES.phoneAndDown} {
		transform: translateY(calc(-100%)) scale(0.6);
	}
`;

export default ImageComparison;
