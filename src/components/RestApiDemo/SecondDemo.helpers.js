import React from 'react';

export function useMouseHover(ref, mouseEnterCallback, mouseLeaveCallback) {
	React.useEffect(() => {
		function handleMouseEnter() {
			mouseEnterCallback();
		}
		function handleMouseLeave() {
			mouseLeaveCallback();
		}
		ref.current.addEventListener('mouseenter', handleMouseEnter);
		ref.current.addEventListener('mouseleave', handleMouseLeave);
		return () => {
			ref.current.removeEventListener('mouseenter', handleMouseEnter);
			ref.current.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, []);
}
