import { useState } from 'react'
import { Button, Container } from '../../components'
import { IconNameType } from '../../components/Icon'
import { Job } from './components'
import { StyledJobs, StyledLoadMore } from './styled'

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

  const [showMore, setShowMore] = useState<boolean>(false)

  const handleButtonClick = (): void => {
    setShowMore(true)
  }

  const jobs = showMore ? data : data.slice(0, 12)
  
  return (
    <Container>
      <StyledJobs>
        {!!jobs?.length && jobs.map((job) => {
          return (
            <Job key={job.id} job={job} />
          )})}
      </StyledJobs>
      {!showMore && (
        <StyledLoadMore>
          <Button 
            template='primary' 
            title='Load More' 
            onClick={handleButtonClick}
          />
        </StyledLoadMore>
      )}
    </Container>
  )
}

export default Jobs