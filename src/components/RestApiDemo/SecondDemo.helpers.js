import React from 'react';

export function useMouseHover(ref, mouseEnterCallback, mouseLeaveCallback) {
	React.useEffect(() => {
		function handleMouseEnter() {
			mouseEnterCallback();
		}
		function handleMouseLeave() {
			mouseLeaveCallback();
		}
		const elem = ref.current;
		elem.addEventListener('mouseenter', handleMouseEnter);
		elem.addEventListener('mouseleave', handleMouseLeave);
		return () => {
			elem.removeEventListener('mouseenter', handleMouseEnter);
			elem.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, []);
}
