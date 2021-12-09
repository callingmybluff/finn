import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;

  flex-flow: row;
  background: linear-gradient(${props => props.theme.color.primary.cyan}, ${props => props.theme.color.primary.cyan}) no-repeat center/70% 10px;
  margin: ${props => props.theme.size.margin};
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    margin: ${props => props.theme.size.marginMobile};
    flex-flow: column;
    background-size: 10px 70%;
  }
`

export const CardContainer = (margin: string) => Styled.div`
  display: flex;
  flex-flow: column;
  background-color: white;
  margin: 1ex;
  border-radius: .5ex;
  padding: 1ex;
  height: max-content;

  margin-top: ${margin};
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    margin: 0;
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

export const Title = Styled.h3`
  flex: 0;

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    text-align: center;
  }
`

export const Body = Styled.p`
  flex: 0;
  color: ${props => props.theme.color.neutral.gray};
  font-weight: ${props => props.theme.font.weight.light};

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    text-align: center;
  }
`