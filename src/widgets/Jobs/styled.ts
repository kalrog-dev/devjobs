import { rem } from 'polished'
import styled from 'styled-components'

export const StyledJobs = styled.section`
  display: grid;
  gap: ${rem(65)} ${rem(30)};
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: ${rem(56)};
`

export const StyledLoadMore = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rem(104)};
`