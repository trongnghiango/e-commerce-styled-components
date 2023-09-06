import { Circle, Icon, Image, Info, Wrapper } from './styled';
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHeart,
} from 'react-icons/ai';

export const Product = ({ item }: any) => {
  return (
    <Wrapper>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <AiOutlineShoppingCart size={24} />
        </Icon>
        <Icon>
          <AiOutlineSearch size={24} />
        </Icon>
        <Icon>
          <AiOutlineHeart size={24} />
        </Icon>
      </Info>
    </Wrapper>
  );
};
