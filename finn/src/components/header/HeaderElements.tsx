import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;

  margin: ${props => props.theme.size.margin};
  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    margin: ${props => props.theme.size.marginMobile};
  }
`

export const BarContainer = styled.div`
  display: none;

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`

export const LeftMenu = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: left;

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    display: none;
  }
`

export const RightMenu = styled.nav`
  display: flex;
  flex: 0 0 auto;
  align-items: center;

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    display: none;
  }
`

export const Link = styled(NavLink)`
  flex: 0;
  display: flex;

  color: ${props => props.theme.color.neutral.gray};
  text-decoration: none;
  padding: 1rem 1rem;
`

export const LinkText = styled.p``

export const Bars = styled(FaBars)`
  color: ${props => props.theme.color.neutral.gray};
  scale: 2;
`