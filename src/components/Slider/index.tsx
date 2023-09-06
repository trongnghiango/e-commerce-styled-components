import { useState } from 'react';
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
  Wrapper,
} from './styled';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { slideItems } from '../../data';
import { useInterval } from 'react-use';

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const SLIDE_NUM = slideItems.length - 1 || 2;

  const clickHandler = (direction: string) => {
    console.log('click', direction, slideIndex);
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : SLIDE_NUM);
    } else {
      setSlideIndex(slideIndex < SLIDE_NUM ? slideIndex + 1 : 0);
    }
  };

  useInterval(() => {
    setSlideIndex(slideIndex < SLIDE_NUM ? slideIndex + 1 : 0);
  }, 5000);

  return (
    <Container>
      <Arrow direction={'left'} onClick={() => clickHandler('left')}>
        <AiOutlineArrowLeft size={24} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {!!slideItems &&
          slideItems.map((slide, idx) => (
            <Slide bg={slide.bg} key={`${slide.id}`}>
              <ImageContainer>
                <Image
                  src={slide.img}
                  // src={`https://pluspng.com/img-png/clothing-hd-png-model-png-hd-png-image-600.png`}
                />
              </ImageContainer>
              <InfoContainer>
                <Title>{slide.title}</Title>
                <Desc>{slide.desc}</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          ))}
      </Wrapper>
      <Arrow direction={'right'} onClick={() => clickHandler('right')}>
        <AiOutlineArrowRight size={24} />
      </Arrow>
    </Container>
  );
};
