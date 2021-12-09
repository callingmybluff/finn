import History from "../history"
import {
  Container,
  FormContainer,
  InputForm,
  Button,
} from "./InputElements"

const Input = () => <Container>
  <FormContainer>
    <InputForm placeholder='Shorten a link here...' />
    <Button to=''>Shorten It!</Button>
  </FormContainer>
  <History />
</Container>

export default Input