import { rem, rgba } from 'polished'
import styled, { css } from 'styled-components'

import { theme } from '../../theme/theme'

import { Props } from '.'

export const StyledButton = styled.a<
  Pick<Props, 'template'>
>`
  display: inline-block;
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.md};
  border-radius: ${theme.radius.md};
  padding: ${rem(16)} ${rem(40)};

  ${({ template }) => 
    template &&
    template === 'primary' &&
    css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.violet};
    `}
  
  ${({ template }) => 
    template &&
    template === 'light' &&
    css`
      color: ${theme.colors.violet};
      background-color: ${rgba(theme.colors.violet, 0.1)};
    `}
`

export const StyledButtonTitle = styled.span``