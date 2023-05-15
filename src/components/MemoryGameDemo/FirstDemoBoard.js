import React from 'react';
import styled from 'styled-components';
import Triangle from './Triangle';
import Circle from './Circle';

const TRANSITION = {
	'cover-cover': { x: 134 - 234, y: 81 - 181 },
	'cover-inactive': { x: 134 - 234, y: 281 - 181 },
	cover: { x: 234 - 234, y: 181 - 181 },
	active: { x: 394 - 234, y: 181 - 181 },
	'active-cover': { x: 494 - 234, y: 81 - 181 },
	'active-inactive': { x: 494 - 234, y: 281 - 181 },
};

const MIDDLE_CIRCLE = ['cover', 'active'];

function firstDemoBoard({ triangleState, circleState }) {
	return (
		<svg
			width="629"
			viewBox="0 0 629 362"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="629" height="362" rx="32" fill="#F2F2F2" />
			<circle cx="234" cy="181" r="60" fill="#BDC1C3" />
			<circle cx="134" cy="81" r="40" fill="#BDC1C3" />
			<circle cx="134" cy="281" r="40" fill="#BDC1C3" />
			<circle cx="494" cy="81" r="40" fill="#BDC1C3" />
			<circle cx="494" cy="281" r="40" fill="#BDC1C3" />
			<circle cx="394" cy="181" r="60" fill="#BDC1C3" />
			<path
				d="M236.52 207.96C230.973 207.96 226.2 206.84 222.2 204.6C218.2 202.36 215.133 199.16 213 195C210.867 190.84 209.8 185.933 209.8 180.28C209.8 174.627 210.893 169.747 213.08 165.64C215.32 161.48 218.467 158.28 222.52 156.04C226.573 153.747 231.347 152.6 236.84 152.6C241.907 152.6 246.307 153.72 250.04 155.96C253.827 158.2 256.733 161.213 258.76 165L247.56 169.08C246.387 166.893 244.787 165.347 242.76 164.44C240.733 163.48 238.627 163 236.44 163C233.987 163 231.747 163.693 229.72 165.08C227.693 166.413 226.093 168.387 224.92 171C223.747 173.56 223.16 176.653 223.16 180.28C223.16 185.88 224.44 190.173 227 193.16C229.613 196.093 232.813 197.56 236.6 197.56C238.627 197.56 240.707 197.133 242.84 196.28C245.027 195.427 246.733 193.853 247.96 191.56L259.08 195.64C256.947 199.427 253.907 202.44 249.96 204.68C246.067 206.867 241.587 207.96 236.52 207.96Z"
				fill="#304859"
			/>
			<path
				d="M121.76 94.48C118.987 94.48 116.6 93.92 114.6 92.8C112.6 91.68 111.067 90.08 110 88C108.933 85.92 108.4 83.4667 108.4 80.64C108.4 77.8133 108.947 75.3733 110.04 73.32C111.16 71.24 112.733 69.64 114.76 68.52C116.787 67.3733 119.173 66.8 121.92 66.8C124.453 66.8 126.653 67.36 128.52 68.48C130.413 69.6 131.867 71.1067 132.88 73L127.28 75.04C126.693 73.9467 125.893 73.1733 124.88 72.72C123.867 72.24 122.813 72 121.72 72C120.493 72 119.373 72.3467 118.36 73.04C117.347 73.7067 116.547 74.6933 115.96 76C115.373 77.28 115.08 78.8267 115.08 80.64C115.08 83.44 115.72 85.5867 117 87.08C118.307 88.5467 119.907 89.28 121.8 89.28C122.813 89.28 123.853 89.0667 124.92 88.64C126.013 88.2133 126.867 87.4267 127.48 86.28L133.04 88.32C131.973 90.2133 130.453 91.72 128.48 92.84C126.533 93.9333 124.293 94.48 121.76 94.48ZM147.932 94.48C145.159 94.48 142.772 93.92 140.772 92.8C138.772 91.68 137.239 90.08 136.172 88C135.105 85.92 134.572 83.4667 134.572 80.64C134.572 77.8133 135.119 75.3733 136.212 73.32C137.332 71.24 138.905 69.64 140.932 68.52C142.959 67.3733 145.345 66.8 148.092 66.8C150.625 66.8 152.825 67.36 154.692 68.48C156.585 69.6 158.039 71.1067 159.052 73L153.452 75.04C152.865 73.9467 152.065 73.1733 151.052 72.72C150.039 72.24 148.985 72 147.892 72C146.665 72 145.545 72.3467 144.532 73.04C143.519 73.7067 142.719 74.6933 142.132 76C141.545 77.28 141.252 78.8267 141.252 80.64C141.252 83.44 141.892 85.5867 143.172 87.08C144.479 88.5467 146.079 89.28 147.972 89.28C148.985 89.28 150.025 89.0667 151.092 88.64C152.185 88.2133 153.039 87.4267 153.652 86.28L159.212 88.32C158.145 90.2133 156.625 91.72 154.652 92.84C152.705 93.9333 150.465 94.48 147.932 94.48Z"
				fill="#304859"
			/>
			<path
				d="M467.2 94L477.32 67.28H484.28L494.4 94H487.52L485.92 89.24H475.68L474.08 94H467.2ZM477.4 84.12H484.2L480.76 73.96L477.4 84.12ZM507.893 94.48C505.119 94.48 502.733 93.92 500.733 92.8C498.733 91.68 497.199 90.08 496.133 88C495.066 85.92 494.533 83.4667 494.533 80.64C494.533 77.8133 495.079 75.3733 496.173 73.32C497.293 71.24 498.866 69.64 500.893 68.52C502.919 67.3733 505.306 66.8 508.053 66.8C510.586 66.8 512.786 67.36 514.653 68.48C516.546 69.6 517.999 71.1067 519.013 73L513.413 75.04C512.826 73.9467 512.026 73.1733 511.013 72.72C509.999 72.24 508.946 72 507.853 72C506.626 72 505.506 72.3467 504.493 73.04C503.479 73.7067 502.679 74.6933 502.093 76C501.506 77.28 501.213 78.8267 501.213 80.64C501.213 83.44 501.853 85.5867 503.133 87.08C504.439 88.5467 506.039 89.28 507.933 89.28C508.946 89.28 509.986 89.0667 511.053 88.64C512.146 88.2133 512.999 87.4267 513.613 86.28L519.173 88.32C518.106 90.2133 516.586 91.72 514.613 92.84C512.666 93.9333 510.426 94.48 507.893 94.48Z"
				fill="#304859"
			/>
			<path
				d="M471.2 294L481.32 267.28H488.28L498.4 294H491.52L489.92 289.24H479.68L478.08 294H471.2ZM481.4 284.12H488.2L484.76 273.96L481.4 284.12ZM500.897 294V289.04H504.657V272.24H500.897V267.28H514.657V272.24H510.977V289.04H514.657V294H500.897Z"
				fill="#304859"
			/>
			<path
				d="M125.76 294.48C122.987 294.48 120.6 293.92 118.6 292.8C116.6 291.68 115.067 290.08 114 288C112.933 285.92 112.4 283.467 112.4 280.64C112.4 277.813 112.947 275.373 114.04 273.32C115.16 271.24 116.733 269.64 118.76 268.52C120.787 267.373 123.173 266.8 125.92 266.8C128.453 266.8 130.653 267.36 132.52 268.48C134.413 269.6 135.867 271.107 136.88 273L131.28 275.04C130.693 273.947 129.893 273.173 128.88 272.72C127.867 272.24 126.813 272 125.72 272C124.493 272 123.373 272.347 122.36 273.04C121.347 273.707 120.547 274.693 119.96 276C119.373 277.28 119.08 278.827 119.08 280.64C119.08 283.44 119.72 285.587 121 287.08C122.307 288.547 123.907 289.28 125.8 289.28C126.813 289.28 127.853 289.067 128.92 288.64C130.013 288.213 130.867 287.427 131.48 286.28L137.04 288.32C135.973 290.213 134.453 291.72 132.48 292.84C130.533 293.933 128.293 294.48 125.76 294.48ZM140.194 294V289.04H143.954V272.24H140.194V267.28H153.954V272.24H150.274V289.04H153.954V294H140.194Z"
				fill="#304859"
			/>
			<path
				d="M367.4 207L387.64 153.56H401.56L421.8 207H408.04L404.84 197.48H384.36L381.16 207H367.4ZM387.8 187.24H401.4L394.52 166.92L387.8 187.24Z"
				fill="#304859"
			/>
			<Circle
				cx={234}
				cy={181}
				scale={MIDDLE_CIRCLE.includes(circleState) ? 1 : 46 / 67}
				{...TRANSITION[circleState]}
			/>
			<Triangle
				cx={234}
				cy={181}
				scale={MIDDLE_CIRCLE.includes(triangleState) ? 1 : 56 / 80}
				{...TRANSITION[triangleState]}
			/>
		</svg>
	);
}

export default firstDemoBoard;
