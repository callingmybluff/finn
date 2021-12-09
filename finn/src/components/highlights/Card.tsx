import {
  Body,
  CardContainer,
  Logo,
  LogoContainer,
  Title,
} from "./HighlightsElements"

interface ICard {
  logo: string
  title: string
  body: string
  extraMargin: string
}

const Card = (
  {
    logo,
    title,
    body,
    extraMargin,
  }: ICard
) => {
  const MarginedCardContainer = CardContainer(extraMargin)
  return <MarginedCardContainer>
    <LogoContainer>
      <Logo src={logo} />
    </LogoContainer>
    <Title>{title}</Title>
    <Body>{body}</Body>
  </MarginedCardContainer>
}

export default Card