import { rem } from 'polished'

export type FontSizesType = {
  sm: string
  md: string
  lg: string
}

const fontSizes: FontSizesType = {
  sm: rem(14),
  md: rem(16),
  lg: rem(20),
}

export default fontSizes