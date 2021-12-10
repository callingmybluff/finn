import React from 'react'

import {
  Nav,
  Link,
  RightMenu,
  LeftMenu,
  LinkText,
  DropdownContainer,
  DropdownDivider,
  DropdownItem,
  DropdownText,
} from './HeaderElements'
import { BigCornerButton as Button } from '../shared'
import Dropmenu from './dropdown'

const linksLeft = [
  {
    target: '/features',
    title: 'Features',
  },
  {
    target: '/pricing',
    title: 'Pricing',
  },
  {
    target: '/resources',
    title: 'Resources',
  },
],
  linksRight = [
    {
      target: '/login',
      title: 'Login',
    },
  ],
  SigninButton = () => <Button to='/signup'>
    Sign Up
  </Button>


const Header = () => <Nav>
  <Link to='/'>
    <img src='images/logo.svg' alt='Logo' />
  </Link>
  <Dropmenu>
    <DropdownContainer>
      {
        linksLeft.map(link => <DropdownItem to={link.target}>
          <DropdownText>
            {link.title}
          </DropdownText>
        </DropdownItem>)
      }
      <DropdownDivider />
      {
        linksRight.map(link => <DropdownItem to={link.target}>
          <DropdownText>
            {link.title}
          </DropdownText>
        </DropdownItem>)
      }
      <SigninButton />
    </DropdownContainer>
  </Dropmenu>
  <LeftMenu>
    {
      linksLeft.map(link => <Link to={link.target}>
        <LinkText>
          {link.title}
        </LinkText>
      </Link>)
    }
  </LeftMenu>
  <RightMenu>
    {
      linksRight.map(link => <Link to={link.target}>
        <LinkText>
          {link.title}
        </LinkText>
      </Link>)
    }
    <SigninButton />
  </RightMenu>
</Nav >

export default Header