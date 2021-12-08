import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
`


export const Title = Styled.h1`
  text-align: center;
  color: ${props => props.theme.color.primary.darkViolet};
`

export const Body = Styled.p`
  text-align: center;
  color: ${props => props.theme.color.neutral.gray};
`
