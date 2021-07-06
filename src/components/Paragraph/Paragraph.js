import styled from 'styled-components'
import {Wrapper as SidenoteWrapper} from '../Sidenote'
import {COLORS, QUERIES} from '../../constants'

const Paragraph = styled.p`
  font-size: calc(19 / 16 * 1rem);
  color: ${COLORS.gray[1000]};
  margin-bottom: 20px;

  ${SidenoteWrapper} & {
    line-height: 1.5;
    font-size: calc(17 / 16 * 1rem);
    margin-bottom: 16px;
  }

  ${SidenoteWrapper} &:last-child {
    margin-bottom: 0;
  }
`

export default Paragraph;