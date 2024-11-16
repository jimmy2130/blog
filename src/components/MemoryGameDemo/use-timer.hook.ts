import React from 'react';

export default function useTimer(running: boolean): [number, () => void] {
	const [time, setTime] = React.useState(0);

	function restart() {
		setTime(0);
	}

	React.useEffect(() => {
		let timeoutId: number;
		if (running && time < 99 * 60 + 59) {
			timeoutId = window.setTimeout(() => setTime(time + 1), 1000);
		}
		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [running, time]);
	return [time, restart];
}
