import Head from 'next/head';
import AboutPage from '@/components/AboutPage';

import { getPostData } from '@/helpers/post.helpers';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import COMPONENT_MAP from '@/helpers/mdx-components';

export async function getStaticProps() {
	const { mdxSource, componentNames } = await getPostData('about');
	return { props: { mdxSource, componentNames } };
}

function About({
	mdxSource,
}: {
	mdxSource: MDXRemoteSerializeResult<
		Record<string, unknown>,
		Record<string, unknown>
	>;
}) {
	return (
		<>
			<Head>
				<title>關於我</title>
			</Head>
			<AboutPage>
				{/* @ts-ignore */}
				<MDXRemote {...mdxSource} components={COMPONENT_MAP} />
			</AboutPage>
		</>
	);
}

export default About;
