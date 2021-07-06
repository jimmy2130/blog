import styled from 'styled-components'

const Demo = ({color}) => {
  return (
    <Test
      style={{'--color': color}}
    >
      Such a neat demo!
    </Test>
  )
}

const Test = styled.div`
  width: fit-content;
  margin: 8px auto;
  border-radius: 4px;
  padding: 16px;
  background: DarkSeaGreen;
  color: var(--color);
`

export default Demo;