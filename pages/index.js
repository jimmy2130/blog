import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../src/utils/mdx'
import styled from 'styled-components'
import Layout from '../src/components/Layout'
import { QUERIES } from '../src/constants'

function Home({ allPostsData }) {

  return (
    <Layout>
      <Head>
        <title>My Blog</title>
      </Head>
      <Main>
      {
        allPostsData.map(post => {
          return (
            <Link href={`/blog/${post.id}`} passHref key={post.id}>
              <BlogLink>
                <PreviewWrapper>
                  <PreviewTitle>{post.title}</PreviewTitle>
                  <PreviewDescription>{post.description}</PreviewDescription>
                  <PreviewAction>閱讀更多...</PreviewAction>
                </PreviewWrapper>
              </BlogLink>
            </Link>
          )
        })
      }
      </Main>
    </Layout>
  )
}

const Wrapper = styled.div`
  min-height: 100%;
`

const Main = styled.main`
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  // padding-bottom: 512px;
`

const BlogLink = styled.a`
  text-decoration: none;
  &:focus {
    outline-offset: -8px;
  }
`

const PreviewWrapper = styled.div`
  padding: 24px 32px;
  margin-bottom: 36px;
  border: 1px solid var(--color-gray-600);
  border-radius: 4px;
  cursor: pointer;
`

const PreviewTitle = styled.h1`
  font-size: calc(32 / 16 * 1rem);
  font-weight: 700;
  color: var(--color-gray-1000);
  margin-bottom: 24px;
`

const PreviewDescription = styled.p`
  text-align: justify;
  font-size: calc(16 / 16 * 1rem);
  color: var(--color-gray-700);
  margin-bottom: 24px;
`

const PreviewAction = styled.p`
  font-size: calc(16 / 16 * 1rem);
  font-weight: 700;
  color: var(--color-gray-1000); 

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  } 
`

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  // console.log(allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}

export default Home
