import { ChangeEvent, useState } from "react"

import History from "../history"
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

  const submit = () => {
    console.log(input)
    if (input.length === 0)
      setError('Please add a link')
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
    <History />
  </Container>
}

export default Input