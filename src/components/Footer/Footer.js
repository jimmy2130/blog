import styled from 'styled-components'
import {COLORS, QUERIES} from '../../constants'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Footer = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Content/>
      </MaxWidthWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 300px;
  padding-top: 64px;
  padding-bottom: 64px;
  margin-top: auto;
  background: ${COLORS.gray[1000]};

  @media ${QUERIES.phoneAndDown} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media ${QUERIES.phoneAndDown} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`

export default Footer