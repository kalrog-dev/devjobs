import { Button } from './components'
import { Jobs } from './widgets'
import data from './data/data.json'

const App = () => {

  return (
    <>
      <Button template='primary' title='Button' />
      <Button template='light' title='Button' />
      <Button template='dark' title='Button' />
      <Jobs data={data} />
    </>
  )
}

export default App
