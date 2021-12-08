import React from 'react'
import logo from '../../logo.svg'
import {
  Nav,
  Link,
  Bars,
  RightMenu,
  LeftMenu,
} from './HeaderElements'
import { BigCornerButton as Button } from '../shared'

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
    <Button to='/signup'>
      Sign Up
    </Button>
  </RightMenu>
</Nav>

export default Header