import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-flow: row;
  background-color: ${props => props.theme.color.neutral.veryDarkViolet};

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    flex-flow: column;
  }
`

export const Part = Styled.div`
  flex: 1;
  color: white;
`

export const Title = Styled.h1`
  color: white;
  text-align: center;
`

export const PartTitle = Styled.h2`
  color: white;

  text-align: left;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    text-align: center;
  }
`

export const PartLink = Styled.div`
  color: ${props => props.theme.color.neutral.gray};

  text-align: left;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    text-align: center;
  }
`

export const SocialMedia = Styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`

export const SocialMediaIcon = Styled.img`
`