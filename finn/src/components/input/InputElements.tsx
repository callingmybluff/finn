import Styled from 'styled-components'

export const InputContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem;

  background-color: ${props => props.theme.color.primary.darkViolet};
  background-size: cover;
  background-image: url('images/bg-shorten-desktop.svg');

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    flex-direction: column;
    background-image: url('images/bg-shorten-mobile.svg');
  }
`

export const InputForm = Styled.input`
  border-radius: 5px;
  flex: 1;
  margin: .4rem;

  ::placeholder {
    color: ${props => props.theme.color.neutral.gray};
    font-size: 18px;
    padding: 4rem;
    margin: 4rem;
  }
`
