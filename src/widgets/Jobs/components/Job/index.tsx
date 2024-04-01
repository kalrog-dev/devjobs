import { JobType } from '../..'
import { 
  StyledJob,
  StyledJobHeader,
  StyledTime,
  StyledContract,
  StyledTitle,
  StyledCompany,
  StyledLocation,
  StyledIcon,
} from './styled'

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
      <StyledIcon iconName={job.logo} />
    </StyledJob>
  )
}

export default Job