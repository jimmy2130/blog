import React from 'react';

export default function useTimer(running) {
	const [time, setTime] = React.useState(0);

	function restart() {
		setTime(0);
	}

	React.useEffect(() => {
		let timeoutId;
		if (running && time < 99 * 60 + 59) {
			timeoutId = window.setTimeout(() => setTime(time + 1), 1000);
		}
		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [running, time]);
	return [time, restart];
}
