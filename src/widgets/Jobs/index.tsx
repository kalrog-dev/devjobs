import { Container } from '../../components'
import { IconNameType } from '../../components/Icon'
import { Job } from './components'
import { StyledJobs } from './styled'

export type JobType = {
  id: number
  company: string
  logo: IconNameType
  position: string
  postedAt: string
  contract: string
  location: string
  website: string
  apply: string
  description: string
  requirements: {
    content: string
    items: string[]
  }
  role: {
    content: string
    items: string[]
  }
}

type Props = {
  data: JobType[],
}

const Jobs: React.FC<Props> = ({ data }) => {
  if (!data) return null
  
  return (
    <Container>
      <StyledJobs>
        {data.map((job) => {
          return (
            <Job key={job.id} job={job} />
          )
        })}
      </StyledJobs>
    </Container>
  )
}

export default Jobs