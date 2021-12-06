import React from 'react'
import logo from '../../logo.svg'
import {
  Nav,
  Link,
  Bars,
  RightMenu,
  LeftMenu,
  Btn,
} from './HeaderElements'

const Header = () => <Nav>
  <Link to='/'>
    <img src={logo} alt='Finn Logo' />
  </Link>
  <Bars />
  <LeftMenu>
    <Link to='/features'>
      Features
    </Link>
    <Link to='/pricing'>
      Pricing
    </Link>
    <Link to='/resources'>
      Resources
    </Link>
    <Link to='/signin'>
      Login
    </Link>  </LeftMenu>
  <RightMenu>
    <Btn to='/signup'>
      Sign Up
    </Btn>
  </RightMenu>
</Nav>

export default Header