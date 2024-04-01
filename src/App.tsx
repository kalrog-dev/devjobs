import { Header, Jobs } from './widgets'
import data from './data/data.json'
import { JobType } from './widgets/Jobs'

const App = () => {

  return (
    <>
      <Header />
      <Jobs data={data as JobType[]}/>
    </>
  )
}

export default App
