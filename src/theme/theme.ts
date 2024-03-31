import {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radius,
  zIndex,
} from './variables'

import { 
  ColorsType, 
  FontSizesType, 
  FontWeightsType, 
  LineHeightsType, 
  RadiusType,
  ZIndexType,
} from './variables'

export interface ThemeInterface {
  colors: ColorsType
  fontSizes: FontSizesType
  fontWeights: FontWeightsType
  lineHeights: LineHeightsType
  radius: RadiusType
  zIndex: ZIndexType
}

export const theme: ThemeInterface = {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radius,
  zIndex,
}