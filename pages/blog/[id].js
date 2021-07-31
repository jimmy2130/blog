import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../src/utils/mdx'
import {getMDXComponent} from 'mdx-bundler/client'
import Layout from '../../src/components/Layout'
import {MajorHeading, NormalHeading} from '../../src/components/Heading'
import Paragraph from '../../src/components/Paragraph'
import Link from '../../src/components/Link'
import Em from '../../src/components/Em'
import Sidenote from '../../src/components/Sidenote'
import CodeBox from '../../src/components/CodeBox'
import { QUERIES } from '../../src/constants'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

const Code = styled.code`
  background: var(--color-gray-200);
  padding: 2px;
  border-radius: 4px;
  color: var(--color-gray-1000);

  pre & {
    display: block;
    padding: 32px;
    margin-left: -32px;
    margin-right: -32px;
    margin-bottom: 20px;
    border-radius: 8px;
    background: var(--color-gray-200);
    color: var(--color-gray-1000);
    font-size: calc(17 / 16 * 1rem);
    line-height: 1.5;
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
`

const OrderedList = styled.ol`
  counter-reset: counts 0;
  margin-bottom: 20px;
`

const UnorderedList = styled.ul`
  margin-bottom: 20px;
`

const List = styled.li`
  display: flex;
  align-items: baseline;
  font-size: calc(19 / 16 * 1rem);
  color: var(--color-gray-1000);
  margin-bottom: 16px;

  ${OrderedList} & {
    counter-increment: counts 1;
    &:before {
      content: counter(counts) ".";
      margin-right: 8px;
      color: var(--color-primary);
      font-weight: 700;
    }
  }

  ${UnorderedList} & {
    &:before {
      content: "＊";
      margin-left: -3px;
      margin-right: 8px;
      color: var(--color-primary);
      font-weight: 700;
    }
  }
`



const Pre = (props) => {
  // console.log(props.children.props.className.split('-')[1])  //language
  // console.log(props.children.props.children)  //code
  return <pre {...props} />
}

const components = {
  p: Paragraph,
  em: Em,
  Sidenote: Sidenote,
  pre: CodeBox,
  code: Code,
  img: Image,
  h2: MajorHeading,
  h3: NormalHeading,
  ol: OrderedList,
  ul: UnorderedList,
  li: List,
  a: Link,
  // replace the tags in .mdx file with my components
  // 這裡的樣式，css-tag是完全正確的，可以套用contextual style
  // 這裡放的是一般常見的tag，如果是一次性使用的component，在.mdx裡面用import
}

function Post({ postData }) {
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  const { code, frontmatter } = postData
  // const Component = getMDXComponent(code)
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      
      <PostWrapper>
        <Title>{frontmatter.title}</Title>
        <Component components={components}/>
      </PostWrapper>
    </Layout>
  )
}

const PostWrapper = styled.main`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 0;
`

const Title = styled.h1`
  text-align: center;
  font-size: calc(36 / 16 * 1rem);
  font-weight: 700;
  color: var(--color-gray-1000);
  margin-bottom: 72px;
`

export default Post