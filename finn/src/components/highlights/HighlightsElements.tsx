import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;

  flex-flow: row;
  background: linear-gradient(${props => props.theme.color.primary.cyan}, ${props => props.theme.color.primary.cyan}) no-repeat center/70% 10px;
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    flex-flow: column;
    background-size: 10px 70%;
  }
`

export const CardContainer = (margin: string) => Styled.div`
  display: flex;
  flex-flow: column;
  background-color: white;
  margin-left: 1%;
  margin-right: 1%;

  margin-top: ${margin};
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    margin-top: 20%;
    margin-bottom: 1%;
  }
`

export const LogoContainer = Styled.div`
  flex: 0;
  position: relative;
  width: max-content;
  height: max-content;
  padding: 20px;
  background-color: ${props => props.theme.color.primary.darkViolet};
  border-radius: 50%;

  transform: translate(50%, -50%);
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    transform: translate(-50%, -50%);
    left: 50%;
  }
`

export const Logo = Styled.img`
`

export const Title = Styled.h1`
  flex: 0;
`

export const Body = Styled.p`
  flex: 0;
`