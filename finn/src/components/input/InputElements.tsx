import Styled from 'styled-components'

import { SmallCornerButton } from '../shared'

export const InputContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1ex;
  border-radius: 1ex;

  background-color: ${props => props.theme.color.primary.darkViolet};
  background-size: cover;
  background-image: url('images/bg-shorten-desktop.svg');
  margin: ${props => props.theme.size.margin};
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    margin: ${props => props.theme.size.marginMobile};
    flex-direction: column;
    background-image: url('images/bg-shorten-mobile.svg');
  }
`

export const Button = Styled(SmallCornerButton)`
  margin: 2ex;
  padding: 2ex;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    margin: 1ex;
  }
`

export const InputForm = Styled.input`
  border-radius: 5px;
  flex: 1;
  margin: 2ex;
  padding: 2ex;

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    margin: 1ex;
  }

  ::placeholder {
    color: ${props => props.theme.color.neutral.veryDarkBlue};
    font-size: ${props => props.theme.font.size};
    font-weight: ${props => props.theme.font.weight.light};
    margin: 4rem;
  }
`
