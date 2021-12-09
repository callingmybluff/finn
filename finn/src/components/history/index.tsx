import { Container } from './HistoryElements'
import HistoryItem from "./HistoryItem"
import { HistoryM } from './models'

const History = () => {
  const model = new HistoryM()
  return <Container>
    {
      model
        .getList()
        .map((item, index) => <HistoryItem key={index} item={item} />)
    }
  </Container>
}

export default History