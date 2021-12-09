import {
  InputContainer,
  InputForm,
  Button,
} from "./InputElements"

const Input = () => <InputContainer>
  <InputForm placeholder='Shorten a link here...' />
  <Button to=''>Shorten It!</Button>
</InputContainer>

export default Input