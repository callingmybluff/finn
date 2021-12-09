import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  background-color: ${props => props.theme.color.neutral.veryDarkViolet};

  padding: ${props => props.theme.size.margin};
  flex-flow: row;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    padding: ${props => props.theme.size.marginMobile};
    flex-flow: column;
  }
`

export const Part = Styled.div`
  flex: 1;
  color: white;
`

export const Title = Styled.h1`
  color: white;
  text-align: left;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    text-align: center;
  }
`

export const PartTitle = Styled.h4`
  color: white;
  padding-bottom: 2ex;
  margin: 0;

  text-align: left;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    text-align: center;
  }
`

export const PartLink = Styled.div`
  color: ${props => props.theme.color.neutral.gray};
  font-weight: ${props => props.theme.font.weight.light};
  padding-bottom: 1ex;

  text-align: left;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    text-align: center;
  }
`

export const SocialMedia = Styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    margin 4ex;
  }
`

export const SocialMediaIcon = Styled.img`
`