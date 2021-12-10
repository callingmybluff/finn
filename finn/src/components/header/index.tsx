import React from 'react'
import { Dropdown } from 'react-bootstrap'

import {
  Nav,
  Link,
  Bars,
  RightMenu,
  LeftMenu,
  BarContainer,
  LinkText,
  DropdownContainer,
  DropdownItem,
  DropdownDivider,
} from './HeaderElements'
import { BigCornerButton as Button } from '../shared'

type IBarToggle = {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {}
}
type ICustomMenu = {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  labeledBy?: string
}

const BarToggle = React.forwardRef((props: IBarToggle, ref: React.Ref<HTMLDivElement>) =>
  <div ref={ref} onClick={props.onClick}><Bars>
    {props.children}
  </Bars>
  </div>),
  CustomMenu = React.forwardRef((props: ICustomMenu, ref: React.Ref<HTMLDivElement>) => {
    return <DropdownContainer ref={ref} style={props.style} className={props.className}>
      {props.children}
    </DropdownContainer>
  })

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
  <BarContainer>
    <Dropdown>
      <Dropdown.Toggle as={BarToggle}></Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu}>
        {
          linksLeft.map(link => <DropdownItem href={link.target}>{link.title}</DropdownItem>)
        }
        <DropdownDivider />
        {
          linksRight.map(link => <DropdownItem href={link.target}>{link.title}</DropdownItem>)
        }
        <SigninButton />
      </Dropdown.Menu>
    </Dropdown>
  </BarContainer>
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