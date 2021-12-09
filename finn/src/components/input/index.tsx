import {
  ChangeEvent,
  useContext,
  useState,
} from "react"

import HistoryDispatch from "../../historyDispatch"
import { HistoryItemM, HistoryData } from "../history"
import {
  Container,
  FormContainer,
  InputContainer,
  InputField,
  ErrorText,
  Button,
} from "./InputElements"

const Input = () => {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const dispatch = useContext(HistoryDispatch)

  const submit = () => {
    if (input.length === 0)
      setError('Please add a link')
    else
      if (dispatch)
        HistoryItemM.fromInput(input)
          .then(item => {
            dispatch({
              type: 'ADD',
              payload: item,
            })
            HistoryData.addItem(item)
          })
  }

  const typing = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
    if (error.length > 0 && event.target.value.length > 0)
      setError('')
  }

  return <Container>
    <FormContainer>
      <InputContainer>
        <InputField onChange={typing} className={error.length > 0 ? 'wrong' : ''} placeholder='Shorten a link here...' />
        <ErrorText>{error}</ErrorText>
      </InputContainer>
      <Button onClick={submit} to=''>Shorten It!</Button>
    </FormContainer>
  </Container>
}

export default Input