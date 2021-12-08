import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    flex-direction: column;
  }
`

export const Img = Styled.img`
  flex: 1 1 auto;
  object-fit: cover;
  object-position: left;
`

export const TextBlock = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  flex: 1 1 auto;

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    align-items: center;
  }
`

export const Header = Styled.h1`
  text-align: left;
  color: ${props => props.theme.color.primary.darkViolet};

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    text-align: center;
  }
`

export const Body = Styled.p`
  text-align: left;
  color: ${props => props.theme.color.neutral.gray};

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    text-align: center;
  }
`

export const ButtonContainer = Styled.div`
  display: flex;
  align-items: left;

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    align-items: center;
  }
`