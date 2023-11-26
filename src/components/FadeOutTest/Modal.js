import React from 'react';
import styled, { keyframes } from 'styled-components';

function Modal({ on }) {
	const [shouldRender, setShouldRender] = React.useState(on);
	React.useEffect(() => {
		if (on) {
			setShouldRender(true);
		}
	}, [on]);
	function handleAnimationEnd() {
		setShouldRender(on);
	}
	return (
		shouldRender && <Wrapper on={on} onAnimationEnd={handleAnimationEnd} />
	);
}

const fadeIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
`;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 300px;
	background: #1e1e1e;
	animation: ${props => (props.on ? fadeIn : fadeOut)} 300ms both;
`;

export default Modal;
