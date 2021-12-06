import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`

export const Img = Styled.img`
  flex: 1 1 auto;
  object-fit: cover;
`

export const TextBlock = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  flex: 1 1 auto;

  @media screen and (max-width: 375px) {
    align-items: center;
  }
`

export const Header = Styled.h1`
  text-align: left;

  @media screen and (max-width: 375px) {
    text-align: center;
  }
`

export const Body = Styled.p`
  text-align: left;

  @media screen and (max-width: 375px) {
    text-align: center;
  }
`
export const ButtonContainer = Styled.div`
  display: flex;
  align-items: left;

  @media screen and (max-width: 375px) {
    align-items: center;
  }
`