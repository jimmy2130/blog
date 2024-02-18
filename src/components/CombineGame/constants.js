export const SHAPES = [Circle, Square, Triangle];
export const COLORS = ['#dc2626', '#fbbf24', '#0284c7'];
export const BACKGROUND_COLORS = ['#e4e4e7', '#a1a1aa', '#52525b'];
export const TABLET_MAX_WIDTH = 440;
export const MESSAGES = [
	['圓形', '正方形', '三角形'],
	['紅色', '黃色', '藍色'],
	['背景白色', '背景灰色', '背景黑色'],
];

function Circle({ fill }) {
	return <circle cx="100" cy="100" r="60" fill={fill} />;
}

function Square({ fill }) {
	const size = 115;
	const distance = (200 - size) / 2;
	return (
		<rect width={size} height={size} x={distance} y={distance} fill={fill} />
	);
}

function Triangle({ fill }) {
	const cx = 100;
	const cy = 115;
	const r = 75;
	const x1 = cx - (r * Math.sqrt(3)) / 2;
	const y1 = cy + r / 2;
	const x2 = cx + 1;
	const y2 = cy - r;
	const x3 = cx + (r * Math.sqrt(3)) / 2;
	const y3 = cy + r / 2;
	const d = `M${x1} ${y1}L${x2} ${y2}L${x3} ${y3}H${x1}Z`;
	return <path d={d} fill={fill} />;
}
