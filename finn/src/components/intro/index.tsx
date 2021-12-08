import React from 'react'

import {
  Container,
  Img,
  TextBlock,
  Header,
  Body,
  ButtonContainer,
} from './IntroElements'
import { BigCornerButton as Button } from '../shared'

// Ideally, we would place the text inside `.env`
const Intro = () => <Container>
  <Img src='images/illustration-working.svg' alt='illustration-working' />
  <TextBlock>
    <Header>More than just shorter links</Header>
    <Body>Build your brand's recognition and get detailed insights on how your links are performing</Body>
    <ButtonContainer>
      <Button to='/login'>Get Started</Button>
    </ButtonContainer>
  </TextBlock>
</Container>

export default Intro