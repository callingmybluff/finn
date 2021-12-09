import Styled from 'styled-components'
import { SmallCornerButton } from '../shared'

export const Container = Styled.div`
  display: flex;
  flex-flow: column;
`

export const Item = Styled.div`
  flex: 1;
  display: flex;

  flex-flow: row;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    flex-flow: column;
  }
`

export const ItemContainer = Styled.div`
  display: flex;
  background-color: white;
  margin-top: 1ex;
  margin-bottom: 1ex;
  border-radius: .5ex;

  flex-flow: row;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    flex-flow: column;
  }
`

export const OriginalLink = Styled.p`
  flex: 1;
  text-align: left;
  font-weight: ${props => props.theme.font.weight.light};
  padding: 1ex;
  margin: 0;

  align-self: center;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    align-self: auto;
    border-bottom: ${props => `1px solid ${props.theme.color.neutral.gray}`};
  }
`

export const GeneratedLink = Styled.p`
  flex: 0;
  text-align: left;
  color: ${props => props.theme.color.primary.cyan};
  font-weight: ${props => props.theme.font.weight.light};
  white-space: nowrap;
  padding: 1ex;
  margin: 0;

  align-self: center;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    align-self: auto;
  }
`

export const Button = Styled(SmallCornerButton)`
  align-self: center;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 1ex;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    align-self: auto;
  }
`

export const DisabledButton = Styled(Button)`
  background-color: ${props => props.theme.color.primary.darkViolet};
  padding-left: 1rem;
  padding-right: 1.5rem;
`