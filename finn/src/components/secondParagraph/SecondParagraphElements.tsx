import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: column;

  margin: ${props => props.theme.size.margin};
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    margin: ${props => props.theme.size.marginMobile};
  }
`


export const Title = Styled.h1`
  text-align: center;
  color: ${props => props.theme.color.primary.darkViolet};
`

export const Body = Styled.p`
  text-align: center;
  color: ${props => props.theme.color.neutral.gray};
  font-weight: ${props => props.theme.font.weight.light};
`
