import React from 'react';
import styled from 'styled-components';

export function BrowserBackIcon({ fill = 'red' }) {
	return (
		<BackWrapper
			width="23"
			height="27"
			viewBox="0 0 23 27"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.999999 15.232C-0.333335 14.4622 -0.333333 12.5378 1 11.768L19.75 0.942631C21.0833 0.172831 22.75 1.13508 22.75 2.67468V24.3253C22.75 25.8649 21.0833 26.8272 19.75 26.0574L0.999999 15.232Z"
				fill={fill}
			/>
		</BackWrapper>
	);
}

const BackWrapper = styled.svg`
	transform: translateX(-2px);
`;

export function BrowserForwardIcon({ fill = 'red' }) {
	return (
		<svg
			width="23"
			height="27"
			viewBox="0 0 23 27"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22 15.232C23.3333 14.4622 23.3333 12.5378 22 11.768L3.25 0.942631C1.91667 0.172831 0.25 1.13508 0.25 2.67468V24.3253C0.25 25.8649 1.91667 26.8272 3.25 26.0574L22 15.232Z"
				fill={fill}
			/>
		</svg>
	);
}
