import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: ${props => props.theme.color.primary.darkViolet};
  background-size: cover;
  background-image: url('images/bg-boost-desktop.svg');
  color: white;

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    background-image: url('images/bg-boost-mobile.svg');
  }
`

export const Title = Styled.h1`
`