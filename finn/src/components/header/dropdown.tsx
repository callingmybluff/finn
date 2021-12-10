import { useState } from "react"
import { BarContainer, Bars } from "./HeaderElements"

interface IDropmenu {
  children: React.ReactNode,
}

const Dropmenu = ({ children }: IDropmenu) => {
  const [isOpen, setIsOpen] = useState(false)

  return < BarContainer >
    <Bars onClick={() => setIsOpen(!isOpen)} />
    {isOpen ?
      children
      :
      <></>
    }
  </BarContainer>
}

export default Dropmenu