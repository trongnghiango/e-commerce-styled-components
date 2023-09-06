import { IoMdSend } from 'react-icons/io';
import {
  Button,
  Container,
  Description,
  Input,
  InputContainer,
  Title,
} from './styled';

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletters</Title>
      <Description>Get timely updates from the favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email..." />
        <Button>
          <IoMdSend size={20} />
        </Button>
      </InputContainer>
    </Container>
  );
};
