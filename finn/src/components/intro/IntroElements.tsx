import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: ${props => props.theme.size.margin};

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    margin: ${props => props.theme.size.marginMobile};
    flex-direction: column;
    margin: 0;
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
  color: ${props => props.theme.color.primary.darkViolet};

  text-align: left;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    text-align: center;
  }
`

export const Body = Styled.p`
  font-weight: ${props => props.theme.font.weight.light};
  color: ${props => props.theme.color.neutral.gray};

  text-align: left;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    text-align: center;
  }
`

export const ButtonContainer = Styled.div`
  display: flex;
  align-items: left;
  margin: 10px;

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    align-items: center;
  }
`