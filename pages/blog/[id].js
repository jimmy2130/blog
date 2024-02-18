import React from 'react';
import Head from 'next/head';
import { getPostData, getAllPostIds } from '@/helpers/post.helpers';
import { MDXRemote } from 'next-mdx-remote';
import COMPONENT_MAP from '@/helpers/mdx-components';
import BlogPostPage from '@/components/BlogPostPage';

export async function getStaticProps({ params }) {
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

function Post({ mdxSource, componentNames }) {
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
