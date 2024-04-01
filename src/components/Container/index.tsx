import { ReactNode } from 'react'

import { StyledContainer } from './styled'

export type Props = {
  children: ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container