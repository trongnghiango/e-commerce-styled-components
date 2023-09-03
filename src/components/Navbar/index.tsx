import {
  Center,
  Container,
  Left,
  Right,
  Wrapper,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
  CartContainer,
  Badge,
} from './styled';

import { BsSearch, BsMailbox, BsCart } from 'react-icons/bs';

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <BsSearch size={24} color="lightgray" />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <CartContainer>
              <BsCart size={24} />
              <Badge>0</Badge>
            </CartContainer>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
