import { useRouter } from 'next/router'
import styled from 'styled-components'
import MaxWidthWrapper from '../MaxWidthWrapper'
import NavLink from '../NavLink'
import DarkModeToggle from '../DarkModeToggle'
import {QUERIES} from '../../constants'


const NavigationBar = ({fixed}) => {
  const router = useRouter()
  return (   
    <Wrapper>
      <MaxWidthWrapper>
        <NavBar>
          <Spacer/>
          <NavList>
            <li>
              <NavLink path="/">Home</NavLink>
            </li>
            <li>            
              <NavLink path="/about">About</NavLink>
            </li>
          </NavList>
          <DarkModeToggleWrapper>
            <DarkModeToggle/>
          </DarkModeToggleWrapper>
        </NavBar>
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
  background-color: var(--color-gray-100);
`

const NavBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`

const Spacer = styled.div`
`

const NavList = styled.ul`
  display: flex;
  gap: 48px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`

const DarkModeToggleWrapper = styled.div`
  justify-self: end;
  align-self: center;
`

export default NavigationBar


