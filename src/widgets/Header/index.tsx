import { Container } from '../../components'
import { 
  StyledBackgroundImage, 
  StyledHeader, 
  StyledHeaderContent,
  StyledHeaderLogo,
  StyledToggle,
} from './styled'

import bgPattern from '../../assets/images/desktop/bg-pattern-header.svg'
import logo from '../../assets/images/desktop/logo.svg'

const Header: React.FC = () => {
  return (
      <Container>
        <StyledHeader>
          <StyledBackgroundImage src={bgPattern} alt='Background pattern' />
          <StyledHeaderContent>
            <StyledHeaderLogo src={logo} alt='Devjobs logo' />
            <StyledToggle>Toggle</StyledToggle>
          </StyledHeaderContent>
        </StyledHeader>
      </Container>
  )
}

export default Header