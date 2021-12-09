import { Container } from './HistoryElements'
import HistoryItem from "./HistoryItem"
import { HistoryData, HistoryItemM } from './models'

interface IHistory {
  list: HistoryItemM[]
}

const History = ({ list }: IHistory) => {
  return <Container>
    {
      list.map((item, index) => <HistoryItem key={index} item={item} />)
    }
  </Container>
}

export default History
export {
  HistoryData,
  HistoryItemM,
}