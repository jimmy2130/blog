import React from 'react';

export function useMouseHover(
	ref: React.RefObject<HTMLButtonElement>,
	mouseEnterCallback: () => void,
	mouseLeaveCallback: () => void,
) {
	React.useEffect(() => {
		function handleMouseEnter() {
			mouseEnterCallback();
		}
		function handleMouseLeave() {
			mouseLeaveCallback();
		}
		const elem = ref.current;
		if (!elem) {
			return;
		}
		elem.addEventListener('mouseenter', handleMouseEnter);
		elem.addEventListener('mouseleave', handleMouseLeave);
		return () => {
			elem.removeEventListener('mouseenter', handleMouseEnter);
			elem.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [mouseEnterCallback, mouseLeaveCallback, ref]);
}
