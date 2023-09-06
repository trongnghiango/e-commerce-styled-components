import {
  Arrow,
  Button,
  Container,
  Desc,
  Image,
  ImageContainer,
  InfoContainer,
  Slide,
  Title,
} from './styled';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export const Slider = () => {
  return (
    <Container>
      <Arrow direction={'left'}>
        <AiOutlineArrowLeft />
      </Arrow>
      <Slide>
        <ImageContainer>
          <Image
            src={`https://pluspng.com/img-png/clothing-hd-png-model-png-hd-png-image-600.png`}
          />
        </ImageContainer>
        <InfoContainer>
          <Title>SUMMER SALEs</Title>
          <Desc>
            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
          </Desc>
          <Button>SHOP NOW</Button>
        </InfoContainer>
      </Slide>
      <Arrow direction={'right'}>
        <AiOutlineArrowRight />
      </Arrow>
    </Container>
  );
};
