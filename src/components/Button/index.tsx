import { StyledButton, StyledButtonTitle } from './styled'

export type Props = {
  template: 'primary' | 'light' | 'dark'
  title: string
  onClick: () => void
}

const Button: React.FC<Props> = ({ template, title, onClick }) => {
  return (
    <StyledButton template={template} onClick={onClick}>
      {title && <StyledButtonTitle>{title}</StyledButtonTitle>}
    </StyledButton>
  )
}

export default Button