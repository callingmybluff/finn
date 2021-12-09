import { useState } from 'react'
import Copy from 'clipboard-copy'

import {
  GeneratedLink,
  ItemContainer,
  OriginalLink,
  Button,
  DisabledButton,
} from "./HistoryElements";
import { HistoryItemM } from "./models";

interface IHistoryItem {
  item: HistoryItemM
}

const HistoryItem = ({ item }: IHistoryItem) => {
  const [copied, setCopied] = useState(false)

  const doTheCopy = (item: HistoryItemM) => {
    setCopied(true)
    Copy(item.copyToClipboard())
    setTimeout(() => setCopied(false), 1000)
  }

  return <ItemContainer>
    <OriginalLink>{item.old}</OriginalLink>
    <GeneratedLink>{item.generated}</GeneratedLink>
    {copied
      ?
      <DisabledButton to='/'>Copied!</DisabledButton>
      :
      <Button to='/' onClick={doTheCopy.bind(null, item)}>Copy</Button>
    }
  </ItemContainer>
}

export default HistoryItem