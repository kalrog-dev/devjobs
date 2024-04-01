import { 
  StyledJob,
  StyledJobHeader,
  StyledTime,
  StyledContract,
  StyledTitle,
  StyledCompany,
  StyledLocation,
} from './styled'

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
  job: JobType,
}

const Job: React.FC<Props> = ({ job }) => {
  if (!job) return null
  
  return (
    <StyledJob>
      <StyledJobHeader>
        <StyledTime>{job.postedAt}</StyledTime>
        <StyledContract>{job.contract}</StyledContract>
      </StyledJobHeader>
      <StyledTitle>{job.position}</StyledTitle>
      <StyledCompany>{job.company}</StyledCompany>
      <StyledLocation>{job.location}</StyledLocation>
    </StyledJob>
  )
}

export default Job