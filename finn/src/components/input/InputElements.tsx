import Styled from 'styled-components'

import { SmallCornerButton } from '../shared'

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.size.margin};
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    margin: ${props => props.theme.size.marginMobile};
  }
`

export const FormContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1ex;
  border-radius: 1ex;

  background-color: ${props => props.theme.color.primary.darkViolet};
  background-size: cover;
  background-image: url('images/bg-shorten-desktop.svg');
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
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

export const InputContainer = Styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
`

export const ErrorText = Styled.div`
  flex: 1;
  text-align: left;
  color: red;
  font-style: italic;
  font-weight: ${props => props.theme.font.weight.light};
  scale: .9;
`

export const InputField = Styled.input`
  border-radius: 5px;
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

  &.wrong {
    border: 1px solid red;
    ::placeholder {
      color: red;
    }
  }
`
