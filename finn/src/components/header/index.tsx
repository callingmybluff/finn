import React from 'react'
import {
  Nav,
  Link,
  Bars,
  RightMenu,
  LeftMenu,
  BarContainer,
  LinkText,
} from './HeaderElements'
import { BigCornerButton as Button } from '../shared'

const Header = () => <Nav>
  <Link to='/'>
    <img src='images/logo.svg' alt='Logo' />
  </Link>
  <BarContainer>
    <Bars />
  </BarContainer>
  <LeftMenu>
    <Link to='/features'>
      <LinkText>
        Features
      </LinkText>
    </Link>
    <Link to='/pricing'>
      <LinkText>
        Pricing
      </LinkText>
    </Link>
    <Link to='/resources'>
      <LinkText>
        Resources
      </LinkText>
    </Link>
  </LeftMenu>
  <RightMenu>
    <Link to='/signin'>
      <LinkText>
        Login
      </LinkText>
    </Link>
    <Button to='/signup'>
      Sign Up
    </Button>
  </RightMenu>
</Nav >

export default Header