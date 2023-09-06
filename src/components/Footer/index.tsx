import {
  BsFacebook,
  BsInstagram,
  BsPhone,
  BsPhoneFlip,
  BsPhoneLandscape,
  BsPinterest,
  BsTelephoneFill,
  BsTwitter,
} from 'react-icons/bs';
import { FaLocationArrow, FaSearchLocation } from 'react-icons/fa';
import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from './styled';
import { AiFillMail } from 'react-icons/ai';

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <BsFacebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <BsInstagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <BsTwitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <BsPinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Lists</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FaLocationArrow style={{ marginRight: '10px' }} /> 622 Dixie Path ,
          South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <BsTelephoneFill style={{ marginRight: '10px' }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <AiFillMail style={{ marginRight: '10px' }} /> contact@lama.dev
        </ContactItem>
        <Payment src={`https://i.ibb.co/Qfvn4z6/payment.png`} />
      </Right>
    </Container>
  );
};
