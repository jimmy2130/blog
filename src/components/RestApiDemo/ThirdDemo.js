import React from 'react';
import styled from 'styled-components';
import RestApiDemo from './RestApiDemo';
import { QUERIES } from '../../constants';

function ThirdDemo() {
	const [width, setWidth] = React.useState(700);
	return (
		<Wrapper>
			<DemoWrapper>
				<RestApiDemo url={{ name: '/bel', id: 'abc' }} width={width} />
				<Background></Background>
			</DemoWrapper>
			<SliderWrapper>
				<InfoRow>
					<span>螢幕寬度</span>
					<span>{`${Math.round(width * (173 / 83) - 386 / 83)}px`}</span>
				</InfoRow>
				<NativeInput
					type="range"
					min={482}
					max={700}
					value={width}
					onChange={event => setWidth(event.target.value)}
				/>
			</SliderWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.form`
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 60px;

	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);

	@media ${QUERIES.phoneAndDown} {
		margin-bottom: 40px;
	}
`;

const DemoWrapper = styled.div`
	position: relative;
`;

const Background = styled.div`
	border-radius: 28px;
	position: absolute;
	inset: 0;
	z-index: -1;
	outline: 2px dashed var(--color-primary-500);
	outline-offset: -3px;
`;

const SliderWrapper = styled.label`
	display: flex;
	flex-direction: column;
	gap: 12px;

	margin-top: 24px;
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;

	@media ${QUERIES.phoneAndDown} {
		margin-top: 16px;
	}
`;

const InfoRow = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

const NativeInput = styled.input`
	display: block;
	-webkit-appearance: none;
	appearance: none;
	background: transparent;
	cursor: pointer;
	width: 100%;
	height: 20px;

	--handle-size: 20px;
	--handle-radius: 1000px;
	--track-size: 4px;
	--track-color: var(--color-primary-500);
	--handle-color: var(--color-primary-500);
	--track-active-color: var(--color-primary-400);
	--handle-active-color: var(--color-primary-400);

	/***** Track Styles *****/
	/***** Chrome, Safari, Opera, and Edge Chromium *****/
	&::-webkit-slider-runnable-track {
		background: var(--track-color);
		height: var(--track-size);
		border-radius: var(--handle-radius);
	}

	/******** Firefox ********/
	&::-moz-range-track {
		background: var(--track-color);
		height: var(--track-size);
		border-radius: var(--handle-radius);
	}

	/***** Thumb Styles *****/
	/***** Chrome, Safari, Opera, and Edge Chromium *****/
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		margin-top: calc((var(--handle-size) - var(--track-size)) / -2);
		background-color: var(--handle-color);
		height: var(--handle-size);
		width: var(--handle-size);
		border-radius: var(--handle-radius);
	}
	/***** Firefox *****/
	&::-moz-range-thumb {
		border: none;
		background-color: var(--handle-color);
		height: var(--handle-size);
		width: var(--handle-size);
		border-radius: var(--handle-radius);
	}

	&:focus {
		outline-offset: 8px;
	}
`;

export default ThirdDemo;
