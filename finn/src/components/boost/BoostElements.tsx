import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: ${props => props.theme.color.primary.darkViolet};
  background-size: cover;
  color: white;
  padding: 1ex;

  padding-top: 4ex;
  padding-bottom: 4ex;
  background-image: url('images/bg-boost-desktop.svg');
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    padding-top: 8ex;
    padding-bottom: 8ex;
    background-image: url('images/bg-boost-mobile.svg');
  }
`

export const Title = Styled.h1`
  text-align: center;
`