import Styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Button = Styled(NavLink)`
  text-decoration: none;
  background: hsl(180, 66%, 49%);
  color: #FFFF;
  border: none;
  border-radius: 25rem;
  margin: .5rem;
  padding: .5rem;
`