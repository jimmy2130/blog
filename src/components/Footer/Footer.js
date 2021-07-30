import styled from 'styled-components'
import {QUERIES} from '../../constants'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Footer = () => {
  return (
    <Wrapper>      
      <Copyright>
        <MaxWidthWrapper>
          <Content>© 2021 Jimmy Chen. All Rights Reserved.</Content>
        </MaxWidthWrapper>
      </Copyright>      
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 240px;
  background: inherit;
  padding-top: 20px;
  padding-bottom: 20px;

  @media ${QUERIES.phoneAndDown} {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`

const Content = styled.div`
  text-align: center;
  color: var(--color-gray-700);
`

export default Footer