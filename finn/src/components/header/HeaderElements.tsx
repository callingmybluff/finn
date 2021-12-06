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

  @media screen and (max-width: 375px) {
    display: none;
  }
`

export const RightMenu = styled.nav`
  display: flex;
  flex: 0 0 auto;
  align-items: right;

  @media screen and (max-width: 375px) {
    display: none;
  }
`

export const Link = styled(NavLink)`
  flex: 0;
  display: flex;

  color: hsl(0, 0%, 75%);
  text-decoration: none;
  padding: 1rem 1rem;
`

export const Bars = styled(FaBars)`
  display: none;
  color: hsl(0, 0%, 75%);

  @media screen and (max-width: 375px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const Btn = styled(Link)`
  flex: 1;

  background: hsl(180, 66%, 49%);
  color: #FFFF;
  border-radius: 20%;
  margin: .5rem;
  padding: .5rem;
`
