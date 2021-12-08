import { SmallCornerButton as Button } from "../shared"
import {
  InputContainer,
  InputForm,
} from "./InputElements"

const Input = () => <InputContainer>
  <InputForm placeholder='Shorten a link here...' />
  <Button to=''>Shorten It!</Button>
</InputContainer>

export default Input