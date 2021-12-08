import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
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
  align-items: right;

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

export const Bars = styled(FaBars)`
  display: none;
  color: ${props => props.theme.color.neutral.gray};

  @media screen and (max-width: ${props => props.theme.size.mobile}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`