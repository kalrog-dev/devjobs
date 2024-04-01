import styled from 'styled-components'
import { rem, size } from 'polished'

import { Icon } from '../../../../components'
import { theme } from '../../../../theme/theme'

export const StyledJob = styled.article`
  position: relative;
  background-color: ${theme.colors.white};
  border-radius: ${theme.radius.lg};
  padding: ${rem(50)} ${rem(32)} ${rem(36)};
`

export const StyledJobHeader = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.darkGray};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.md};
  margin-bottom: ${rem(16)};
`

export const StyledTime = styled.span`
  &::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    background-color: ${theme.colors.darkGray};
    margin-inline: ${rem(12)};
    border-radius: 50%;
    ${size(4)};
  }
`

export const StyledContract = styled.span``

export const StyledTitle = styled.h2`
  color: ${theme.colors.veryDarkBlue};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.lg};
  margin-bottom: ${rem(16)};
`

export const StyledCompany = styled.p`
  color: ${theme.colors.darkGray};
  margin-bottom: ${rem(40)};
`

export const StyledLocation = styled.p`
  color: ${theme.colors.violet};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.sm};
`

export const StyledIcon = styled(Icon)``