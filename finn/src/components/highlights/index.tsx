import {
  Container,
} from "./HighlightsElements"
import Card from './Card'

const Highlights = () => <Container>
  <Card extraMargin="0" logo="images/icon-brand-recognition.svg" title="Brand Reconition" body="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content" />
  <Card extraMargin="5%" logo="images/icon-detailed-records.svg" title="Detailed Records" body="Gain insights into who is clicking your links. Knowing whe and where people engage with your content helps inform better decisions." />
  <Card extraMargin="10%" logo="images/icon-fully-customizable.svg" title="Fully Customizable" body="Improve brand awareness and conent discoverability through customizable links, supercharging audience engagement." />
</Container>

export default Highlights