import styled from 'styled-components'
import {COLORS, QUERIES} from '../../constants'

const MajorHeading = styled.h2`
  font-size: calc(32 / 16 * 1rem);
  color: ${COLORS.gray[1000]};
  margin-top: 48px;
  margin-bottom: 16px;
`

const NormalHeading = styled.h3`
  font-size: calc(25 / 16 * 1rem);
  color: ${COLORS.gray[1000]};
  margin-top: 48px;
  margin-bottom: 12px;
`
export { MajorHeading, NormalHeading }

