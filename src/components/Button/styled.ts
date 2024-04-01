import { rem, rgba } from 'polished'
import styled, { css } from 'styled-components'

import { theme } from '../../theme/theme'

import { Props } from '.'

const LIGHT_ACCENT_COLOR = 'violet'
const DARK_ACCENT_COLOR = 'white'

export const StyledButton = styled.button<
  Pick<Props, 'template'>
>`
  display: inline-block;
  font-family: inherit;
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.md};
  border: none;
  border-radius: ${theme.radius.md};
  padding: ${rem(16)} ${rem(40)};
  cursor: pointer;
  transition: background-color 0.1s ease-out;

  ${({ template }) => 
    template &&
    template === 'primary' &&
    css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.violet};

      &:hover {
        background-color: ${theme.colors.lightViolet};
      }
    `}
  
  ${({ template }) => 
    template &&
    template === 'light' &&
    css`
      color: ${theme.colors[LIGHT_ACCENT_COLOR]};
      background-color: ${rgba(theme.colors[LIGHT_ACCENT_COLOR], 0.1)};

      &:hover {
        background-color: ${rgba(theme.colors[LIGHT_ACCENT_COLOR], 0.35)};
      }
    `}

  ${({ template }) => 
    template &&
    template === 'dark' &&
    css`
      color: ${theme.colors[DARK_ACCENT_COLOR]};
      background-color: ${rgba(theme.colors[DARK_ACCENT_COLOR], 0.1)};

      &:hover {
        background-color: ${rgba(theme.colors[DARK_ACCENT_COLOR], 0.35)};
      }
    `}
`

export const StyledButtonTitle = styled.span``