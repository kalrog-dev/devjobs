import { StyledButton, StyledButtonTitle } from './styled'

export type Props = {
  template: 'primary' | 'light' | 'dark'
  title: string
}

const Button: React.FC<Props> = ({ template, title }) => {
  return (
    <StyledButton template={template}>
      {title && <StyledButtonTitle>{title}</StyledButtonTitle>}
    </StyledButton>
  )
}

export default Button