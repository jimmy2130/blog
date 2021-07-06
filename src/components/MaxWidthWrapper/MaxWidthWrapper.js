import styled from 'styled-components'

function MaxWidthWrapper({children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(1rem, 14vw - 4rem, 4rem);
  padding-right: clamp(1rem, 14vw - 4rem, 4rem);
  /*border: 1px solid yellow;*/
  /* Hide the overflow: CodeBox, Sidenote */
  overflow: hidden;
`

export default MaxWidthWrapper