import { rem } from 'polished'

export type LineHeightsType = {
  sm: string
  md: string
  lg: string
}

const lineHeights: LineHeightsType = {
  sm: rem(18),
  md: rem(20),
  lg: rem(26),
}

export default lineHeights