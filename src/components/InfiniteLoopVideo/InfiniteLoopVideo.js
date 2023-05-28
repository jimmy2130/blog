import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

function InfiniteLoopVideo({ src, width, type = 'video/mp4' }) {
	const videoRef = React.useRef();
	const iconWrapperRef = React.useRef();
	const [isPlaying, setIsPlaying] = React.useState(true);
	const [showIcon, setShowIcon] = React.useState(false);
	function toggle() {
		setIsPlaying(!isPlaying);
	}
	React.useEffect(() => {
		if (isPlaying) {
			videoRef.current.play();
		} else {
			videoRef.current.pause();
		}
	}, [isPlaying]);
	React.useEffect(() => {
		function handleMouseEnter() {
			setShowIcon(true);
		}
		function handleMouseLeave() {
			setShowIcon(false);
		}
		const node = iconWrapperRef.current;
		node.addEventListener('mouseenter', handleMouseEnter);
		node.addEventListener('mouseleave', handleMouseLeave);
		return () => {
			node.removeEventListener('mouseenter', handleMouseEnter);
			node.removeEventListener('mouseleave', handleMouseLeave);
		};
	});
	return (
		<Wrapper style={{ '--width': width ? `${width}px` : 'fit-content' }}>
			<video autoPlay muted loop ref={videoRef} disablePictureInPicture>
				<source src={src} type={type} />
			</video>
			<IconWrapper onClick={toggle} ref={iconWrapperRef}>
				{showIcon && (
					<IconBackground>
						<Icon
							id={isPlaying ? 'pause' : 'play'}
							color="white"
							size="32"
							style={{ transform: isPlaying ? undefined : 'translateX(2px)' }}
						/>
					</IconBackground>
				)}
			</IconWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	border-radius: 4px;
	/* video element has 4px of border-radius */
	overflow: hidden;
	box-shadow: var(--shadow-elevation-medium);
	width: var(--width);
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 60px;
`;

const IconWrapper = styled.div`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	display: grid;
	place-content: center;

	&:hover {
		cursor: pointer;
	}
`;

const IconBackground = styled.div`
	width: 64px;
	height: 64px;
	border-radius: 50%;
	background: rgba(0 0 0 / 0.5);
	display: grid;
	place-content: center;
`;

export default InfiniteLoopVideo;
