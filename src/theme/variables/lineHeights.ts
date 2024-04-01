import { rem } from 'polished'

export type LineHeightsType = {
  sm: string
  md: string
  lg: string
  xl: string
}

const lineHeights: LineHeightsType = {
  sm: rem(18),
  md: rem(20),
  lg: rem(26),
  xl: rem(36),
}

export default lineHeights