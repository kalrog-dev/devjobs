import { rem } from 'polished'
import styled from 'styled-components'

import { theme } from '../../theme/theme'

export const StyledHeader = styled.header`
  height: ${rem(160)};
  width: 100%;
  margin-bottom: ${rem(148)};
`

export const StyledBackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  margin-inline: auto;
  z-index: ${theme.zIndex.above};
`

export const StyledHeaderContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${rem(44)};
  z-index: ${theme.zIndex.higher};
`

export const StyledHeaderLogo = styled.img``

export const StyledToggle = styled.span`
  color: ${theme.colors.white};
`