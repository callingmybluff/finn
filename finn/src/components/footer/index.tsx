import {
  Container,
  Part,
  PartLink,
  PartTitle,
  SocialMedia,
  SocialMediaIcon,
  Title,
} from './FooterElements'

const Footer = () => <Container>
  <Part>
    <Title>Shortly</Title>
  </Part>
  <Part>
    <PartTitle>Features</PartTitle>
    <PartLink>Link Shortening</PartLink>
    <PartLink>Branded Links</PartLink>
    <PartLink>Analytics</PartLink>
  </Part>
  <Part>
    <PartTitle>Resources</PartTitle>
    <PartLink>Blog</PartLink>
    <PartLink>Developers</PartLink>
    <PartLink>Support</PartLink>
  </Part>
  <Part>
    <PartTitle>Company</PartTitle>
    <PartLink>About</PartLink>
    <PartLink>Our Team</PartLink>
    <PartLink>Careers</PartLink>
    <PartLink>Contact</PartLink>
  </Part>
  <Part>
    <SocialMedia>
      <SocialMediaIcon src='images/icon-facebook.svg' alt='Facebook icon' />
      <SocialMediaIcon src='images/icon-twitter.svg' alt='Twitter icon' />
      <SocialMediaIcon src='images/icon-pinterest.svg' alt='Pinterest icon' />
      <SocialMediaIcon src='images/icon-instagram.svg' alt='Instagram icon' />
    </SocialMedia>
  </Part>
</Container>

export default Footer