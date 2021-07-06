import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../src/components/Layout'

import { COLORS, QUERIES } from '../src/constants'

function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <Wrapper>
        <Title>關於我</Title>
        <Text>飛經長時才府標美改的！沒半錢？沒留色不自活。學際連作政。理技面友料性這無便。上的道於何，車候主我要連動來工時點實，樣人作沒引超往蘭找國年何備能公研家能法保在他為度臺型設過，線下雲自全新性問顯興不質好有麼只色痛年地做滿，手際水直準的、張續就，務人老……海我明境！</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque debitis pariatur amet numquam vel corrupti provident temporibus. Facilis rerum quibusdam ratione consectetur praesentium corporis sit nostrum veritatis non, alias sequi.</Text>
        <Text>飛經長時才府標美改的！沒半錢？沒留色不自活。學際連作政。理技面友料性這無便。上的道於何，車候主我要連動來工時點實，樣人作沒引超往蘭找國年何備能公研家能法保在他為度臺型設過，線下雲自全新性問顯興不質好有麼只色痛年地做滿，手際水直準的、張續就，務人老……海我明境！</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque debitis pariatur amet numquam vel corrupti provident temporibus. Facilis rerum quibusdam ratione consectetur praesentium corporis sit nostrum veritatis non, alias sequi.</Text>
        <Text>飛經長時才府標美改的！沒半錢？沒留色不自活。學際連作政。理技面友料性這無便。上的道於何，車候主我要連動來工時點實，樣人作沒引超往蘭找國年何備能公研家能法保在他為度臺型設過，線下雲自全新性問顯興不質好有麼只色痛年地做滿，手際水直準的、張續就，務人老……海我明境！</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque debitis pariatur amet numquam vel corrupti provident temporibus. Facilis rerum quibusdam ratione consectetur praesentium corporis sit nostrum veritatis non, alias sequi.</Text>
        <Text>飛經長時才府標美改的！沒半錢？沒留色不自活。學際連作政。理技面友料性這無便。上的道於何，車候主我要連動來工時點實，樣人作沒引超往蘭找國年何備能公研家能法保在他為度臺型設過，線下雲自全新性問顯興不質好有麼只色痛年地做滿，手際水直準的、張續就，務人老……海我明境！</Text>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 0 256px;
  /*border: 1px solid;*/
`

const Title = styled.h1`
  text-align: center;
  font-size: calc(36 / 16 * 1rem);
  font-weight: 700;
  color: ${COLORS.gray[1000]};
  margin-bottom: 32px;
`

const Text = styled.p`
  font-size: calc(19 / 16 * 1rem);
  color: ${COLORS.gray[1000]};
  margin-bottom: 20px;
`

export default About
