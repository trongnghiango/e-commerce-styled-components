import { FC } from 'react';
import { Button, Image, Info, Title, Wrapper } from './styled';

export type CategoryItemProps = {
  id?: number;
  img: string;
  title: string;
};
export const CategoryItem: FC<CategoryItemProps> = (props) => {
  const { title, img } = props;
  return (
    <Wrapper>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW!</Button>
      </Info>
    </Wrapper>
  );
};
