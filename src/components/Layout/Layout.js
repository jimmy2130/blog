import React from 'react'
import styled from 'styled-components'
import MaxWidthWrapper from '../MaxWidthWrapper'
import NavigationBar from '../NavigationBar'
import Footer from '../Footer'
import {COLORS} from '../../constants'

function Layout({children}) {

  return (
    <Wrapper>
      <NavigationBar/>
        <MaxWidthWrapper>
          {children}
        </MaxWidthWrapper>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: ${COLORS.gray[100]};
`

export default Layout