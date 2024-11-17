import React from 'react';
import Head from 'next/head';
import { getPostData, getAllPostIds } from '@/helpers/post.helpers';
import { MDXRemote } from 'next-mdx-remote';
import COMPONENT_MAP from '@/helpers/mdx-components';
import BlogPostPage from '@/components/BlogPostPage';
import { GetStaticPropsContext } from 'next';

export async function getStaticProps({ params }: GetStaticPropsContext) {
	if (typeof params?.id !== 'string') {
		return;
	}
	const { mdxSource, componentNames } = await getPostData(params.id);
	return { props: { mdxSource, componentNames } };
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

type Frontmatter = {
	title: string;
	description: string;
};

type MdxSource = {
	frontmatter: Frontmatter;
	compiledSource: string;
	scope: string;
};

function Post({ mdxSource }: { mdxSource: MdxSource }) {
	const { title, description } = mdxSource.frontmatter;
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<BlogPostPage title={title} subtitle={description}>
				<MDXRemote {...mdxSource} components={COMPONENT_MAP} />
			</BlogPostPage>
		</>
	);
}

export default Post;
