import Styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Button = (radius: string, paddingMargin: string) => Styled(NavLink)`
  text-decoration: none;
  background: ${props => props.theme.color.primary.cyan};
  color: #FFFF;
  border: none;
  border-radius: ${radius};
  text-align: center;
  margin-left: ${paddingMargin};
  margin-right: ${paddingMargin};
  padding: ${paddingMargin};
  height: min-content;
`

const BigCornerButton = Button('25ex', '1ex'),
  SmallCornerButton = Button('.8ex', '1ex')

export {
  BigCornerButton,
  SmallCornerButton,
}