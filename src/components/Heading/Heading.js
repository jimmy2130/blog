import styled from 'styled-components'
import {QUERIES} from '../../constants'

const MajorHeading = styled.h2`
  font-size: calc(32 / 16 * 1rem);
  color: var(--color-primary);
  margin-top: 48px;
  margin-bottom: 16px;
`

const NormalHeading = styled.h3`
  font-size: calc(25 / 16 * 1rem);
  color: var(--color-secondary);
  margin-top: 48px;
  margin-bottom: 12px;
`
export { MajorHeading, NormalHeading }

