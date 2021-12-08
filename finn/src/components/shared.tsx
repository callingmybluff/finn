import Styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Button = (radius: string, paddingMargin: string) => Styled(NavLink)`
  text-decoration: none;
  background: ${props => props.theme.color.primary.cyan};
  color: #FFFF;
  border: none;
  border-radius: ${radius};
  text-align: center;
  margin: ${paddingMargin};
  padding: ${paddingMargin};
`

const BigCornerButton = Button('25rem', '.5rem'),
  SmallCornerButton = Button('.5rem', '.4rem')

export {
  BigCornerButton,
  SmallCornerButton,
}