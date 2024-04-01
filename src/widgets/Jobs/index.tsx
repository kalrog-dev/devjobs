import { Job } from './components'
import { StyledJobs } from './styled'

type JobType = {
  id: number
  company: string
  logo: string
  logoBackground: string
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
    <StyledJobs>
      {data.map(job => {
        return (
          <Job key={job.id} job={job} />
        )
      })}
    </StyledJobs>
  )
}

export default Jobs