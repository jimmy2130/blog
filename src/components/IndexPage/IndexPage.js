import React from 'react';
import HeroSection from '../HeroSection';
import Spacer from '../Spacer';
import Footer from '../Footer';

function IndexPage() {
	return (
		<>
			<HeroSection
				index={true}
				title={
					<>
						這裡，正在捕捉
						<br />
						成長的痕跡...
					</>
				}
				subtitle="前端網頁作品集與製作歷程紀錄"
			/>
			<Spacer size={700} />
			<Footer />
		</>
	);
}

export default IndexPage;
