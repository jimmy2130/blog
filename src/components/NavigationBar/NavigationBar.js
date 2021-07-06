import { useRouter } from 'next/router'
import styled from 'styled-components'
import MaxWidthWrapper from '../MaxWidthWrapper'
import NavLink from '../NavLink'
import {COLORS, QUERIES} from '../../constants'

const NavigationBar = ({fixed}) => {
  const router = useRouter()
  return (
    <Wrapper>
      <MaxWidthWrapper>       
        <NavList>
          <li>
            <NavLink path="/">Home</NavLink>
          </li>
          <li>            
            <NavLink path="/about">About</NavLink>
          </li>
        </NavList>        
      </MaxWidthWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 105px;
  background-color: ${COLORS.gray[100]};

`

const NavList = styled.ul`
  display: flex;
  gap: 48px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`

export default NavigationBar


