import React from 'react';
import styled from 'styled-components';

function Wave() {
	return (
		<Wrapper>
			<Svg
				preserveAspectRatio="none"
				width="1512"
				height="283"
				viewBox="0 0 1512 283"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 70.302L36.12 72.1233C72.24 73.7929 144.48 77.4354 216.384 81.2298C288.456 85.0241 360.024 88.9703 432.096 83.5064C504 77.8908 576.24 62.7133 648.144 46.0182C720.216 29.323 791.784 11.1101 863.856 4.28029C935.76 -2.54955 1008 2.0037 1079.9 9.89595C1151.98 17.6364 1223.54 28.8677 1295.62 37.6706C1367.52 46.4735 1439.76 53.1515 1475.88 56.3388L1512 59.6778V282.786H1475.88C1439.76 282.786 1367.52 282.786 1295.62 282.786C1223.54 282.786 1151.98 282.786 1079.9 282.786C1008 282.786 935.76 282.786 863.856 282.786C791.784 282.786 720.216 282.786 648.144 282.786C576.24 282.786 504 282.786 432.096 282.786C360.024 282.786 288.456 282.786 216.384 282.786C144.48 282.786 72.24 282.786 36.12 282.786H0V70.302Z"
					fill="var(--color-primary-400)"
				/>
				<path
					d="M0 41.4636L36.12 41.0083C72.24 40.4012 144.48 39.4906 216.384 51.329C288.456 63.1674 360.024 88.0583 432.096 98.6825C504 109.307 576.24 105.664 648.144 105.512C720.216 105.209 791.784 108.244 863.856 97.9236C935.76 87.4512 1008 63.7744 1079.9 66.9617C1151.98 70.3007 1223.54 100.656 1295.62 115.074C1367.52 129.493 1439.76 127.975 1475.88 127.216L1512 126.457V282.785H1475.88C1439.76 282.785 1367.52 282.785 1295.62 282.785C1223.54 282.785 1151.98 282.785 1079.9 282.785C1008 282.785 935.76 282.785 863.856 282.785C791.784 282.785 720.216 282.785 648.144 282.785C576.24 282.785 504 282.785 432.096 282.785C360.024 282.785 288.456 282.785 216.384 282.785C144.48 282.785 72.24 282.785 36.12 282.785H0V41.4636Z"
					fill="var(--color-primary-300)"
				/>
				<path
					d="M0 140.118L36.12 135.869C72.24 131.467 144.48 122.968 216.384 117.807C288.456 112.799 360.024 111.281 432.096 120.084C504 129.039 576.24 148.162 648.144 154.537C720.216 160.911 791.784 154.233 863.856 145.43C935.76 136.627 1008 125.396 1079.9 125.396C1151.98 125.396 1223.54 136.627 1295.62 136.324C1367.52 136.02 1439.76 124.485 1475.88 118.566L1512 112.799V282.786H1475.88C1439.76 282.786 1367.52 282.786 1295.62 282.786C1223.54 282.786 1151.98 282.786 1079.9 282.786C1008 282.786 935.76 282.786 863.856 282.786C791.784 282.786 720.216 282.786 648.144 282.786C576.24 282.786 504 282.786 432.096 282.786C360.024 282.786 288.456 282.786 216.384 282.786C144.48 282.786 72.24 282.786 36.12 282.786H0V140.118Z"
					fill="var(--color-primary-200)"
				/>
				<path
					d="M0 222.075H36.12C72.24 222.075 144.48 222.075 216.384 221.316C288.456 220.557 360.024 219.039 432.096 214.486C504 209.933 576.24 202.344 648.144 196.273C720.216 190.202 791.784 185.649 863.856 187.47C935.76 189.14 1008 197.335 1079.9 200.826C1151.98 204.317 1223.54 203.406 1295.62 208.415C1367.52 213.424 1439.76 224.655 1475.88 230.119L1512 235.734V282.784H1475.88C1439.76 282.784 1367.52 282.784 1295.62 282.784C1223.54 282.784 1151.98 282.784 1079.9 282.784C1008 282.784 935.76 282.784 863.856 282.784C791.784 282.784 720.216 282.784 648.144 282.784C576.24 282.784 504 282.784 432.096 282.784C360.024 282.784 288.456 282.784 216.384 282.784C144.48 282.784 72.24 282.784 36.12 282.784H0V222.075Z"
					fill="var(--color-primary-100)"
				/>
			</Svg>
		</Wrapper>
	);
}

// if(100% >= 1512px) {
// 	width = 100%
// } else {
// 	width = 100% + (1512px - 100%) * 1 / 10
// }

const Wrapper = styled.div`
	/* control the wave width */
	width: max(100%, calc(100% + (1512px - 100%) / 7));
`;

const Svg = styled.svg`
	width: 100%;
`;

export default Wave;
