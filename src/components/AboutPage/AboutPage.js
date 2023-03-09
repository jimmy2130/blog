import React from 'react';
import HeroSection from '../HeroSection';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Spacer from '../Spacer';
import Footer from '../Footer';

function AboutPage({ children }) {
	return (
		<>
			<HeroSection
				title="關於我"
				subtitle="關於我的介紹，包含了學歷、程式學習經歷，和工作經歷"
			/>
			<MaxWidthWrapper>{children}</MaxWidthWrapper>
			<Spacer size={500} axis="vertical" />
			<Footer />
		</>
	);
}

export default AboutPage;
